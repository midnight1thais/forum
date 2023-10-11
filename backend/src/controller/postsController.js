import { json } from "express";
import { db } from "../database/database.js"
import { v4 } from "uuid";

export const getPosts = async (req, res) => {
    try {
        const token = req.headers.authorization;
        if (!token) {
            res.statusCode = 400;
            throw new Error("Necessário informar o token");
        }

        const [tokenExist] = await db("users").where({ id: token });
        if (!tokenExist) {
            res.statusCode = 400;
            throw new Error("Token inválido");
        }

        const posts = await db("posts as p")
            .select("u.username as creator_name", "p.creator as creator_id", "p.id as post_id", "p.title as post_title",
                "p.content as post_content", "p.created_at as post_created_at", "p.image as post_image")
            .innerJoin("users as u", "u.id", "=", "p.creator");

        res.status(200).send(posts);
    } catch (error) {
        res.send(error.message);
    }
}

export const create = async (req, res) => {
    try {
        const { title, content, image, hashtag } = req.body;
        const token = req.headers.authorization;
        if (!title || !content || !image || !hashtag) {
            res.statusCode = 400;
            throw new Error("Necessário passar 'content', 'title', 'image', 'hashtag'");
        }

        if (typeof title !== "string") {
            res.statusCode = 400;
            throw new Error("'title' precisa ser do tipo 'string'");
        }

        if (typeof content !== "string") {
            res.statusCode = 400;
            throw new Error("'content' precisa ser do tipo 'string'")
        }

        if (typeof image !== "string") {
            res.statusCode = 400;
            throw new Error("'image' precisa ser do tipo 'string'")
        }

        if (!Array.isArray(hashtag)) {
            throw new Error("Hashtag precisa ser um array");
        }

        const hashtagToString = JSON.stringify(hashtag);

        if (!token) {
            res.statusCode = 400;
            throw new Error("Informar o 'token'");
        }

        const [creatorExist] = await db("users").where({ id: token });

        if (!creatorExist) {
            res.statusCode = 400;
            throw new Error("ID do usuário não encontrado");
        }

        const id = v4();

        await db("posts").insert({ id, creator: token, title, content, image, hashtag: hashtagToString });

        res.status(201).send("Postagem criada com sucesso");
    } catch (error) {
        res.send(error.message);
    }
}

export const edit = async (req, res) => {
    try {
        const { id } = req.params;
        const token = req.headers.authorization;
        const { content, image, title, hashtag } = req.body;

        if (!token) {
            throw new Error("Token é necessário");
        }

        const [postExist] = await db("posts").where({ id });
        if (!postExist) {
            throw new Error("id da postagem não encontrado");
        }

        if (postExist.creator !== token) {
            throw new Error("Só quem criou a postagem pode editar a mesma. Verifique o token");
        }

        if (hashtag && !Array.isArray(hashtag)) {
            throw new Error("Hashtag precisa ser um array");
        }

        const newPost = {
            id,
            creator: token,
            title: title || postExist.title,
            content: content || postExist.content,
            image: image || postExist.image,
            hashtag: hashtag || postExist.hashtag
        };

        await db("posts").update(newPost).where({ id });

        res.status(200).send("Post atualizado com sucesso!");

    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params;
        const token = req.headers.authorization;

        if (!token) {
            throw new Error("É necessário passar um token");
        }

        const [postExist] = await db("posts").where({ id });

        if (!postExist) {
            throw new Error("id da postagem não encontrado")
        }

        if (postExist.creator !== token) {
            throw new Error("Só quem criou a postagem apagar a mesma");
        }

        await db("posts").del().where({ id });

        res.send("Postagem deletada com sucesso");

    } catch (error) {
        res.status(400).send(error.message)
    }
}

export const getPostById = async (req, res) => {
    try {
        const { id } = req.params;

        const [postExist] = await db("posts").where({ id });

        if (!postExist) {
            throw new Error("id da postagem inválido");
        }

        const [post] = await db("posts as p")
            .select("u.username as creator_name", "p.creator as creator_id", "p.id as post_id", "p.title as post_title",
                "p.content as post_content", "p.created_at as post_created_at", "p.image as post_image", "p.hashtag as post_hashtag")
            .innerJoin("users as u", "u.id", "=", "p.creator")
            .where("p.id", "=", `${id}`);

        post.post_hashtag = JSON.parse(post.post_hashtag);

        const comments = await db("comments as c")
            .select("c.id as comment_id", "c.creator_id as creator_id", "u.username as creator_name", "c.comment as comment", "c.created_at")
            .innerJoin("users as u", "u.id", "=", "c.creator_id");

        const likes = await db("likes as l")
            .select("like as likes")
            .where({ post: id });

        const response = { ...post, comments, likes };
        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const getAllPosts = async (req, res) => {
    try {
        const posts = await db("posts as p")
            .innerJoin("users as u", "u.id", "=", "p.creator")
            .leftJoin("comments as c", "c.post_id", "=", "p.id")
            .leftJoin("likes as l", "l.post", "=", "p.id")
            .leftJoin("users as u_comment", "u_comment.id", "=", "c.creator_id")
            .select(
                "u.username as creator_username",
                "p.creator as creator_id",
                "p.id as post_id",
                "p.title as post_title",
                "p.content as post_content",
                "p.created_at as post_created_at",
                "p.image as post_image",
                "p.hashtag as post_hashtag",
                "c.id as comment_id",
                "c.creator_id as comment_creator_id",
                "c.comment as comment",
                "c.created_at as comment_created_at",
                "u_comment.username as comment_creator_username",
                "l.like as likes")

        posts.forEach((post) => {
            return { ...post, post_hashtag: post.post_hashtag = JSON.parse(post.post_hashtag) }
        })

        const groupedPosts = new Map();

        posts.forEach((item) => {
            const postId = item.post_id;
            if (groupedPosts.has(postId)) {
                const existingPost = groupedPosts.get(postId);
                existingPost.comments.push({
                    comment_id: item.comment_id,
                    creator_id: item.comment_creator_id,
                    creator_name: item.comment_creator_username,
                    comment: item.comment,
                    created_at: item.created_at,
                });
            } else {
                const newPost = {
                    creator_username: item.creator_username,
                    creator_id: item.creator_id,
                    post_id: postId,
                    post_title: item.post_title,
                    post_content: item.post_content,
                    post_created_at: item.post_created_at,
                    post_image: item.post_image,
                    post_hashtag: item.post_hashtag,
                    comments: [],
                    likes: item.likes
                };
                if (item.comment_id) {
                    newPost.comments.push({
                        comment_id: item.comment_id,
                        creator_id: item.comment_creator_id,
                        creator_name: item.comment_creator_username,
                        comment: item.comment,
                        created_at: item.created_at,
                    });
                }
                groupedPosts.set(postId, newPost);
            }
        });

        const finalResult = Array.from(groupedPosts.values());

        res.status(200).send(finalResult);
    } catch (error) {
        res.send(error.message);
    }
}

export const getPostsByUserId = async (req, res) => {
    try {
        const { id } = req.params;
        const userExist = await db("users").where({ id });

        if (!userExist) {
            throw new Error("Id do usuário inválida");
        }

        const posts = await db("posts").where({ creator: id });
        const response = posts.map((post) => {
            return { ...post, hashtag: post.hashtag = JSON.parse(post.hashtag) }
        })

        res.status(200).send(response);
    } catch (error) {
        res.status(400).send(error.message);
    }
}
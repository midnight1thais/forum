import { db } from "../database/database.js";
import { v4 } from "uuid";

export const create = async (req, res) => {
    try {
        const { postId, comment } = req.body;
        const token = req.headers.authorization;

        if(!postId || !token || !comment){
            throw new Error("É necessário passar 'postId', 'token' e 'comment'");
        }

        const [postExist] = await db("posts").where({id: postId});

        if(!postExist){
            throw new Error("id da postagem inválido");
        }

        const [userExist] = await db("users").where({id: token});

        if(!userExist){
            throw new Error("id do usuário inválido");
        }

        const id = v4();

        await db("comments").insert({id, creator_id: token, post_id: postId, comment});

        res.status(201).send("Comentário criado com sucesso");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const edit = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { id } = req.params;
        const { comment } = req.body;

        if(!token || !comment){
            throw new Error("É necessário passar o 'token' e o 'comment' a ser editado");
        }

        const [commentExist] = await db("comments").where({id});

        if(!commentExist){
            throw new Error("Comentário não encontrado. Verifique o 'id'");
        }

        if(commentExist.creator_id !== token){
            throw new Error("Só o criador do comentário pode editar o mesmo");
        }

        await db("comments").update({comment}).where({id});

        res.status(200).send("Comentário editado com sucesso!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}

export const deleteComment = async (req, res) => {
    try {
        const token = req.headers.authorization;
        const { id } = req.params;

        if(!token){
            throw new Error("É necessário passar o 'token'");
        }

        const [commentExist] = await db("comments").where({id});

        if(!commentExist){
            throw new Error("Comentário não encontrado. Verifique o 'id'");
        }

        if(commentExist.creator_id !== token){
            throw new Error("Só o criador do comentário pode deletar o mesmo");
        }

        await db("comments").del().where({id});

        res.status(200).send("Comentário deletado com sucesso!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}
import { db } from "../database/database.js";

export const like = async (req, res) => {
    try {
        const { id } = req.params;
        const { like, userId } = req.body;

        if(like !== 1){
            throw new Error("O valor de like precisa ser i gual a 1");
        }

        if(typeof like !== "number"){
            throw new Error("Like precisa ser do tipo 'number'");
        } 

        const [postExist] = await db("posts").where({id});

        if(!postExist){
            throw new Error("Postagem não encontrada. Verifique o ID");
        }

        const [userExist] = await db("users").where({id: userId});

        if(!userExist){
            throw new Error("Usuário não encontrado. Verifique o userId");
        }

        const [userAlrealdyLiked] = await db("likes").where({post: id}).andWhere({user: userId});

        if(userAlrealdyLiked){
            throw new Error("Usuário já curtiu essa postagem");
        }

        const newLike = {
            post: id,
            user: userId,
            like: 1,
        };

        await db("likes").insert(newLike);

        res.status(200).send("Postagem curtida");
    } catch (error) {
        res.status(400).send(error.message);
    }
}
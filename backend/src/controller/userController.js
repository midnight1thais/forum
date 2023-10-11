import { db } from "../database/database.js";
import { v4 } from "uuid"

export const signup = async (req, res) => {
    try {
        const { email, username, password } = req.body;

        if (!email || !username || !password) {
            res.statusCode = 400;
            throw new Error("É necessário passar informações de 'email', 'username' e 'password'");
        }

        if (typeof email !== "string" || typeof username !== "string" || typeof password !== "string"){
            res.statusCode = 400;
            throw new Error("'email', 'username' e 'password' precisam ser do tipo 'string'");
        }

        if(password.length < 5){
            res.statusCode = 400;
            throw new Error("'password' precisa ter mais de 5 caracteres");
        }

        if(!email.includes("@")){
            res.statusCode = 400;
            throw new Error("Informe um 'email' válido");
        }

        const [userEmailExist] = await db("users").where({email});

        if(userEmailExist){
            throw new Error("E-mail já em uso. Utilize outro");
        }

        const id = v4();
        await db("users").insert({id, email, username, password});

        res.status(201).send({message: "Usuário criado com sucesso!", token: id});

    } catch (error) {
        res.send(error.message);
    }
}

export const login = async (req, res) => {
    try {
        const { username, password } = req.body;

        if(!username || !password){
            res.statusCode(400);
            throw new Error("É necessário passar informações de 'username' e 'password'");
        }

        const [userExist] = await db("users").where({username});

        if(!userExist){
            res.statusCode = 404;
            throw new Error("Usuário não encontrado. Verifique as informações");
        }

        res.status(200).send({message: "Login feito com sucesso", token: userExist.id});
        
    } catch (error) {
        res.send(error.message);
    }
}

export const edit = async (req, res) => {
    try {
        const { image } = req.body;
        const { id } = req.params;

        if(!image){
            throw new Error("É necessário passar 'image' via body");
        }

        const [userExist] = await db("users").where({id});

        if(!userExist){
            throw new Error("Usuário não encontrado");
        }

        await db("users").update({image}).where({id});

        res.status(200).send("Imagem alterada com sucesso!");
    } catch (error) {
        res.status(400).send(error.message);
    }
}
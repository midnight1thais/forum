import { Router } from "express";
import { edit, login, signup } from "../controller/userController.js";

export const userRouter = Router();

//criar usuário
userRouter.post("/signup", signup);
//login
userRouter.post("/login", login);
//editar imagem do usuário
userRouter.put("/edit/:id", edit)
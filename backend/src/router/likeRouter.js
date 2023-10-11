import { Router } from "express";
import { like } from "../controller/likeController.js";

export const likeRouter = Router();

//curtir postagem
likeRouter.post("/:id", like);
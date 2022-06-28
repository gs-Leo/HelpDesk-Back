import { Router } from "express";
import { CadUsuario } from "./Controle/cadUsuario.js";

const rotas = Router();

rotas.post("/cadUsers", 
    new CadUsuario().Execute
);

export {rotas};
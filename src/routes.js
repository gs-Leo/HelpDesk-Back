import { Router } from "express";
import { CadChamado } from "./Controle/cadChamado.js";
import { CadUsuario } from "./Controle/cadUsuario.js";

const rotas = Router();

rotas.post("/cadUsers", 
    new CadUsuario().execute
);
rotas.post("/cadChamados", 
    new CadChamado().execute
);

export {rotas};
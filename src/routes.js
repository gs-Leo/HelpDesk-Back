import { Router } from "express";
import { RegisterCard } from "./Controle/registerCard.js";
import { RegisterUser } from "./Controle/registerUser.js";

const Routes = Router();

rotas.post("/RegisterUsers", 
    new RegisterUser().execute
);
rotas.post("/RegisterCards", 
    new RegisterCard().execute
);

export {Routes};
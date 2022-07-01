import { Router } from "express";
import { RegisterCard } from "./controller/registerCard.js";
import { RegisterUser } from "./controller/registerUser.js";

const Routes = Router();

Routes.post("/RegisterUsers", 
    new RegisterUser().execute
);
Routes.post("/RegisterCards", 
    new RegisterCard().execute
);

export {Routes};
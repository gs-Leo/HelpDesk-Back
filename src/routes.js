import { Router } from "express";
import { ConsultaCards } from "./controller/IndexCards.js";
import { RegisterCard } from "./controller/registerCard.js";
import { RegisterUser } from "./controller/registerUser.js";
import { SearchCardsUser } from "./controller/SearchCardsUser.js";

const Routes = Router();

Routes.post("/RegisterUsers", 
    new RegisterUser().execute
);
Routes.post("/RegisterCards", 
    new RegisterCard().execute
);

Routes.get("/GetCards", 
    new ConsultaCards().execute
);
Routes.get("/GetCardsUser", 
    new SearchCardsUser().execute
);

export {Routes};
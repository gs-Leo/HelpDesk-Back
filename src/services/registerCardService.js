import {randomUUID} from "crypto";
import { conn } from "../dataBase/Conection.js";

class InsertCard{
    
    async insert(card) {
        card.id = randomUUID()
        card.status = true;
        const resultCard = await conn("Cards").insert(card);
        
        return resultCard;        
    }
}

export {InsertCard};
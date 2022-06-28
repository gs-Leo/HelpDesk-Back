import {randomUUID} from "crypto";
import { conn } from "../dataBase/Conection.js";

class InsertUser{
    
    async insert(user) {
        user.id = randomUUID()
        user.status = true;
        const resultUser = await conn("Users").insert(user);
        
        return resultUser;        
    }
}

export {InsertUser};
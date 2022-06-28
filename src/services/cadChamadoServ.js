import {randomUUID} from "crypto";
import { conn } from "../dataBase/Conection.js";

class InsertChamado{
    
    async insert(chamado) {
        chamado.id = randomUUID()
        chamado.status = true;
        const resultChamado = await conn("Chamados").insert(chamado);
        
        return resultChamado;        
    }
}

export {InsertChamado};
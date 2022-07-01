import { conn } from "../dataBase/conection.js";

class IndexCards {
    async index(card) {
        const resultCard = await conn("Cards").select();
        return resultCard;
    }
};

export { IndexCards };
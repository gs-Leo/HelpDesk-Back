import { randomUUID } from "crypto";
import { conn } from "../dataBase/conection.js";

class InsertUser {

    async insert(user) {
        user.id = randomUUID()
        user.status = true;
        user.eAdm = user.eAdm ?? false
        const resultUser = await conn("Users").insert(user);

        return resultUser;

    }
}

export { InsertUser };
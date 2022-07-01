import express from "express";
import { InsertUser } from "../services/registerUserService.js"

class RegisterUser {

    async execute(request, response) {

        const {
            nome,
            email,
            login,
            senha,
            departamento,
            turno,
            eAdm
        } = request.body;

        if (!nome) {
            return response.status(400).json({ erro: "Erro! Insira um nome" })
        }
        if (!email) {
            return response.status(400).json({ erro: "Erro! Insira um email" })
        }
        if (!login) {
            return response.status(400).json({ erro: "Erro! Insira um login" })
        }
        if (!senha) {
            return response.status(400).json({ erro: "Erro! Insira uma senha" })
        }
        if (!departamento) {
            return response.status(400).json({ erro: "Erro! Insira um departamento" })
        }
        if (!turno) {
            return response.status(400).json({ erro: "Erro! Insira um turno de trabalho" })
        }


        try {
            const newUser = await new InsertUser().insert({
                nome,
                email,
                login,
                senha,
                departamento,
                turno,
                eAdm
            });
            return response.status(201).json(newUser);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }

}
export { RegisterUser };
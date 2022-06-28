import express from "express";
import { InsertChamado } from "../services/cadChamadoServ.js"

class CadChamado {

    async execute(request, response) {

        const {
            solicitante,
            categoria,
            descricao
        } = request.body;

        if (!solicitante) {
            return response.status(400).json({ erro: "Erro no solicitante" })
        }
        if (!categoria) {
            return response.status(400).json({ erro: "Erro no categoria" })
        }
        if (!descricao) {
            return response.status(400).json({ erro: "Erro no descricao" })
        }


        const cadChamado = await new InsertChamado().insert({

        solicitante,
        categoria,
        descricao

        });
        return response.status(201).json(cadChamado);
    }

}
export { CadChamado };
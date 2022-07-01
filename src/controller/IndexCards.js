import express from "express";
import {IndexCards} from "../services/IndexCardsService.js";

class ConsultaCards {

    async execute(request, response) {
        try {
            const selectCard = await new IndexCards().index();
            return response.status(200).json(selectCard);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
};

export { ConsultaCards };



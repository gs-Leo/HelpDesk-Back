import express from "express";
import { SelectCardsUser } from "../services/SearchCardsUserService.js";


class SearchCardsUser {

    async execute(request, response) {
        try {
            const {user} = request.query;

            const selectCard = await new SelectCardsUser().index(user);            
            
            selectCard.length <1 ? response.status(200).json({error: "Mensagem"}) :
            response.status(200).json(selectCard);
            
            return;

        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
};

export { SearchCardsUser };



import express from "express";
import { SelectCardsUser } from "../services/SearchCardsUserService.js";


class SearchCardsUser {

    async execute(request, response) {
        try {
            const {user} = request.query;

            const selectCard = await new SelectCardsUser().index(user);
            return response.status(200).json(selectCard);
        } catch (error) {
            return response.status(400).json(error.message);
        }
    }
};

export { SearchCardsUser };



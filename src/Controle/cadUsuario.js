import express from "express";
import {InsertUser} from "../services/cadUsuarioServ.js"

class CadUsuario {

async execute (request, response){
    
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
        return response.status(400).json({erro:"Erro no nome"})
    }
    if (!email) {
        return response.status(400).json({erro:"Erro no email"})
    }
    if (!login) {
        return response.status(400).json({erro:"Erro no login"})
    }
    if (!senha) {
        return response.status(400).json({erro:"Erro no senha"})
    }
    if (!departamento) {
        return response.status(400).json({erro:"Erro no departamento"})
    }
    if (!turno) {
        return response.status(400).json({erro:"Erro no turno"})
    }
    if (!eAdm) {
        return response.status(400).json({erro:"Erro no eAdm"})
    }

    const cadUser = await new InsertUser().insert({
        nome,
        email,
        login,
        senha,
        departamento,
        turno,
        eAdm        
    });
    return response.status(201).json(cadUser);
} 

}
export {CadUsuario};
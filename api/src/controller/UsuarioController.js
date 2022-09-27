import { Router } from "express";
import LoginUsuario from "../repository/repositoryUsuario.js";


const server = Router();

server.post('/login/usuario', async (req,resp) =>{
    try {
        const {email, senha} = req.body;
        const resposta = await LoginUsuario(email,senha);
        if(!resposta)
            throw new Error('E-mail ou senha inválido')

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

export default server;
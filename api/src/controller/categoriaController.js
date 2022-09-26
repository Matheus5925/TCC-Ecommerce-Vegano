
import { Router } from "express";

const server = Router();

import { BuscarCategoria, BuscarParteCorpo, } from "../repository/categoriaRepository.js";

server.get('/categoria', async (req, resp) =>{
    try {
        const resposta = await BuscarCategoria();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


server.get('/parteCorpo',async (req, resp) =>{
    try {
        const resposta = await BuscarParteCorpo();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default server;
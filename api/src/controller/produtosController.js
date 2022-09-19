import { Router } from "express";
import {BuscarCategoria, BuscarParteCorpo} from '../repository/produtoRepository.js';

const server = Router();

server.get('/categoria', async (req, resp) =>{
    try {
        const resposta = await BuscaCategoria();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/parteCorpo', async (req, resp) =>{
    try {
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

export default server;
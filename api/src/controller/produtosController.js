import { Router } from "express";
import {BuscarCategoria, BuscarParteCorpo, CadastroProduto} from '../repository/produtoRepository.js';
import multer from 'multer';

const server = Router();
const upload = multer({dest: ''});

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

server.get('/parteCorpo', async (req, resp) =>{
    try {
        const resposta = await BuscarParteCorpo();
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/produto', async (req, resp) =>{
    try {
        const infoProdutos = req.body;
         
        if(!infoProdutos.nome)
        throw new Error("Nome não informado");

        if(!infoProdutos.descricao)
            throw new Error("A descrição do produto não foi informada");
            
        if(!infoProdutos.valor)
            throw new Error("Valor do produto não informado");
            
        if(!infoProdutos.fabricante)
            throw new Error("Fabricante do produto precisa ser informado");

        if(!infoProdutos.validade)
            throw new Error("Data de validade do produto não informada");
            
        if(!infoProdutos.volume)
            throw new Error("Volume do produto não informado");
        
        if(!infoProdutos.linha)
            throw new Error("Linha do produto não informada");

        const resposta = await CadastroProduto(infoProdutos);
        resp.send(resposta);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
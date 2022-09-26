import { Router } from "express";
import {AlterarImagem, CadastroProduto} from '../repository/produtoRepository.js';
import {BuscarCategoriaId, BuscarParteCorpoId} from '../repository/categoriaRepository.js'
import multer from 'multer';

const server = Router();
const upload = multer({dest: 'storage/capaProduto'});

server.post('/produto', async (req, resp) =>{
    try {
        const infoProdutos = req.body;
        
        if(!infoProdutos.idCategoria)
            throw new Error("Adicione uma categoria para continuar");

        if(!infoProdutos.idParteCorpo)
            throw new Error("Nome não informado")
         
        if(!infoProdutos.nome)
            throw new Error("Nome não informado");

        if(!infoProdutos.descricao)
            throw new Error("A descrição do produto não foi informada");
            
        if(!infoProdutos.valor)
            throw new Error("Valor do produto não informado");
        if(infoProdutos.valor <= 0)
            throw new Error("Valor abaixo de 0 informe um valor");
            
        if(!infoProdutos.fabricante)
            throw new Error("Fabricante do produto precisa ser informado");

        if(!infoProdutos.validade)
            throw new Error("Data de validade do produto não informada");
            
        if(!infoProdutos.volume)
            throw new Error("Volume do produto não informado");
        
        if(!infoProdutos.linha)
            throw new Error("Linha do produto não informada");

        await CadastroProduto(infoProdutos);
        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/produto/:id/imagem',upload.single('produtoCapa'), async (req, resp) =>{
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await AlterarImagem(imagem, id);
        if(resposta !== 1)
            throw new Error('A imagem não pode ser salva')

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    };
});

export default server;
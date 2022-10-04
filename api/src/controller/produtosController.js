import { Router } from "express";

import { AlterarImagem, AlterarProduto, BuscarEstoque, CadastroProduto, BuscaEstoqueNome, DeletarProduto, BuscarId } from '../repository/produtoRepository.js';
import multer from 'multer';

const server = Router();
const upload = multer({ dest: 'storage/capaProduto' });

server.post('/produto', async (req, resp) => {
    try {
        const infoProdutos = req.body;

        if (!infoProdutos.idCategoria)
            throw new Error("Adicione uma categoria para continuar");

        if (!infoProdutos.idParteCorpo)
            throw new Error("Nome não informado")

        if (!infoProdutos.nome)
            throw new Error("Nome não informado");

        if (!infoProdutos.descricao)
            throw new Error("A descrição do produto não foi informada");

        if (!infoProdutos.valor)
            throw new Error("Valor do produto não informado");

        if (infoProdutos.valor <= 0)
            throw new Error("Valor abaixo de 0 informe um valor positivo");

        if (!infoProdutos.fabricante)
            throw new Error("Fabricante do produto precisa ser informado");

        if (!infoProdutos.validade)
            throw new Error("Data de validade do produto não informada");

        if (!infoProdutos.volume)
            throw new Error("Volume do produto não informado");

        if (!infoProdutos.linha)
            throw new Error("Linha do produto não informada");

        const r = await CadastroProduto(infoProdutos);
        resp.send(r);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.put('/produto/:id/imagem', upload.single('produtoCapa'), async (req, resp) => {
    try {
        const { id } = req.params;
        const imagem = req.file.path;

        const resposta = await AlterarImagem(imagem, id);
        if (resposta !== 1)
            throw new Error('A imagem não pode ser salva')

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        });
    };
});

server.get('/estoque', async (req, resp) => {
    try {
        const resposta = await BuscarEstoque();

        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});


server.put('/produtos/:id', async (req, resp) => {
    try {
        const { id } = req.params;
        const infoProdutos = req.body;


        if (!infoProdutos.idCategoria)
            throw new Error("Adicione uma categoria para continuar");

        if (!infoProdutos.idParteCorpo)
            throw new Error("Nome não informado")

        if (!infoProdutos.nome)
            throw new Error("Nome não informado");

        if (!infoProdutos.descricao)
            throw new Error("A descrição do produto não foi informada");

        if (!infoProdutos.valor)
            throw new Error("Valor do produto não informado");

        if (infoProdutos.valor <= 0)
            throw new Error("Valor abaixo de 0 informe um valor positivo");

        if (!infoProdutos.fabricante)
            throw new Error("Fabricante do produto precisa ser informado");

        if (!infoProdutos.validade)
            throw new Error("Data de validade do produto não informada");

        if (!infoProdutos.volume)
            throw new Error("Volume do produto não informado");

        if (!infoProdutos.linha)
            throw new Error("Linha do produto não informada");

        const resposta = await AlterarProduto(id, infoProdutos);

        if (resposta != 1) {
            throw new Error('Produto não pode ser alterado!');
        }
        else {
            resp.status(204).send();
        }

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/busca/estoque/', async (req,resp) =>{
    try {
        const { nome } = req.query;

        const r = await BuscaEstoqueNome(nome);
        resp.send(r);
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.delete('/delete/produto/:id', async (req,resp) =>{
    try {
        const { id } = req.params;
        const resposta = await DeletarProduto(id);

        resp.status(204).send();

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/busca/produto/:id', async (req, resp) =>{
    try {
            const id = req.params.id
            const resposta = await BuscarId(id)

            resp.send(resposta)
         
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
import { Router } from "express";

import LoginUsuario, { BuscarCartaoUsuario, BuscaUsuarioId, CadastrarCartao, CadastroEnderecoUsuario, ComentarUmDepoimento, ListarDepoimentos, listarEndereco } from "../repository/repositoryUsuario.js";

import { CadastroUsuario } from "../repository/repositoryUsuario.js";


const server = Router();

server.post('/login/usuario', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginUsuario(email, senha);
        if (!resposta)
            throw new Error('E-mail ou senha inválido')
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/usuario', async (req, resp) => {
    try {
        const infoClient = req.body;
        if (!infoClient.nome)
            throw new Error('Seu Nome não foi informado!');
        if (!infoClient.email)
            throw new Error('Seu E-mail não foi informado!');
        if (!infoClient.cpf)
            throw new Error('Seu CPF não foi informado!');
        if (!infoClient.nascimento)
            throw new Error('Sua data de nascimento não foi informada!');
        if (!infoClient.telefone)
            throw new Error('Seu número de telefone não foi informado!');
        if (!infoClient.senha)
            throw new Error('Senha para seu acesso não informada!');

        const resposta = await CadastroUsuario(infoClient);
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/endereco/usuario/:idUsuario', async (req,resp) =>{
    try {
        const idUsuario = req.params.idUsuario;
        const infoEndereco = req.body;

        if(!idUsuario)
            throw new Error('Nenhum usuario detectado impossível cadastrar o endereço');
        
        if(!infoEndereco.cep)
            throw new Error('Cep não informado!');
        
        if(!infoEndereco.endereco)
            throw new Error('Endereço não informado!');

        if(!infoEndereco.ptReferencia)
            throw new Error('Informe um ponto de referência para acharmos seu endereço com mais facilidade!');
            
        if(!infoEndereco.bairro)
            throw new Error('Bairro não informado!');
            
        if(!infoEndereco.estado)
            throw new Error('Estado não informado!');
            
        if(!infoEndereco.cidade)
            throw new Error('Cidade não informada!');
            
        if(!infoEndereco.nrCasa)
            throw new Error('Número da residência não informado!');
            
        if(infoEndereco.nrCasa < 0)
            throw new Error('Informe um número valido para sua residência!');

        const resposta = await CadastroEnderecoUsuario(idUsuario, infoEndereco);
        resp.send(resposta);

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

});

server.get('/endereco/usuario/:idUsuario' , async(req, resp) => {
    try {
        const {idUsuario} = req.params;
        const r = await listarEndereco(idUsuario);

        resp.send(r);
    } 
    catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }

})

server.get('/usuario/:id', async (req, resp) =>{
    try {
        const { id } = req.params;
        const r = await BuscaUsuarioId(id);

        resp.send(r);
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.get('/depoimentos', async (req,resp)=>{
    try{
        const r = await ListarDepoimentos();
        
        resp.send(r);
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/usuario/depoimento/', async (req, resp) =>{
    try{
        const dados = req.body;

        if(!dados.comentario)
            throw new Error('Comentário não informado');

        if(!dados.avaliacao)
            throw new Error('Avaliacao não informado');

        const r = await ComentarUmDepoimento(dados);

        resp.send(r);
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

server.post('/cadastroCartao', async (req, resp)=>{
    try {
        const dados = req.body;
        
        if(!dados.bandeira)
            throw new Error('Informe uma bandeira para seu cartão');
        if(!dados.numeroCartao)
            throw new Error('Informe o número de identificação de cartão');
        if(dados.numeroCartao.lenght > 16)
            throw new Error('Número de identificação do cartão inválido');
        if(dados.numeroCartao.lenght < 13)
            throw new Error('Número de identificação do cartão inválido');
        if(!dados.vencimentoCartao)
            throw new Error('Informe a data de vencimento do seu cartão');
        if(dados.vencimentoCartao.lenght > 5)
            throw new Error('Número de vencimento inválido');
        if(!dados.titularCartao)
            throw new Error('Informe uma bandeira para seu cartão');
        if(!dados.codSecure)
            throw new Error('Informe uma bandeira para seu cartão');
        
        const resposta = await CadastrarCartao(dados);

        resp.send(resposta);
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    } 
});


server.get('/BuscarCartaoUsuario/:idUsuario', async (req, resp)=>{
    try{
        const {idUsuario} = req.params;

        const r = await BuscarCartaoUsuario(idUsuario);
        resp.send(r);
        
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    } 
})


export default server;


import { Router } from "express";
import LoginUsuario from "../repository/repositoryUsuario.js";
import { CadastroUsuario } from "../repository/repositoryUsuario.js";


const server = Router();

server.post('/login/usuario', async (req,resp) =>{
    try {
        const {email, senha} = req.body;
        const resposta = await LoginUsuario(email,senha);
        if(!resposta)
            throw new Error('E-mail ou senha inválido')
        resp.send(resposta);
    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
})

server.post('/usuario', async (req,resp)=>{
    try {
        const infoClient = req.body;
        if(!infoClient.nome)
            throw new Error('Seu Nome não foi informado!');
        if(!infoClient.email)
            throw new Error('Seu E-mail não foi informado!');
        if(!infoClient.cpf)
            throw new Error('Seu CPF não foi informado!');
        if(!infoClient.nascimento)
            throw new Error('Sua data de nascimento não foi informada!');
        if(!infoClient.telefone)
            throw new Error('Seu número de telefone não foi informado!');
        if(!infoClient.senha)
            throw new Error('Senha para seu acesso não informada!');
            
        const resposta = await CadastroUsuario(infoClient);
        resp.send(resposta)
        
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
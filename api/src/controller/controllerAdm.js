import { Router } from 'express';
import { LoginAdm }  from '../repository/repositoryAdm.js'

const server = Router();

server.post('/login/admin', async (req, resp) => {
    try {
        const  {email, senha} = req.body;
        const resposta = await LoginAdm(email, senha);
        if(!resposta)
            throw new Error("E-mail ou senha inválidos");
        resp.send(resposta)

    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
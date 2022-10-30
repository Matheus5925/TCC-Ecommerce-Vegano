import { Router } from 'express';
import { AdicionarOfertas, ExcluirDepoimentos, LoginAdm } from '../repository/repositoryAdm.js'

const server = Router();

server.post('/login/admin', async (req, resp) => {
    try {
        const { email, senha } = req.body;
        const resposta = await LoginAdm(email, senha);
        if (!resposta)
            throw new Error("E-mail ou senha inválidos");
        resp.send(resposta)

    } catch (err) {
        resp.status(401).send({
            erro: err.message
        })
    }
});

server.delete('/excluir/depoimento/id', async (req, resp)=>{
    try {
        const {id} = req.query;
        const resposta = await ExcluirDepoimentos(id);

        resp.status(204).send();
    } catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
});

server.post('/adicionar/oferta', async (req, resp) =>{
    try{
        const dados = req.body;

        if(!dados.NovoValor)
            throw new Error('Novo valor não informado');

        const r = await AdicionarOfertas(dados);

        resp.send(r);
    }catch (err) {
        resp.status(400).send({
            erro: err.message
        })
    }
})

export default server;
import axios from 'axios';
import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL
})

export const LoginUsuario = async (email, senha) => {
    const r = await api.post('/login/usuario', { email, senha });
    return r.data;
}

export const CadastroUsuario = async (nome, email, cpf, nascimento, telefone, senha) => {
    const r = await api.post('/usuario', { nome, email, cpf, nascimento, telefone, senha });
    return r.data
}

export const CadastroEnderecoUsuario = async (idUsuario, cep, endereco, ptReferencia, bairro, estado, cidade, nrCasa) =>{
    const r = await api.post(`/endereco/usuario/${idUsuario}`, {cep, endereco, ptReferencia, bairro, estado, cidade, nrCasa });

    return r.data;
}

export const BuscaUsuarioId = async id =>{
    const r = await api.get(`/usuario/${id}`);

    return r.data;
<<<<<<< HEAD
}

export const PegarDepoimento = async _ =>{
=======
};

export const ListarDepoimentos = async ()=>{
>>>>>>> b36f6eedcef771282236645eb3a112a6f0c1c7bb
    const r = await api.get('/depoimentos');

    return r.data;
}
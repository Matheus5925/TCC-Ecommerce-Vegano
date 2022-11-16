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

};

export const ListarDepoimentos = async ()=>{
    const r = await api.get('/depoimentos');

    return r.data;
};

export const ListarEnderecos = async id =>{
    const r = await api.get(`/endereco/usuario/${id}`);

    return r.data;
};

export const ComentarUmDepoimento = async (idUsuario, avaliacao, comentario) =>{
    const r = await api.post('/usuario/depoimento/', {idUsuario, avaliacao, comentario});

    return r.data;
}

export const EndCadastroCartao = async (idUsuario, bandeira,  numeroCartao, vencimentoCartao, titularCartao, codSecure) =>{
    const r = await api.post('/cadastroCartao', {idUsuario, bandeira, numeroCartao, vencimentoCartao, titularCartao, codSecure});

    return r.data;
}

export const PegarCartoesUsuario = async (idUsuario) =>{
    const r = await api.get(`/BuscarCartaoUsuario/${idUsuario}`);

    return r.data;
}
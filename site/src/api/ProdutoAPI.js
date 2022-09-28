import axios from 'axios';
import {API_URL} from './config.js'

const api = axios.create({
    baseURL: API_URL
});


export const BuscaCategoria = async _ =>{
    const r = await api.get('/categoria');

    return r.data;
}

export const BuscarParteCorpo = async _ =>{
    const r = await api.get('/parteCorpo');

    return r.data
}

export const CadastrarProduto = async (idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume,quantidade, linha) =>{
    const r = await api.post('/produto',{ idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume,quantidade, linha});
    return r.data
}
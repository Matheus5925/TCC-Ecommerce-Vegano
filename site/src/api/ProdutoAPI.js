import axios from 'axios';
import { API_URL } from './config.js'

const api = axios.create({
    baseURL: API_URL
});


export const BuscaCategoria = async _ => {
    const r = await api.get('/categoria');

    return r.data;
}

export const BuscarParteCorpo = async _ => {
    const r = await api.get('/parteCorpo');

    return r.data
}

export const CadastrarProduto = async (idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume, quantidade, linha) => {
    const r = await api.post('/produto', { idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume, quantidade, linha });
    return r.data
}


export const EnviarImagem = async (id, imagem) => {
    const formData = new FormData();
    formData.append('produtoCapa', imagem);

    const r = await api.put(`/produto/${id}/imagem`, formData, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })

    return r.status;
}

export const buscarImagem = (imagem) => {
    return `${api.getUri()}/${imagem}`
    // http://localhost:5000/storage/capasFilmes/7506e3c244b59684e73fddb4d7cbcf80
}

export const ListarEstoque = async () => {
    const r = await api.get('/estoque');

    return r.data;
};

export const ListarEstoqueNome = async (nome) =>{
    const r = await api.get(`/busca/estoque/?nome=${nome}`);

    return r.data;
};

export const MudarQuantidadeEstoque = async (quantidade, id)=>{
    const r = await api.put(`/alterar/quantidade/${id}`, {quantidade});
    return r.data;
}
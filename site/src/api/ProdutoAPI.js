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

export const DeletarProduto = async (id) =>{
    const r = await api.delete(`/delete/produto/${id}`);

    return r.status;
}

export const AlterarProduto = async (idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume, quantidade, linha, id) =>{
    const r = await api.put(`/produtos/${id}`, {idCategoria, idParteCorpo, nome, descricao, valor, fabricante, validade, volume, quantidade, linha})

    return r.data;
};

export const BuscarId = async (id) =>{
    const r = await api.get(`/busca/produto/${id}`);

    return r.data;
}

export const MostrarProdutos = async  () =>{
    const r = await api.get('/produtos/usuario');

    return r.data;
};


export const FiltrarPorCategoria = async (nome) =>{
    const r = await api.get(`/filtro/produto/categoria/?nome=${nome}`);

    return r.data;
};
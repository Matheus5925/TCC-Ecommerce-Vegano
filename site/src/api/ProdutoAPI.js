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
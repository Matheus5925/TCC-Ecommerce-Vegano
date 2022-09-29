import axios from 'axios';
import { API_URL } from './config';

const api = axios.create({
    baseURL: API_URL
})

export const LoginUsuario = async (email,senha) =>{
    const r = await api.post('/login/usuario', {email,senha});

    return r.data;
}

import CabecalhoLateral from '../../../components/cabecalho-lateral'
import iconeUsuario from '../../../assets/images/icone-usuario.png'

import './index.scss'
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { BuscaUsuarioId } from '../../../api/UsuarioAPI';

export default function InfoUsuario() {
    const [usuario, setUsuario] = useState({id: 0, nome:'', email:'', cpf:'', nascimento:'', telefone:''});

    const ListarInfoUser = async  id =>{
        const r = await BuscaUsuarioId(id);
        setUsuario({id:r.id, nome:r.nome, email:r.email, cpf:r.cpf, nascimento: r.nascimento, cpf:r.cpf, telefone: r.telefone});
    }

    useEffect(()=>{
        if(storage('usuario-logado')){
            let idUsuario = storage('usuario-logado').id;
            ListarInfoUser(idUsuario);
        }
    },[])

    return (
        <section className='box-1'>
            < CabecalhoLateral />
            <div className='ajuste'>
                <div className='caixa-principal'>
                    <img src={iconeUsuario} />
                    <div className='titulo-nome'>
                        <h1>{usuario.nome ? usuario.nome : 'Seja bem-vindo!'}</h1>
                    </div>
                    <hr/>
                    <div className='caixa-3'>
                        <div className='caixa-2' >
                            <label> E-mail: </label>
                            <div type="texto" className='inpu' >
                                <p>{usuario.email}</p>
                            </div>
                            <label> Telefone: </label>
                            <div className='inpu'>
                                <p>{usuario.telefone}</p>
                            </div>
                        </div>
                        <div className='caixa-2'>
                            <label> CPF: </label>
                            <div className='inpu'>
                                <p>{usuario.cpf}</p>
                            </div>
                            <label> Data de nacimento: </label>
                            <div type="texto" className='inpu'>
                                <p>{usuario.nascimento.substring(0,10)}</p>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </section>
    )
}
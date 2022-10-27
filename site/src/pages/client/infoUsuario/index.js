
import CabecalhoLateral from '../../../components/cabecalho-lateral'


import './index.scss'
import { useEffect, useState } from 'react';
import storage from 'local-storage';
import { BuscaUsuarioId } from '../../../api/UsuarioAPI';
import InicioInfoUser from '../../../components/infoUser/Inicio';

export default function InfoUsuario() {
    const [usuario, setUsuario] = useState({id: 0, nome:'', email:'', cpf:'', nascimento:'', telefone:''});
    const [home, setHome] = useState(false);

    const ListarInfoUser = async  id =>{
        const r = await BuscaUsuarioId(id);
        setUsuario({id:r.id, nome:r.nome, email:r.email, cpf:r.cpf, nascimento: r.nascimento, cpf:r.cpf, telefone: r.telefone});
    }

    useEffect(()=>{
        if(storage('usuario-logado')){
            let idUsuario = storage('usuario-logado').id;
            ListarInfoUser(idUsuario);
        }
    },[]);

    return (
        <section className='box-1'>
            <CabecalhoLateral/>
            <div>
                {home === true && <InicioInfoUser
                    key={usuario.id}
                    nome={usuario.nome}
                    email={usuario.email}
                    telefone={usuario.telefone}
                    cpf={usuario.cpf}
                    nascimento={usuario.nascimento.substring(0, 10)}
                />}
           </div>
        </section>
    )
}
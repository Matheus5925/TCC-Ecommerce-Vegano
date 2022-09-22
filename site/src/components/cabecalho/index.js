import './index.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

export default function Cabecalho() {
    const navigate = useNavigate();
    const [funcionario, setFuncionario] = useState('');
  
    const SairClick = _ =>{
        storage.remove('admin-logado');
        navigate('/')
    }

    useEffect(()=>{
      if(!storage('admin-logado'))
         navigate('/');
      else{
          const admLogado = storage('admin-logado');
          setFuncionario(admLogado.nome);
      }
    }, [])

    return(
      <main className='Faixa-Principal'>
        <img src={LogoTipo} alt='logo' /> 
        <div onClick={SairClick}  className='Dados-Usuario'>
         <h1 className='Nome-Usuario'>{funcionario.split(' ')[0]} </h1> 
         <img src={IconeUsuario} alt= 'Icone'/>

        </div>
      </main>
    )
}
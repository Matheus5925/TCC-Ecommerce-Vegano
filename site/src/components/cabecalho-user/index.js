import './index.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

export default function CabecalhoUser() {
    const navigate = useNavigate();
    const [nome, setNome] = useState('');
    const [email, setEmail]= useState('');
    const [aparecer, setAparecer] = useState(false);

    const SairClick = _ =>{
        storage.remove('admin-logado');
        navigate('/lading')
    }

    useEffect(()=>{
      if(!storage('usuario-logado')){
          navigate('/logincliente');
      }
      else{
          const userLogado= storage('usuario-logado');
          setNome(userLogadoLogado.nome);
          setEmail(userLogado.email)
      }
    }, []);

    const aparecerTela = ()=>{
      if(aparecer === false)
        setAparecer(true)
      else if(aparecer === true)
        setAparecer(false);
    }



    return(
      <main className='Faixa-Principal'>
        <header className='cabecalho'>
          <img src={LogoTipo} alt='logo'/>
          <div onClick={aparecerTela}  className='Dados-Usuario'>
              <h1 className='Nome-Usuario'>{nome.split(' ')[0]} </h1>
              <img src={IconeUsuario} alt= 'Icone'/>
          </div>
        </header>
       {aparecer === true && <div className='tela-click-cabecalho'>
                  <section className='usuario'>
                      <div className='user-name-email'>
                          <img className='icon-user' src={IconeUsuario} alt="" />
                          <p>{nome}</p>
                      </div>
                      <p className='email'>{email}</p>
                  </section>
                  <section className='sair'>
                      <button onClick={SairClick} className='botao'> Sair </button>
                  </section>
          </div>}
      </main>
    )
}
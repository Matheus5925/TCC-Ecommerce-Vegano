import './index.scss'
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

import Carrinho from '../../assets/images/carrinho.png';
import iconeUsuario from '../../assets/images/icone-usuario.png'

export default function CabecalhoUser() {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aparecer, setAparecer] = useState(false);

  const SairClick = _ => {
    storage.remove('usuario-logado');
    navigate('/landing')
  }

  useEffect(() => {
    if (storage('usuario-logado')) {

      const userLogado = storage('usuario-logado');
      setNome(userLogado.nome);
      setEmail(userLogado.email)
    }
  }, []);

  const VerificarEntrar = () =>{
    if (!storage('usuario-logado')) {
      navigate('/logincliente');
    }
    else {
      const userLogado = storage('usuario-logado');
      setNome(userLogado.nome);
      setEmail(userLogado.email)
      navigate('/landing');
    }
  }

  const VerificarCarrinho = () =>{
    if (!storage('usuario-logado')) {
      navigate('/logincliente');
    }
    else {
      const userLogado = storage('usuario-logado');
      setNome(userLogado.nome);
      setEmail(userLogado.email)
      navigate('/carrinho');
    }
  }

  const aparecerTela = () => {
    if(!storage('usuario-logado'))
      setEmail('Nenhum usuario logado');

    if (aparecer === false)
      setAparecer(true)
    else if (aparecer === true)
      setAparecer(false);
  }



  return (
    <main className='Faixa-Principal'>
        <div className='Principal'>
          <div className='logo'>
            <img src={LogoTipo} alt='logo'/>
          </div>
          <div className='Direcionamentos'>
            <a href='/landing'>Home</a>
            <a>Quem somos</a>
            <a href='/telaprodutos'>Produto</a> 
            <a>Ofertas</a>
            <a onClick={VerificarEntrar}>Entrar</a>
          </div>
          <div className='IconeUsuario'>
              <div className='carrinho'>
                <img src={Carrinho} alt='icone'/>
              </div>    
              <div className='usuario'> 
              <p>{nome.split(' ')[0]}</p>
                <img onClick={aparecerTela} src={iconeUsuario} alt='icone'/>
              </div>
          </div>
        </div>
        <div className='Segunda-Faixa'>
          <div className='Paginas'>
            <p>Cabelo</p>
            <p>Rosto</p>
            <p>Corpo</p>
            <p>Perfumes</p>
            <p> Corpo e Banho</p>
          </div>
        </div>
      {aparecer === true && <div className='tela-click-cabecalho'>
        <section className='Usuario'>
          <div className='user-name-email'>
            <img className='icon-user' src={IconeUsuario} alt="" />
            <p>{nome}</p>
          </div>
          <p className='email'>{email}</p>
        </section>
        <section className='sair'>
          <button onClick={SairClick} className='Botao-sair'> Sair </button>
        </section>
      </div>}
    </main>
  )
}
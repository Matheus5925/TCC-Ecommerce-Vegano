import './index.scss'
import { useNavigate, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import storage from 'local-storage';

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

import Carrinho from '../../assets/images/carrinho.png';
import iconeUsuario from '../../assets/images/icone-usuario.png';
import {toast, ToastContainer} from 'react-toastify'

export default function CabecalhoUser(props) {
  const navigate = useNavigate();
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [aparecer, setAparecer] = useState(false);
  const [aparecer2, setAparecer2] = useState(false);


  const SairClickUser = _ => {
    storage.remove('usuario-logado');
    navigate('/');
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
      setEmail(userLogado.email);
      toast('❌ Você já está logado')
    }
  }

  const VerificarInfoUser = () =>{
    if (!storage('usuario-logado')) {
      navigate('/logincliente');
    }
    else {
      const userLogado = storage('usuario-logado');
      setNome(userLogado.nome);
      setEmail(userLogado.email)
      navigate('/infousuario');
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

  const aparecerTelaUsuario = () => {
    if(!storage('usuario-logado'))
      setEmail('Nenhum usuario logado');

    if (aparecer === false)
      setAparecer(true)
    else if (aparecer === true)
      setAparecer(false);
    if(aparecer2 === true)
      setAparecer2(false);
  }

   const aparecerFiltroProduto = () =>{
     if (aparecer2 === false)
       setAparecer2(true);
     setTimeout(()=>{
       if (aparecer2 === true)
         setAparecer2(false);
     }, 4000);

     if(aparecer === true)
       setAparecer(false);
   }



  return (
    <main className='Faixa-Principal'>
      <ToastContainer/>
        <div className='Principal'>
          <div className='logo'>
            <img src={LogoTipo} alt='logo'/>
          </div>
          <div className='Direcionamentos'>
            <Link to='/'>Home</Link>
            <Link>Quem somos</Link>
            <Link to='/telaprodutos' onMouseEnter={aparecerFiltroProduto} onMouseOut={aparecerFiltroProduto}>Produto</Link>
            <Link>Ofertas</Link>
            <a onClick={VerificarEntrar}>Entrar</a>
          </div>
          <div className='IconeUsuario'>
              <div className='usuario'> 
              <img className='carrinho' onClick={VerificarCarrinho} src={Carrinho} alt='icone'/>
              <p>{nome.split(' ')[0]}</p>
                <img onClick={aparecerTelaUsuario} src={iconeUsuario} alt='icone'/>
              </div>
          </div>
        </div>
        {/* {aparecer2 === true && <div className='Segunda-Faixa'>
          <div className='Paginas'>    
            {produtosFiltro.map(item => <p key={item.id} className='filtro-produto'> {item.categoria}</p>)}
          </div>
        </div>} */}
      {aparecer === true && <div className='tela-click-cabecalho'>
        <section className='Usuario'>
          <div onClick={VerificarInfoUser} className='user-name-email'>
            <img className='icon-user' src={IconeUsuario} alt="" />
            <p>{nome}</p>
          </div>
          <p className='email'>{email}</p>
        </section>
        <section className='sair'>
          <button onClick={SairClickUser} className='Botao-sair'> Sair </button>
        </section>
      </div>}
    </main>
  )
}
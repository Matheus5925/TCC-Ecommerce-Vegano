import {useState, useEffect} from 'react';
import { LogiAdm } from '../../api/admAPI.js';
import storage  from 'local-storage';
import { useNavigate } from 'react-router-dom';
import './index.scss';


export default function AdminLogin() {
   const [email, setEmail ] = useState('');
   const [senha, setSenha] = useState('');
   const [erro, setErro] = useState('');

   const navigate = useNavigate();

   useEffect(()=>{
        if(storage('usuario-logado'))
            navigate('/');
   }, [])

   const Login = async () =>{
      try {
         const r = await LogiAdm(email, senha);
         storage('usuario-logado', r);
         navigate('/cadastrarprodutos');

      } catch (err) {
         if(err.response.status === 401)
            setErro(err.response.data.erro)
      }
   }


    return(
        <main className='Page-admLogin'>

            <div className='ImgFundo'>
               <div className='Fundo-Login'>
                     <h1 className='Titulo-Principal'>
                        Faça Seu Login
                     </h1>
                     <p className='erro'>{erro}</p>
                     <div className='Formulario'>
                     <label className='Titulo-Caixa-Texto'>E-MAIL:</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className='Caixa-Texto' type= "email" />  
                     </div>
                     <div className='Formulario'>
                     <label className='Titulo-Caixa-Texto'> SENHA:</label>
                        <input value={senha} onChange={e => setSenha(e.target.value)} className='Caixa-Texto' type= "password" />
                        <hr className='Linha' />
                  </div>
                  <div className='Botoes'>
                     <button onClick={Login}  className='Botao-2'> ENTRAR</button>
                  </div> 

                     <a className='Cadastro' href="" >Novo Usuario? Cadastre-se </a>
               </div>
            </div>
        

        </main>
    )
}
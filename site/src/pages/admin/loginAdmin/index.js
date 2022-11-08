import { useState, useEffect, useRef } from 'react';
import { LogiAdm } from '../../../api/admAPI.js';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';
import './index.scss';


export default function AdminLogin() {
   const [email, setEmail] = useState('');
   const [senha, setSenha] = useState('');
   const [erro, setErro] = useState('');
   const [carregamento, setCarregamento] = useState(false);

   const navigate = useNavigate();
   const ref = useRef();

   useEffect(() => {
      storage.remove('admin-logado')
   }, []);

   useEffect(() => {
      if (storage('admin-logado'))
         navigate('/');
   }, []);

   const Login = async _ => {
      ref.current.continuousStart();
      setCarregamento(true);

      try {
         const r = await LogiAdm(email, senha);
         storage('admin-logado', r);
         setTimeout(() => {
            navigate('/paginaselecao');
         }, 3000)

      } catch (err) {
         ref.current.complete();
         setCarregamento(false);

         if (err.response.status === 401)
            setErro(err.response.data.erro)
      }
   }


   return (
      <main className='Page-admLogin'>
         <LoadingBar color='#f11946' ref={ref} />

         <div className='ImgFundo'>
            <div className='Fundo-Login'>
               <h1 className='Titulo-Principal'>
                  Faça Seu Login
               </h1>
               <p className='erro'>{erro}</p>
               <div className='Formulario'>
                  <label className='Titulo-Caixa-Texto'>E-MAIL:</label>
                  <input value={email} onChange={e => setEmail(e.target.value)} className='Caixa-Texto' type="email" />
               </div>
               <div className='Formulario'>
                  <label className='Titulo-Caixa-Texto'> SENHA:</label>
                  <input value={senha} onChange={e => setSenha(e.target.value)} className='Caixa-Texto' type="password" />

               </div>
               <div className='Botoes'>
                  <button onClick={Login} className='Botao-2'> ENTRAR</button>
               </div>

            </div>
         </div>


      </main>
   )
}

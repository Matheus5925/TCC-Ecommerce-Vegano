import { CadastroUsuario } from '../../../api/UsuarioAPI.js';
import { useState, useEffect, useRef } from 'react'
import './index.scss'
import { toast, ToastContainer } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar';

export default function TelaCadastroCliente() {
   const [nome, setNome] = useState('');
   const [email, setEmail] = useState('');
   const [cpf, setCPF] = useState('');
   const [nascimento, setNascimento] = useState('');
   const [telefone, setTelefone] = useState('');
   const [senha, setSenha] = useState('');
   const [carregamento, setCarregamento] = useState(false);

   const navigate = useNavigate();
   const ref = useRef();

   const SalvarUsuario = async () =>{
      ref.current.continuousStart();
      setCarregamento(true);

      try {
         const r = await CadastroUsuario(nome, email, cpfFormatado, nascimento, telefone, senha);
         toast.success('Usuario Cadastrado com sucesso');

         setTimeout(()=>{
            navigate('/logincliente')
         }, 4000);
      }
         catch (err) {
         ref.current.complete();
         setCarregamento(false);

         if(err.response.status === 400)
            toast(err.response.data.erro);
      }
   }

   
   const cpfFormatado = cpf.replace(/(\d{3})?(\d{3})?(\d{3})?(\d{2})/, function(matchDaRegex, grupo1, grupo2, grupo3, grupo4){
      return `${grupo1}.${grupo2}.${grupo3}-${grupo4}`;
    })

    return(
      <main>
         <LoadingBar color='#f11946' ref={ref}/>
         <ToastContainer/>
         <div className='Principal'>
            <div className='Fundo-Cadastro-Img'>
               <div className='Fundo-Cadastro'>
                     
                        <div className='Titulo-Cadastro'>
                           <h1> Crie Sua Conta</h1>
                        </div>
                     <div className='ajuste-inputs'>
                        <div className='Primeiro-Container'>
                              <div>
                                 <label className='Titulo-da-Caixa1'>Nome</label>
                                 <input value={nome} onChange={e => setNome(e.target.value)} className='Caixa1' type = "text"/>
                              </div>
                              <div>
                                 <label  className='Titulo-da-Caixa1'>Email</label>
                                 <input value={email} onChange={e => setEmail(e.target.value)} className='Caixa1' type="text" />
                              </div>
                        </div>
                        <div className='conteiner-2'>
                           <div>
                              <label className='Titulo-da-Caixa1'>Telefone</label>
                              <input value={telefone} onChange={e => setTelefone(e.target.value)}  className='Caixa2' type="text" />
                           </div>
                           <div>
                              <label className='Titulo-da-Caixa1'>Data de nacimento</label>
                              <input value={nascimento} onChange={e => setNascimento(e.target.value)} className='Caixa2 data' type="date" />
                           </div>
                        </div>
                        <div className='conteiner-2'>
                              <div>
                                 <label className='Titulo-da-Caixa1'>CPF</label>
                                 <input value={cpf} onChange={e => setCPF(e.target.value)} maxLength='14'  className='Caixa2' type="text" pattern='[0,9]{11}'/>
                              </div>
                              <div>
                                 <label className='Titulo-da-Caixa1'>Senha</label>
                                 <input value={senha} onChange={e => setSenha(e.target.value)} className='Caixa2' type="password" />
                              </div>
                        </div>
                     </div>
                        <button onClick={SalvarUsuario} className='botao'> Cadastrar </button>
               </div>         
            </div>       
         </div>
      </main>
    )
}
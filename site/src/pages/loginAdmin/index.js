
import './index.scss';


export default function AdminLogin() {
    
    return(
        <main className='Page-admLogin'>

            <div className='ImgFundo'>
               <div className='Fundo-Login'>
                     <h1 className='Titulo-Principal'>
                        Faça Seu Login
                     </h1>
                     <div className='Formulario'>
                     <label className='Titulo-Caixa-Texto'> E-MAIL:</label>
                        <input className='Caixa-Texto' type= "email" />  
                     </div>
                     <div className='Formulario'>
                     <label className='Titulo-Caixa-Texto'> SENHA:</label>
                        <input className='Caixa-Texto' type= "text" />
                        <hr className='Linha' />
                  </div>
                  <div className='Botoes'>
                     <button className='Botao-1'> CRIAR CONTA</button> <button className='Botao-2'> ENTRAR</button>
                  </div> 

                     <a className='Cadastro' href="aaa" >Novo Usuario? Cadastre-se </a>
               </div>
            </div>
        

        </main>
    )
}
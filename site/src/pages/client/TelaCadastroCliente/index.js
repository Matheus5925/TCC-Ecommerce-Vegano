

import './index.scss'

export default function TelaCadastro() {
    return(
       <main>
        <div className='Principal'>
            <div className='Fundo-Cadastro-Img'>
             <div className='Fundo-Cadastro'>
             
             <section className='Container-Principal'>
                <div className='Titulo-Cadastro'>
                   <h1> Crie Sua Conta</h1>
                   
                   <div className='Primeiro-Container'>
                   <label className='Titulo-da-Caixa1'>Nome</label>
                   </div>
                    <input className='Caixa1' type = "text"/>
                </div>  

                  <div className='conteiner-1'>
                     <div className='conteiner-2'>
                        <label className='Titulo-da-Caixa1'>Sobrenome</label>
                        <input className='Caixa2' type="text" />
                        <label className='Titulo-da-Caixa1'>Telefone</label>
                        <input className='Caixa2' type="text" />
                     </div>
                     <div className='container-3'>
                        <label className='Titulo-da-Caixa1'>CPF</label>
                        <input className='Caixa2' type="text" />
                        <label className='Titulo-da-Caixa1'>Data de nacimento</label>
                        <input className='Caixa2' type="text" />
                     </div>
                  </div> 

                  <div className='box'>
                        <label className='Titulo-da-Caixa1'>Email</label>
                        <input className='Caixa1' type="text" />
                        <label className='Titulo-da-Caixa1'>Senha</label>
                        <input className='Caixa1' type="text" />
                  </div> 

                  <button className='botao'> Cadastrar </button>  

             </section>
            </div>              
         </div>       
         </div>
               
              


        
       </main>
    )
}


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
                   <label className='Titulo-da-Caixa1'>Nome</label></div>
                    <input className='Caixa1' type = "text"/>

                    <div className='Segundo-Container'>
                    <label className='Titulo-da-Caixa2'>Sobre Nome</label> </div>
                        <input className='Caixa2' type = "text"/>

                        <div className='Terceiro-Container'>
                            <label className='Titulo-da-Caixa3'>Cpf</label></div>
                            <input className='Caixa3' type = "text" />
                            

                            <div className='Quarto-Container'>
                          <label className='Titulo-da-Caixa4'>Telefone</label>  </div>
                          <input className='Caixa4' type = "text"/>

                          <div className='Quinto-Container'>
                            <label className='Titulo-da-Caixa5'>Data de Nasc.</label> 
                            <input className='Caixa5' type = "text" />
                            </div> 
     
                       <div className='Sexto-Container'>
                          <label className='Titulo-da-Caixa6'>E-mail</label>  </div>
                          <input className='Caixa6' type = "text"/>

                          <div className='Setimo-Container'>
                            <label className='Titulo-da-Caixa7'>senha</label>
                            <input className='Caixa7' type = "text" />
                            </div> 
                            
      
                            


                            </div>
                            </section>
                            </div>
                        
                    
                           
                   </div>
                 
                
                     </div>
               
              


        
       </main>
    )
}
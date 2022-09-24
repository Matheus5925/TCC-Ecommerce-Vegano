
import './index.scss'

export default function LoginCliente() {
    return(
        <main className='Principal'>
            <div className='imgFundo'>
                <div className='Fundo-Cliente'> 
                <div className='Titulo-Principal'>
                    <h2>Faça Seu Login</h2>
                     <div className='Formulario1'>
                         <label className='Titulo-Caixa-Texto1'>E-MAIL</label>
                         <input className='Caixa-Texto1' type = "text"/>
                        <div className='Formulario2'>
                        <label className='Titulo-Caixa-Texto2'>SENHA</label>
                        <input className='Caixa-Texto2' text = "password"/>
                        <div className='Botao'>
                        <button className='Botao1'>ENTRAR</button>
                        </div>
                        </div>
                        </div>

                     </div>




                </div>

            </div>
            
            
        </main>
    )
}
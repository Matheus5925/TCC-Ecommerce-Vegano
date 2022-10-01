import './index.js'
import './index.scss'



import LogoTipo from '../../assets/images/logo-2.jpeg'

export default function Rodape(){


    return(
        <footer className='rodape'>
            <div className='box1'>
                                <img src={LogoTipo} alt='logo' />
                                <div className='box-2'>
                                  <h1>Menu</h1>
                                  <p>Inicio</p>
                                  <p>Quem somos</p>
                                  <p>Produtos</p>
                                </div>
                                <div className='box-2'>
                                  <h1>Entre em contato</h1>
                                  <p>123456788</p>
                                  <p>cosmetiques@gmail.com</p>
                                  <p>cosmetiques_fc</p>
                                </div>
                             </div>
                             <div> <hr></hr> </div>

                             <div className='text'> formas de pagamentos </div>
        </footer>
    )
}

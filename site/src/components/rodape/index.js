import './index.js'
import './index.scss'



import LogoTipo from '../../assets/images/logo-2.jpeg'
import Whats from '../../assets/images/whats.jpeg'
import Insta from '../../assets/images/insta.jpeg'
import Email from '../../assets/images/email.jpeg'

export default function Rodape(){


    return(
        <footer className='rodape'>
            <div className='box1'>
                                <img src={LogoTipo} alt='logo'/>
                                <div className='box-2'>
                                  <h1>Menu</h1>
                                  <p>Inicio</p>
                                  <p>Quem somos</p>
                                  <p>Produtos</p>
                                </div>
                                <div className='box-2'>
                                  <h1>Entre em contato</h1>
                                  <p> <img src={Whats} alt='logo-whats'/> 123456788</p>
                                  <p> <img src={Email} alt='logo-email'/> cosmetiques@gmail.com</p>
                                  <p> <img src={Insta} alt='logo-insta'/> cosmetiques_fc</p>
                                </div>
                             </div>
                             <div className='linha'> <hr></hr> </div>

                             <div className='text'> formas de pagamentos </div>
        </footer>
    )
}

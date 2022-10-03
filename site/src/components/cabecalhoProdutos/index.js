
import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import Carrinho from '../../assets/images/carrinho.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'

export default function CabecalhoProdutos() {
    return(
        < div className='Cabecalho-Produtos'>
            <div className='Principal'>
            <div className='logo'>
            <img src={LogoTipo} alt='logo'/>
            </div>
            <div className='Direcionamentos'>
                <p>Home</p>
                <p>Quem somos</p>
                <p>Produto</p> 
                <p>Ofertas</p>
                <p>Entrar</p>
            <div className='IconeUsuario'>
                <div className='carrinho'>
                    <img src={Carrinho} alt='icone'/>
                </div>    
                <div className='usuario'> 
                    <img src={iconeUsuario} alt='icone'/>
                </div>
            </div>
            </div>
            </div>
             </div>
    )
}
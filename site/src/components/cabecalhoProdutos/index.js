
import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

export default function CabecalhoProdutos() {
    return(
        <div className='Cabecalho-Produtos'>
            <div className='Principal'>
            <img src={LogoTipo} alt='logo'/>
            <div className='Direcionamentos'>
            <a>Home  Quem Somos Produto Ofertas Entrar</a>
            <div className='IconeUsuario'>
            </div>
            </div>
            </div>
             </div>
    )
}
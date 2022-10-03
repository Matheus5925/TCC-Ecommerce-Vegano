
import Carrinho from '../../assets/images/carrinho.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'

import './index.scss'

function Cabecalho1() {
    return (
        <header className='texts'>
            
                <p> Home </p>
                <p> Quem somos </p>
                <p> Produtos </p>
                <p> Ofertas</p>
                <p> Entrar</p>

                <div className='icones'>
                    <img src={Carrinho} alt='icone' />
                    <img src={iconeUsuario} alt='icone' />
                </div>
            
           
        </header>
    )
}

export default Cabecalho1;
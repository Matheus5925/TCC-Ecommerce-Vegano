
import Carrinho from '../../assets/images/carrinho.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'

import './index.scss'

function Cabecalho1() {
    return (
        <header className='texts'>
            <h1> Home </h1>
            <h1> Quem somos </h1>
            <h1> Produtos </h1>
            <h1> Ofertas</h1>
            <div className='icones'>
            <img src={Carrinho} alt='icone'/>
            <img src={iconeUsuario} alt='icone'/>
            </div>
        </header>
    )
}

export default Cabecalho1;
import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'
import IconeSacola from '../../assets/images/sacola.png'
import IconeCartoes from '../../assets/images/cartoes.png'
import IconeCasa from '../../assets/images/casa.png'

export default function cabecalhoLateral() {

    return (
        <section className='principal'>
            <div>
                <img src={LogoTipo} alt='logo' />
            </div>
            <div className='text'>
                <di>
                    <p><img src={iconeUsuario} alt='usuario' /> Ìnicio</p>
                </di>
                <div>
                    <p><img src={IconeCasa} alt='casa' /> Endereços</p>
                </div>
                <div>
                    <p><img src={IconeCartoes} alt='cartoes' /> Cartões</p>
                </div>
                <div>
                    <p><img src={IconeSacola} alt='sacola' /> Historicos de compras</p>
                </div>
            </div>
        </section>
    )
}
import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'
import IconeSacola from '../../assets/images/sacola.png'
import IconeCartoes from '../../assets/images/cartoes.png'
import IconeCasa from '../../assets/images/casa.png'

export default function cabecalhoLateral() {

    return(
        <section>
            <div className='principal'>
                <div>
                <img src={LogoTipo} alt='logo' /> 
                </div>
                    <div className='texto'>
                        <div className='tex'>
                        <img src={iconeUsuario} alt='usuario'/> 
                        <p>Ìnicio</p>
                        </div>
                        <div className='tex'>
                        <img src={IconeCasa} alt='casa'/> 
                        <p>Endereços</p>
                        </div>
                        <div className='tex'>
                        <img src={IconeCartoes} alt='cartoes'/>
                        <p> Cartões</p>
                        </div>
                        <dia className='tex'>
                        <img src={IconeSacola} alt='sacola'/>
                        <p>Historicos de compras</p>
                        </dia>
                </div>
            </div>
        </section>
    )
}
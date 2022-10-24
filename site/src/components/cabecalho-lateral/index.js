import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'
import IconeSacola from '../../assets/images/sacola.png'
import IconeCartoes from '../../assets/images/cartoes.png'
import IconeCasa from '../../assets/images/casa.png';

import PortaSair from '../../assets/images/porta-saida.png'

import {Link} from 'react-router-dom'

export default function cabecalhoLateral() {

    return(
        <section>
            <div className='principal'>
                <div>
                <img src={LogoTipo} alt='logo' /> 
                </div>
                    <div className='texto'>
                        <Link className='tex'>
                            <img src={iconeUsuario} alt='usuario'/> 
                            <p>Inicio</p>
                        </Link>
                        <Link className='tex'>
                            <img src={IconeCasa} alt='casa'/> 
                            <p>Endereços</p>
                        </Link>
                        <Link className='tex'>
                            <img src={IconeCartoes} alt='cartoes'/>
                            <p> Cartões</p>
                        </Link>
                        <Link className='tex'>
                            <img src={IconeSacola} alt='sacola'/>
                            <p>Historicos de compras</p>
                        </Link>
                        <div>
                            <Link to='/' className='tex Saida'>
                                <img className='porta-saida' src={PortaSair} alt="" />
                                <p>Home</p>
                            </Link>
                        </div>
                </div>
            </div>
        </section>
    )
}
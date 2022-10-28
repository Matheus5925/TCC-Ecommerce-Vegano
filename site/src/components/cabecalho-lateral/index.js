import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import iconeUsuario from '../../assets/images/icone-usuario.png'
import IconeSacola from '../../assets/images/sacola.png'
import IconeCartoes from '../../assets/images/cartoes.png'
import IconeCasa from '../../assets/images/casa.png';

import PortaSair from '../../assets/images/porta-saida.png'

import {Link} from 'react-router-dom'

export default function cabecalhoLateral(props) {

    class AcionarInformacoes{

        AcionarIncio(){
            props.home(true);
            props.cartao(false);
            props.endereco(false);
        };

        AcionarCartao(){
            props.home(false);
            props.cartao(true);
            props.endereco(false);
        };

        AcionarEndereco(){
            props.endereco(true);
            props.home(false);
            props.cartao(false);
        };

        AcionarHistoricoCompras(){
            props.historicoCompras(true)
            props.endereco(false);
            props.home(false);
            props.cartao(false);
        }
    }

    return(
        <section>
            <div className='principal'>
                <Link to='/' className='logo-saida'>
                    <img src={LogoTipo} alt='logo' />
                </Link>
                    <div className='texto'>
                        <Link onClick={AcionarInformacoes.prototype.AcionarIncio} className='tex'>
                            <img src={iconeUsuario} alt='usuario'/> 
                            <p>Inicio</p>
                        </Link>
                        <Link onClick={AcionarInformacoes.prototype.AcionarEndereco} className='tex'>
                            <img src={IconeCasa} alt='casa'/> 
                            <p>Endereços</p>
                        </Link>
                        <Link onClick={AcionarInformacoes.prototype.AcionarCartao} className='tex'>
                            <img src={IconeCartoes} alt='cartoes'/>
                            <p> Cartões</p>
                        </Link>
                        <Link onClick={AcionarInformacoes.prototype.AcionarHistoricoCompras} className='tex'>
                            <img src={IconeSacola} alt='sacola'/>
                            <p>Historicos de compras</p>
                        </Link>
                </div>
            </div>
        </section>
    )
}
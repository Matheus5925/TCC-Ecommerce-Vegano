import './index.scss'

import LogoTipo from '../../assets/images/logo.png'
import IconeUsuario from '../../assets/images/icone-usuario.png'

export default function Cabecalho() {
    return(
      <main className='Faixa-Principal'>
        <img src={LogoTipo} alt='logo' /> 
        <div className='Dados-Usuario'>
         <h1 className='Nome-Usuario'>Julia </h1> 
         <img src={IconeUsuario} alt= 'Icone'/>

        </div>
      </main>
    )
}
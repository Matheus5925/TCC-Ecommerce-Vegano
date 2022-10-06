
import './index.scss'

import CabecalhoUser from '../../../components/cabecalho-user' 
import SegundoCabecalhoPrincipal from '../../../components/cabecalho-principal/cabecalho-principal2'
import Imagem41 from '../../../assets/images/produtos-imagem.png'

export default function TelaProdutos() {
    return(
        <div className='Produtos'>
          <CabecalhoUser/>
          <SegundoCabecalhoPrincipal/>
          <img src={Imagem41} alt='imagem-produtos'/>
          
        </div>
    )
}
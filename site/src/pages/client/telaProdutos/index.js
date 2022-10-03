
import './index.scss'

import CabecalhoProdutos from '../../../components/cabecalhoProdutos'
import SegundoCabecalhoPrincipal from '../../../components/cabecalho-principal/cabecalho-principal2'

export default function TelaProdutos() {
    return(
        <div className='Produtos'>
          <CabecalhoProdutos/>
          <SegundoCabecalhoPrincipal/>
          
        </div>
    )
}

import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function CadastrarProdutos() {
return(
    <main>
       <Cabecalho/>
       <div className='Titulo-Principal'>
        <p>ADICIONAR UM PRODUTO</p>
        <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
        <input className='Caixa-Texto' type = "text"/>
       </div>
       <label className='Titulo-Caixa-Texto-Linha'>Linha do Produto </label>
       <input className='Caixa-Texto-Linha' type= "text"/>
    </main>
)
    
}

import './index.scss'

import Cabecalho from '../../../components/cabecalho'

export default function Estoque() {
    return(
         <div className='Principal-Estoque'>
             <Cabecalho/>
         <div className='Estoques'>
            <div className='Primeiro-Estoque'>
            <input className='Estoque1' ></input>
            </div>
            </div>
                <div className='Primeiro-Botao'>
                <button>Voltar</button>
                </div>
      </div> 
    )
}


import './index.scss'

import Cabecalho from '../../../components/cabecalho'
import ComprasHistorico from '../../../components/ComprasHistorico'


export default function HistoricoCompras() {
    return(
        <div className='Page-Historico-Compras'>
            <Cabecalho/>
            <div className='Titulo'>
            <h1>Histórico de Compras</h1>
             <ComprasHistorico/>
            </div>
            



        </div>
    )
}
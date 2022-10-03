

import './index.scss'

import CabecalhoAdmin from '../../../components/cabecalho-admin'
import ComprasHistorico from '../../../components/ComprasHistorico'


export default function HistoricoCompras() {
    return (
        <div className='Page-Historico-Compras'>
            <CabecalhoAdmin />
            <div className='Titulo'>
                <h1>Histórico de Compras</h1>
                <ComprasHistorico />
            </div>
        </div>
    )
}
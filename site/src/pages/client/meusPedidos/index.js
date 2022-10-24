import './index.scss'

import CabecalhoUser from '../../../components/cabecalho-user'
import Caixa_Pedido from '../../../components/meuspedidos'

export default function Pedidos () {

    return (
        <main container-Pedido> 
            <CabecalhoUser/>
            <div className='titulo'> MEUS PEDIDOS </div>
            <Caixa_Pedido/>
            <section className='bots'>
                <button className='bot1' onClick={Pedidos}> Deixe seu Depoimento </button>
                <button className='bot1' onClick={Pedidos}> Voltar</button>
            </section>

        </main>
    )

    
}
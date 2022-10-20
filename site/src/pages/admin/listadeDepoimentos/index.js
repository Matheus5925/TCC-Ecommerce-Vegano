
import './index.scss'
import CabecalhoAdmin from '../../../components/cabecalho-admin'

export default function ListadeDepoimentos() {
    return(
        <div className='Principal-Depoimentos'>
            <CabecalhoAdmin/>
            <h1>Depoimentos dos Clientes</h1>
               <div className='Principal-Faixa'>
                <div className='Faixa-Depoimentos'>
              
                <div className='bl-1'>
                    <div className='bl-2'>
                    <div className='bl-3'>
                            <p className='Nome-Luz'>HELLOISE LUZ</p>  <p>Positivo
Produtos incríveis, alta performance e melhor de tudo: rendem horroooores!</p>
                        </div>
                        <div className='bl-4'>
                            <button className='bl-5'>Publicar</button>
                        </div>

                    </div>

                </div>
                </div>
               </div>
        </div>
    )
}
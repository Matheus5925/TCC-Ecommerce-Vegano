
import CabecalhoAdmin from "../../../components/cabecalho-admin"

export default function Pedidospendentes() { 
return(
 
    <div className='Page-Pendente'>
    <CabecalhoAdmin/>
    <div className='Container-Faixa'>
    <div className='Faixa-Pesquisa'>
        <div className='Nome-de-Cliente'>
        <input className='Campo1' type="text" />
        <div className='Status'>
        <input className='Campo2' type="text" />
        </div>
        </div>
        </div>
        </div>
    </div> 
)

}



import './index.scss'
import CabecalhoAdmin from "../../../components/cabecalho-admin"

export default function Pedidospendentes() {
    return (

        <div className='Page-Pendente'>
            <CabecalhoAdmin />
                <div className='Faixa'>
                    <div className='Principal-Faixa'>
                        <div className='Input'>
                        <input className='Bloco1'type="text" placeholder ="Nome de Cliente"></input>
                        <input className='Bloco2'type="text" placeholder ="Status"></input>
                     </div>

                     <div className='bl1'>
                    <div className='bl2'>
                    <div className='bl3'>
                            <p>HELLOISE LUZ</p>
                        </div>
                        <div className='bl4'>
                            <h4 className='bl5'>Valor da Compra: R$ 170,00</h4>
                        </div>

                    </div>
                </div>

                <div className='bl6'>
                    <div className='bl7'>
                        <div className='bl8'>
                            <p>Maria Clara Benta</p>
                        </div>
                        <div className=' bl9'>
                            <h4 className='bl10'>Valor da Compra: R$ 200</h4>
                        </div>
                    </div>
                </div>

                <div className='Voltar'>
                    <button className='Botao-Voltar'> Voltar</button>
                </div>


                    </div>


            </div>
        </div>
    )

}

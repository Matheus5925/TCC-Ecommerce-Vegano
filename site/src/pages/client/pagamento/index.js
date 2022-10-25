import './index.scss'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardParametos from '../../../components/card-pagamento';

import Pix from '../../../assets/images/pix.png'
import Cards from '../../../assets/images/cards.png'
import Boleto from '../../../assets/images/boleto.png'

export default function Pagamento(){


    return(
        <section>
            <CabecalhoUser/>

            <div>
                <p>Escolha metodo de pagamento</p>
                <hr/>
                <div className='rei'>
                    <div className='caixaTotal'>
                        <CardParametos/>
                        <h1> Total de compra: </h1>
                        <p className='ppp'></p>
                    </div>
                    <div className='pag'>
                        <label className='aaa'>
                            <img src={Pix} alt=''/>
                            <input type="Radio" />
                        </label>
                        <label className='aaa'>
                            <img src={Cards} alt=''/>
                            <input type="Radio" />
                        </label>
                        <label className='aaa'>
                            <img src={Boleto} alt=''/>
                            <input type="Radio" />
                        </label>

                    </div>
                </div>
            </div>
        </section>
    )
}
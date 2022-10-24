import './index.scss'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardParametos from '../../../components/card-pagamento';

export default function Pagamento(){


    return(
        <section>
            <CabecalhoUser/>

            <div>
                <p>Escolha metodo de pagamento</p>
                <hr/>
                <div>
                    <div>
                        <CardParametos/>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}
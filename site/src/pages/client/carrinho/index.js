import './index.scss';
import CabecalhoUser from '../../../components/cabecalho-user';
import CardCarrinho from '../../../components/card-carrinho';
import Carrinho from '../../../assets/images/carrinho.png';

export default function Crrinho(){

    return(
        <main className='Carrinho-principal'>
            <CabecalhoUser/>
            <div className='box-principal'>
                <div className='titulo'>                    
                <h1>MEU CARRINHO</h1>
                <hr/>
                </div>
                <div className='cabecalho'>
                    <div className='ajustes'>
                    <p>Produto</p>
                    </div>
                    <div className='ajuste-box2'>
                    <p>Preço</p>
                    <p>Quantidade</p>
                    <p>Total</p>
                    </div>
                </div>
                <CardCarrinho/>
                <div className='quadrado-1'>
                    <div>
                        <div className='posicionamentos'>
                            <p>Entrega:</p>
                            <p>Frete Grátis</p>
                        </div>
                        <div className='posicionamento'>
                            <p>Total:</p>
                            <p>R$ 139,90</p>
                        </div>
                    </div>
                </div>
                <div className='botao-1'> 
                <button className='ajustar-botao'>Escolher mais produtos</button>
                </div>
                <div className='botao-2'>
                    <button className='ajustar-botao2'> <img src={Carrinho}/> <h3> Fechar pedido </h3> </button>
                </div>

            </div>
        </main>
    )
}
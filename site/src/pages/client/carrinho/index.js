import './index.scss';
import CabecalhoUser from '../../../components/cabecalho-user';
import CardCarrinho from '../../../components/card-carrinho';
import Carrinho from '../../../assets/images/carrinho.png';
import { useEffect, useState } from 'react';
import {BuscarId} from '../../../api/ProdutoAPI.js'
import Storage from 'local-storage';
import { Link } from 'react-router-dom';

export default function Crrinho(){
    const [itensCarrinho, setItensCarrinho] = useState([]);

    const  CalcularValorTotal = _ =>{
        var total = 0;
        
        for(let item of itensCarrinho){
            total = total +  item.id.valor * item.qtd;
        }
        return total;
    };

    function RemoverItem(id){
        let carrinho = Storage('carrinho');
        carrinho = carrinho.filter(item => item.id != id);

        Storage('carrinho', carrinho);
        CarregarCarrinho();
    }

    const CarregarCarrinho = async _ =>{
        const carrinho = Storage('carrinho');

      

        if(carrinho){

            let temp = [];

            for(let produto of carrinho){
                let r = await BuscarId(produto.id);

                temp.push({
                    id: r,
                    qtd: produto.qtd
                })
            }
            setItensCarrinho(temp);
        }

        if(!carrinho.id.nome)
        RemoverItem();
    };

    useEffect(()=>{
        CarregarCarrinho();
    }, [])

    return(
        <main className='Carrinho-principal'>
            <CabecalhoUser/>
            <div className='box-principal'>
               <div className='title'>
                    <h1>Meu Carrinho</h1>
                    <hr/>
               </div>
               <div id='teste'>

               </div>
               <div className='indentificador'>
                    <div className='indentificador-pt1'>
                        <p>Produto</p>
                    </div>
                    <div className='indentificador-pt2'>
                        <p>Preço</p>
                        <p>Quantidade</p>
                        <p>Total</p>
                    </div>
               </div>
                <div className='Cards-produtos'>
                    {itensCarrinho.map(item =><CardCarrinho
                        CarregarCarrinho={CarregarCarrinho}
                        removerItem={RemoverItem}
                        key={item.id}
                        item={item}
                    />)}
                </div>
                <div className='quadrado-1'>
                    <div>
                        <div className='posicionamentos'>
                            <p>Entrega:</p>
                            <p>Frete Grátis</p>
                        </div>
                        <div className='posicionamento'>
                            <p>Total:</p>
                            <p>R$ {CalcularValorTotal()}</p>
                        </div>
                    </div>
                </div>
                <div className='botao-1'> 
                <button className='ajustar-botao'>Escolher mais produtos</button>
                </div>
                <div className='botao-2'>
                        <Link to='/pagamento'>
                        <button className='ajustar-botao2'> 
                                <img src={Carrinho}/> 
                                <h3> Fechar pedido </h3> 
                        </button>
                        </Link>
                </div>

            </div>
        </main>
    )
}
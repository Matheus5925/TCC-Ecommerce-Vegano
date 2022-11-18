
import './index.scss'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardPix from '../../../assets/images/cards.png'
import Boleto from '../../../assets/images/boleto.png'
import Pix from '../../../assets/images/imagePix.png'
import cardPagamento from '../../../components/card-pagamento';
import { Link } from 'react-router-dom';
import CardEndereco from '../../../components/infoUser/endereco/card';
import { useState, useEffect } from 'react';
import Storage from 'local-storage';
import { ListarEnderecos } from '../../../api/UsuarioAPI';
import CardPagamento from '../../../components/card-pagamento';
import { BuscarId } from '../../../api/ProdutoAPI';

export default function TelaPagamento() {
  const [enderecos, setEnderecos] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);

    const  CalcularValorTotal = _ =>{
        var total = 0;
        
        for(let item of itensCarrinho){
            total = total +  item.id.valor * item.qtd;
        }
        return total.toFixed(2);
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

    
    async function MostrarEnderecos() {
        if(Storage('usuario-logado')){
            let idUsuario = Storage('usuario-logado').id;
            const r = await ListarEnderecos(idUsuario);
            setEnderecos(r);
        }
    }
   
    useEffect(()=>{
       MostrarEnderecos();
    },[]);

  return (
    <div className='Principal-Pagamento'>
      <CabecalhoUser />
      <div className='titulo-pg'>
        <h2>FINALIZAR PAGAMENTO </h2>
      </div>
      <hr />
      <div className='posicionamento-b'>
      <div className='Principal'>

        <div className='Container-Finalizar'>

          <div className='input2'>
            {itensCarrinho.map(item => <CardPagamento 
                        CarregarCarrinho={CarregarCarrinho}
                        removerItem={RemoverItem}
                        key={item.id}
                        item={item}/>)}
          </div>
        </div>

        <div className='total'>
          <h4>TOTAL DA COMPRA</h4>
          <div className='B'>
            <button className='valor-1'>R$ 170,00</button>

          </div>
          <button className='valor'>Concluir</button>


        </div>




      </div>
      <div className='principal-b'>

        <div className='Bloco3'>
          <div className='rolagem-endereco'>
            {enderecos.map(item => <CardEndereco item={item}/>)}
          </div>

            <button className='Endereco'>Cadastrar Endereço</button>
        </div>

          <div className='Principal2'>
            <div className='Bloco2'>
              <div className='input-1'>
                <img src={Pix} />
              </div>
              <div className='input-2'>
                <img src={CardPix} />
              </div>
              <div className='input-3'>
                <img src={Boleto} />

              </div>
              <div className='Button'>
                <Link to='/infousuario'>
                <button className='buttonB'>Ver cartões Cadastrados</button>
                </Link>
                <Link to='/cadastrarCartao'>
                <button className='buttonB'>Cadastrar um novo Cartão</button>
                </Link>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>

  )

}
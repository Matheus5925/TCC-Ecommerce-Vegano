import './index.scss'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardPix from '../../../assets/images/cards.png'
import Boleto from '../../../assets/images/boleto.png'
import Pix from '../../../assets/images/imagePix.png'
import CardEndereco from '../../../components/infoUser/endereco/card';
import Storage from 'local-storage';
import CardPagamento from '../../../components/card-pagamento';
import Rodape from '../../../components/rodape';

import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { ListarEnderecos } from '../../../api/UsuarioAPI';
import { BuscarId } from '../../../api/ProdutoAPI';
import { Navigate } from 'react-router-dom'
import {confirmAlert} from 'react-confirm-alert';
import {toast, ToastContainer} from 'react-toastify'

export default function TelaPagamento() {

  const [enderecos, setEnderecos] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);

  const CalcularValorTotal = _ => {
    var total = 0;
    console.log("timao");
    for (let item of itensCarrinho) {
      total = total + (item.id.valor * item.qtd);

    }
    return total.toFixed(2);
  };

  function RemoverItem(id) {
    let carrinho = Storage('carrinho');
    carrinho = carrinho.filter(item => item.id != id);

    Storage('carrinho', carrinho);
    CarregarCarrinho();
  }

  const CarregarCarrinho = async _ => {
    const carrinho = Storage('carrinho');


    if (carrinho) {

      let temp = [];

      for (let produto of carrinho) {
        let r = await BuscarId(produto.id);

        temp.push({
          id: r,
          qtd: produto.qtd
        })
      }
      setItensCarrinho(temp);
    }

    if (!carrinho.id.nome)
      RemoverItem();
  };


  async function MostrarEnderecos() {
    if (Storage('usuario-logado')) {
      let idUsuario = Storage('usuario-logado').id;
      const r = await ListarEnderecos(idUsuario);
      setEnderecos(r);
    }
  }


  const Finalizarcompra = async function () {
    confirmAlert({
        title: 'Finalizar compra ',
        message: `Deseja mesmo finalizar compra?`,
        buttons: [
            {
                label: 'Sim',
                onClick: async () => { 
                    toast.dark('Compra finalizada✅');
                }
            },
            {
                label: 'Não'
            }
        ]
    })
}
 

  useEffect(() => {
    MostrarEnderecos();
    CarregarCarrinho();
  }, []);

  return (
    <div>
    <div className='Principal-Pagamento'>
      <CabecalhoUser />
      <div className='titulo-pg'>
        <h2>FINALIZAR PAGAMENTO </h2>
      </div>
      <div className='linha'> <hr></hr> </div>
      <div className='posicionamento-b'>
        <div className='principal-pagamaento'>

          <div className='Container-Finalizar'>
            <div className='rolagem-pg'>
              {itensCarrinho.map(item =>
                <CardPagamento
                  CarregarCarrinho={CarregarCarrinho}
                  removerItem={RemoverItem}
                  key={item.id}
                  item={item}
                />)}
            </div>
          </div>

          <div className='total'>
            <h4>TOTAL DA COMPRA</h4>
            <div className='B'>
              <button className='valor-1'>R$ {CalcularValorTotal()}</button>

            </div>
            <button className='valor' onClick={Finalizarcompra}>Concluir</button>


          </div>

        </div>
        <div className='principal-b'>

          <div className='Bloco3'>
            <div className='rolagem-endereco'>
              {enderecos.map(item => <CardEndereco item={item}/>)}
            </div>

            <Link to='/cadastroindereco'>    
            <button className='Endereco'>Cadastrar Endereço</button>
            </Link>
          </div>

          <div className='cartoes-pagamento'>
            <div className='Bloco2'>
              <div className='input-pg'>
                <img src={Pix} className='imagem-pagamento' />
                <input type="checkbox" name="pix" className='imput-radio'></input>
              </div>
              <div className='input-pg'>
                <img src={CardPix} className='imagem-pagamento-3' />
                <input type="checkbox" name="cardPix" className='imput-radio'></input>
              </div>
              <div className='input-pg'>
                <img src={Boleto} className='imagem-pagamento' />
                <input type="checkbox" name="Boleto" className='imput-radio'></input>
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
  <Rodape/>
</div>
  )

}
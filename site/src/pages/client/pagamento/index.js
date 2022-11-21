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
import { ListarEnderecos, PegarCartoesUsuario } from '../../../api/UsuarioAPI';
import { BuscarId } from '../../../api/ProdutoAPI';
import { Navigate } from 'react-router-dom'
import {confirmAlert} from 'react-confirm-alert';
import {toast, ToastContainer} from 'react-toastify'
import CardCartao from '../../../components/infoUser/cartoes/card';

export default function TelaPagamento() {

  const [enderecos, setEnderecos] = useState([]);
  const [itensCarrinho, setItensCarrinho] = useState([]);
  const [cartoes, setCartoes] = useState([]);
  const [renderCartao, setRenderCartao] = useState(false);
  const [renderPix, setRenderPix] = useState(false);

  const CalcularValorTotal = _ => {
    var total = 0;
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

  const BuscarCartoes = async ()=>{
    if (Storage('usuario-logado')) {
      let idUsuario = Storage('usuario-logado').id;
      const r = await PegarCartoesUsuario(idUsuario);
      setCartoes(r);
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

    var letra_num = ['0','1','2','3','4','5','6','7','8','9','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
 
  
    function BuscarNumero(cont) {
        let randomNum = Math.round(Math.random() * cont);
        return randomNum;
    }

    

    function seqNumLetra() {
      let letra1 = letra_num[BuscarNumero(letra_num.length)]; 
      let letra2 = letra_num[BuscarNumero(letra_num.length)]; 
      let letra3 = letra_num[BuscarNumero(letra_num.length)]; 
      let letra4 = letra_num[BuscarNumero(letra_num.length)]; 
      let letra5 = letra_num[BuscarNumero(letra_num.length)];
      let letra6 = letra_num[BuscarNumero(letra_num.length)];
      let letra7 = letra_num[BuscarNumero(letra_num.length)];
      let letra8 = letra_num[BuscarNumero(letra_num.length)];
      let letra9 = letra_num[BuscarNumero(letra_num.length)];
      let letra10 = letra_num[BuscarNumero(letra_num.length)];
      let letra11 = letra_num[BuscarNumero(letra_num.length)];
      let letra12 = letra_num[BuscarNumero(letra_num.length)];

      let seq = letra1.concat(letra1, letra2, letra3, letra5, letra4, letra8, letra6, letra7, letra9, letra12, letra10, letra11);

      return seq;
  }
  useEffect(() => {
    MostrarEnderecos();
    CarregarCarrinho();
    BuscarCartoes();
    console.log(BuscarNumero(letra_num.length));
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
                <input value={renderPix} onChange={e => setRenderPix(e.target.checked)}  type="checkbox" name="pix" className='imput-radio'></input>
              </div>
                  {renderPix === true  && <p>{seqNumLetra()}</p>}
              <div className='input-pg'>
                <img src={CardPix} className='imagem-pagamento-3' />
                <input value={renderCartao} onChange={e => setRenderCartao(e.target.checked)} type="checkbox" name="cardPix" className='imput-radio'></input>
              </div>
              {renderCartao === true &&  <div className='cartao-cadastrados'>
                  <div>{cartoes.map(item => <CardCartao item={item}/>)}</div>
              </div>}
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
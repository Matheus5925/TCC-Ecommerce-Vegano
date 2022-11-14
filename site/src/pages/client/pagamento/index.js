
import './index.scss'
import imgProduto from '../../../assets/images/image 30.png'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardPix from '../../../assets/images/cards.png'
import Boleto from '../../../assets/images/boleto.png'
import Pix from '../../../assets/images/imagePix.png'
import { Link } from 'react-router-dom';

export default function TelaPagamento() {
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
            <img src={imgProduto} />
            <p>serum facial </p>
            <h2>R$ 150,00</h2>

          </div>

          <div>
            <div className='input2'>
              <img src={imgProduto} />
              <p>serum facial  </p>
              <h2>R$ 150,00</h2>

            </div>

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
          <div className='input3-1'>
            <p>Rua Rosa Gomes de Siqueira, Recanto Ana Maria, São Paulo - SP - CEP 04864070.</p>


            <div className='input3-2'>
              <p>Rua Hans Georg Eggert, Jardim Icaraí, São Paulo - SP - CEP 04844250</p>
              <Link to='/cadastroindereco'>
              <button className='Endereco'>Cadastrar Endereço</button>
              </Link>
            </div>
          </div>
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
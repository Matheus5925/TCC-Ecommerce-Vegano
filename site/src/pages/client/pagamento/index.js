
import './index.scss'
import CabecalhoUser from '../../../components/cabecalho-user';
import CardEndereco from '../../../components/infoUser/endereco/card';


import Pix from  '../../../assets/images/pix.png'
import Cards from '../../../assets/images/cards.png'
import Boleto from '../../../assets/images/boleto.png'

export default function TelaPagamento() {
    return(
        <div className='Principal-Pagamento'>
            <CabecalhoUser/>
            <section className='pagamento'>
               <div className='sub-pag'>
                    <h1> Finalizar Pedidos </h1>  
                    <div className='card'> 
                        
                    </div>
                    <section className='part-baixo'>
                        <h1> Total Compra:</h1>
                        <p className='bloco'></p>
                        <button className='F'> Finalizar </button>
                    </section>
               </div>

                <section className='R'>
                    <label className='CX-R'>
                        <img src={Pix}/>
                        <input type="radio" />
                    </label>

                    <label className='CX-R'>
                        <img src={Cards}/>
                        <input type="radio"/>
                    </label>

                    <label className='CX-R'>
                        <img src={Boleto}/>
                        <input type="radio"/>
                    </label>

                    <div className='cards'>
                        <button> Ver cartões cadastrados </button>
                        <button> Cadastrar um novo cartão </button>
                    </div>
                    
                </section>



            </section>

            

          
            
            
        </div>


        
     
    )
}
   

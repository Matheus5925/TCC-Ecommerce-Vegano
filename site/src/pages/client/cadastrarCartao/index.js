import './index.scss';
import CabecalhoUser from '../../../components/cabecalho-user';
import linha from '../../../assets/images/Line 38.png'

export default function cadastrarCartao () {

    return(
        <main>
            <CabecalhoUser/>
            <div className='cadastrarCartao'>
                <h2 className='titulo'> Cadastrar Cartão </h2>
                <div className='quadrado-principal'>
                    <div className='ajustes-1'>
                        <label> Nome do titular: </label>
                        <input type="text" className='caixa-text1'/>
                        <label> Numero do cartao:</label>
                        <input type="text" className='caixa-text1'/>
                    </div>
                    <div className='ajustes-2'>
                        <div className='ajuste-3'>
                            <div className='bloco-2'>
                                <label>Data de validade:</label>
                                <input type="number" className='caixa-text2'/>
                            </div>
                                <img src={linha}/>
                                <input type="number" className='caixa-text3'/>
                        </div>
                        <div className='bloco-2'>
                            <label>CVV Numero:</label>
                            <input type="number" className='caixa-text2'/>
                        </div>
                    </div>
                        <button className='botao' >Salvar</button>             
                </div>
            </div>
        </main>
    )
}
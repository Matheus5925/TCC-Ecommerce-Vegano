import './index.scss';
import CabecalhoUser from '../../../components/cabecalho-user';
import linha from '../../../assets/images/Line 38.png'
import { useState } from 'react';

export default function CadastrarCartao () {
    const [dados, setDados] = useState({nome: '',numeroCartao: '', dtValidade: '', cvv: '', bandeira: '' });

    const CadastrarCartao =  ()=>{
        setDados({nome:'Oi'})
        console.log(dados.nome)
    }

    return(
        <main>
            <CabecalhoUser/>
            <div className='cadastrarCartao'>
                <h2 className='titulo'> Cadastrar Cartão </h2>
                <div className='quadrado-principal'>
                    <div className='ajustes-1'>
                        <label> Nome do titular: </label>
                        <input type="text" className='caixa-text1' value={dados.nome} onChange={e => setDados(e.target.value)}/>
                        <label> Numero do cartao:</label>
                        <input type="text" className='caixa-text1' value={dados.numeroCartao} onChange={e => setDados( e.target.value)}/>
                    </div>
                    <div className='ajustes-2'>
                       
                            <div className='bloco-2'>
                                <label>Data de validade:</label>
                                <input value={dados.dtValidade} onChange={e => setDados(e.target.value)}  type="text" className='caixa-text2'/>
                            </div>
                        
                        <div className='bloco-2'>
                            <label>CVV Numero:</label>
                            <input type="text" value={dados.cvv} onChange={e => setDados(e.target.value)} className='caixa-text2' />
                        </div>
                        <div className='bloco-2'>
                            <select value={dados.bandeira} onChange={e => setDados(e.target.value)} className='caixa-text2'>
                                <option value="">Escolher bandeira</option>
                                <option value="">Mastercard</option>
                                <option value="">Visa</option>
                                <option value="">Cielo</option>
                                <option value="">Alelo</option>
                                <option value="">Hipercard</option>
                                <option value="">American Express</option>
                                <option value="">Elo</option>
                                <option value="">Diners Club</option>
                                <option value="">Maestro</option>
                            </select>
                        </div>
                    </div>
                        <button onClick={CadastrarCartao} className='botao' >Salvar</button>             
                </div>
            </div>
        </main>
    )
}
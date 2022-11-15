import './index.scss';
import CabecalhoUser from '../../../components/cabecalho-user';
import linha from '../../../assets/images/Line 38.png'
import { useState } from 'react';
import { EndCadastroCartao } from '../../../api/UsuarioAPI';
import storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify';

export default function CadastrarCartao () {
    const [titular, setTitular] = useState('');
    const [numeroCartao, setNumeroCartao] = useState('');
    const [vencimento, setVencimento] = useState('');
    const [cvv, setCvv] = useState('');
    const [bandeira, setBandeira] = useState('');

    
    const CartaoCadastro = async  () =>{
        try {
                
            const Usuario = storage('usuario-logado').id

            const r = await EndCadastroCartao(Usuario, bandeira, numeroCartao, vencimento, titular, cvv);
            toast.success('Cartão cadastrado com sucesso')
        } catch (err) {
            console.log(err.response.data.erro);
        }
    }

    return(
        <main>
            <ToastContainer/>
            <CabecalhoUser/>
            <div className='cadastrarCartao'>
                <h2 className='titulo'> Cadastrar Cartão </h2>
                <div className='quadrado-principal'>
                    <div className='ajustes-1'>
                        <label> Nome do titular: </label>
                        <input type="text" className='caixa-text1' value={titular} onChange={e => setTitular(e.target.value)}/>
                        <label> Numero do cartao:</label>
                        <input type="text" className='caixa-text1' value={numeroCartao} onChange={e => setNumeroCartao(e.target.value)}/>
                    </div>
                    <div className='ajustes-2'>
                       
                            <div className='bloco-2'>
                                <label>Data de validade:</label>
                                <input value={vencimento} onChange={e => setVencimento(e.target.value)}  type="text" className='caixa-text2'/>
                            </div>
                        
                        <div className='bloco-2'>
                            <label>CVV Numero:</label>
                            <input type="text" value={cvv} onChange={e => setCvv(e.target.value)} className='caixa-text2' />
                        </div>
                        <div className='bloco-2'>
                            <select value={bandeira} onChange={e => setBandeira(e.target.value)} className='caixa-text2'>
                                <option value="">Escolher bandeira</option>
                                <option value="Mastercard">Mastercard</option>
                                <option value="Visa">Visa</option>
                                <option value="Cielo">Cielo</option>
                                <option value="Alelo">Alelo</option>
                                <option value="Hipercard">Hipercard</option>
                                <option value="American Express">American Express</option>
                                <option value="Elo">Elo</option>
                                <option value="Diners Club">Diners Club</option>
                                <option value="Maestro">Maestro</option>
                            </select>
                        </div>
                    </div>
                        <button onClick={CartaoCadastro} className='botao' >Salvar</button>             
                </div>
            </div>
        </main>
    )
}
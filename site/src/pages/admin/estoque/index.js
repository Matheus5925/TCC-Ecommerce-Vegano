
import './index.scss';
import { ListarEstoque, ListarEstoqueNome } from '../../../api/ProdutoAPI.js';
import Lupa from '../../../assets/images/procurar.png';


import CabecalhoAdmin from '../../../components/cabecalho-admin';
import CardEstoque from '../../../components/card-stoque';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Estoque() {
    const [card, setCard] = useState([]);
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState([]);

    const FiltroNome = async ()=>{
        const resposta = await ListarEstoqueNome(nome);
        setCard(resposta);
    }

    const ProdutosEstoque = async () => {
        const r = await ListarEstoque();

        setCard(r);
    }

    useEffect(()=>{
        setTimeout(()=>{
            FiltroNome()
        },1000)
    },[nome]);

    useEffect(() => {
        ProdutosEstoque();
    },[]);

   

    return(
        <div className='Principal-Estoque'>
            <CabecalhoAdmin/>
            <div className='Principal-Faixa'>
                <div className='Faixa'>
                    <div className='Caixa-de-pesquisa'>
                        <div className='busca-nome'>
                            <input value={nome} onChange={e => setNome(e.target.value)} className='Pesquisa' type ="text" placeholder='Nome do produto...'/>
                            <img className='img-lupa' src={Lupa} alt="" />
                        </div> 
                        <select className='Status' type ="text" >
                            <option value="">Selecione a Marca</option>
                        </select>
                    </div>
                </div>
            </div>
            <section  className='cards-estoque'>
                {card.map(item => <CardEstoque
                        key={item.id}
                        id={item.id}
                        fabricante={item.fabricante}
                        image={item.imagem}
                        nome={item.nome}
                        value={item.preco}
                />)}
            </section>
        </div>
    )
}
// const MostrarImagem = () => {
//     if (typeof (imagem) === 'object') {
  
//         return URL.createObjectURL(imagem);
//     }
// }

import './index.scss';
import { ListarEstoque, ListarEstoqueNome } from '../../../api/ProdutoAPI.js';

import PesquisaEstoque from '../../../components/pesquisa-estoque';
import CabecalhoAdmin from '../../../components/cabecalho-admin'
import CardEstoque from '../../../components/card-stoque';
import { useEffect, useState } from 'react';

export default function Estoque() {
    const [card, setCard] = useState([]);
    const [nome, setNome] = useState('');
    const [marca, setMarca] = useState([]);

    const FiltroNome = async ()=>{
        const resposta = await ListarEstoqueNome(nome);
        setCard(resposta);
    }

    const ProdutosEstoque = async () =>{
        const r = await ListarEstoque();
        setCard(r);
        
    }

    useEffect(()=>{
        setTimeout(()=>{
            FiltroNome()
        },1000)
    },[nome])};


    const ProdutosEstoque = async () => {
        const r = await ListarEstoque()

    }

    useEffect(() => {
        ProdutosEstoque();
    },[]);

    return (
        <div className='Principal-Estoque'>
            <CabecalhoAdmin/>
            <div className='Principal-Faixa'>
            <div className='Faixa'>
                <div className='Caixa-de-pesquisa'>
                      <input value={nome} onChange={e => setNome(e.target.value)} className='Pesquisa' type ="text"/>
                      <select className='Status' type ="text" />
                    </div>
                </div>
            </div>
            {card.map(item => <CardEstoque
                key={item.id}
                fabricante={item.fabricante}
                image={item.imagem}
                nome={item.nome}
                value={item.preco}
            />)}
            <CabecalhoAdmin />
            <FaixaPrincipal />
            <ConponentsEstoque />
            <div className='Primeiro-Botao'>
                <button className='Voltar'>Voltar</button>
            </div>

        </div>
    )

import './index.scss';
import { ListarEstoque } from '../../../api/ProdutoAPI.js';

import ConponentsEstoque from '../../../components/componentEstoque';
import FaixaPrincipal from '../../../components/faixaPrincipal';
import CabecalhoAdmin from '../../../components/cabecalho-admin'
import { useEffect, useState } from 'react';

export default function Estoque() {
    const [card, setCard] = useState([]);

    const ProdutosEstoque = async () => {
        const r = await ListarEstoque()

    }

    useEffect(() => {
        ProdutosEstoque();
    })

    return (
        <div className='Principal-Estoque'>
            <CabecalhoAdmin />
            <FaixaPrincipal />
            <ConponentsEstoque />
            <div className='Primeiro-Botao'>
                <button className='Voltar'>Voltar</button>
            </div>

        </div>
    )
}

import './index.scss';
import CardStoque from '../../../components/card-stoque';
import { ListarEstoque } from '../../../api/ProdutoAPI.js';

import CabecalhoAdmin from '../../../components/cabecalho-admin'
import iconeUsuario  from '../../../assets/images/icone-usuario.png'
import { useEffect, useState } from 'react';

export default function Estoque() {
    const [card, setCard] = useState([]);

    const ProdutosEstoque = async () =>{
        const r = await ListarEstoque()
        
    }

    useEffect(() =>{
        ProdutosEstoque();
    })

    return(
        <div className='Principal-Estoque'>
            <CabecalhoAdmin/>
            {}
            {/* <div className='Estoques'>
                <div className='Primeiro-Estoque'>
                    <input className='Estoque1' ></input>
                </div>
            </div> */}
            <div className='Primeiro-Botao'>
                <button>Voltar</button>
            </div>
            
        </div> 
    )
}
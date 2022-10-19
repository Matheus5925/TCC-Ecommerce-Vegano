import './index.scss';

import CabecalhoUser from '../../../components/cabecalho-user'
import CardProdutosUsuario from '../../../components/card-usuario-produto'; 
import { useEffect, useState } from 'react';
import { MostrarProdutos } from '../../../api/ProdutoAPI';

export default function TelaProdutos() {
    const [card, setCard] = useState([]);
  
    const ListarCards = async () =>{
      const r = await MostrarProdutos();
      setCard(r);
    };
  
  
    useEffect(()=>{
      ListarCards();
    },[])

    return(
        <div className='Ofertas-cliente'>
          <CabecalhoUser/>
          <section className='imagem-usuario-produto'>

          </section>
          <h1 className='title-Ofertas'> Ofertas</h1>
          <section className='Cards-product'>
            {card.map(item => <CardProdutosUsuario item={item}/>)}
          </section>
          
        </div>
    )
}
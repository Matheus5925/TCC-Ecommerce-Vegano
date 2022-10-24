import './index.scss';

import CabecalhoUser from '../../../components/cabecalho-user'
import CardProdutosUsuario from '../../../components/card-usuario-produto'; 
import { useEffect, useState } from 'react';
import { MostrarProdutos, BuscaCategoria, FiltrarPorCategoria } from '../../../api/ProdutoAPI';
import LupaPesquisa from '../../../assets/images/search.png'


export default function TelaProdutos() {
    const [card, setCard] = useState([]);
    const [produtosFiltro, setProdutoFiltro] = useState([]);
    const [titulo, setTitulo] = useState('');


    const CategoriasAparecer = async _ =>{
      const r = await BuscaCategoria();
      setProdutoFiltro(r);
    };
    
    const FiltroCategoria = async _ =>{
      const resposta = await FiltrarPorCategoria(titulo);
      setCard(resposta);
   }

   useEffect(() =>{
    FiltroCategoria();
}, [titulo]);

    const ListarCards = async () =>{
      const r = await MostrarProdutos();
      setCard(r);
    };
  
  
    useEffect(()=>{
      ListarCards();
    },[]);

    return(
        <div className='Ofertas-cliente'>
          <CabecalhoUser/>
          <section className='imagem-usuario-oferta'></section>

          <div className='Buscas-filtro'>
              <div className='caixa-pesquisa-produtos'>
                <input type="text" className='nome-produto' placeholder='Pesquisar...'/>
                <a className='procura-botao' href="#">
                  <img className='Lupa' src={LupaPesquisa} alt="" />
                </a>
              </div>
              
              <select value={titulo} onChange={e => setTitulo(e.target.value)}>
                <option>Selecione uma categoria </option>
                {produtosFiltro.map(item => <option value={item.categoria} key={item.id}>{item.categoria}</option>)}
              </select>
          </div>
          <h1 className='title-produtos'>{!titulo || titulo === 'Selecione uma categoria' ? 'Ofertas' : `Ofertas: ${titulo}`}</h1>
          <section className='Cards-product'>
            {card.map(item =>  <CardProdutosUsuario key={item.id} item={item} />)}
          </section>


        </div>
    )
}
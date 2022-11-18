import './index.scss';

import CabecalhoUser from '../../../components/cabecalho-user'
import CardProdutosUsuario from '../../../components/card-usuario-produto';
import { useEffect, useState } from 'react';
import { MostrarProdutos, BuscaCategoria, FiltrarPorCategoria, BuscarOfertaAPI, BuscarCategoriaOfertas } from '../../../api/ProdutoAPI';
import LupaPesquisa from '../../../assets/images/search.png'
import CardOfertas from '../../../components/card-ofertas';


export default function TelaOfertas() {
  const [card, setCard] = useState([]);
  const [produtosFiltro, setProdutoFiltro] = useState([]);
  const [titulo, setTitulo] = useState('');


  const CategoriasAparecer = async _ => {
    const r = await BuscaCategoria();
    setProdutoFiltro(r);
  };

  const FiltroCategoriaOferta = async _ => {
    const resposta = await BuscarCategoriaOfertas(titulo);

    if (titulo === 'Selecione uma categoria' || !titulo)
      ListarCards();

    setCard(resposta);
  }

  useEffect(() => {
    FiltroCategoriaOferta();
  }, [titulo]);

  const ListarCards = async () => {
    const r = await BuscarOfertaAPI();
    setCard(r);
  };


  useEffect(() => {
    ListarCards();
    CategoriasAparecer();
  }, []);

  return (
    <div className='Ofertas-cliente'>
      <CabecalhoUser />
      <section className='imagem-usuario-oferta'></section>

      <div className='Buscas-filtro'>


        <select value={titulo} onChange={e => setTitulo(e.target.value)}>
          <option>Selecione uma categoria </option>

          {produtosFiltro.map(item => <option value={item.categoria} key={item.id}>{item.categoria}</option>)}
        </select>
      </div>
      <h1 className='title-produtos'>{!titulo || titulo === 'Selecione uma categoria' ? 'Ofertas' : `Ofertas: ${titulo}`}</h1>
      <section className='Cards-product'>
        {card.map(item => <CardOfertas  item={item} />)}
      </section>


    </div>
  )
}
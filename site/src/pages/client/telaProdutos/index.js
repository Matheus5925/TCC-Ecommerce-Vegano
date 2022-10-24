
import './index.scss';

import CabecalhoUser from '../../../components/cabecalho-user'
import CardProdutosUsuario from '../../../components/card-usuario-produto'; 
import { useEffect, useState } from 'react';
import { MostrarProdutos, BuscaCategoria, FiltrarPorCategoria } from '../../../api/ProdutoAPI';
import LupaPesquisa from '../../../assets/images/search.png';


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
     if(!titulo)
        ListarCards();

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
    CategoriasAparecer();
  },[]);

    return(
        <div className='Produtos-cliente'>
          <CabecalhoUser/>
          <section className='imagem-usuario-produto'>

          </section>
          <div className='Buscas-filtro'>
              <div className='caixa-pesquisa-produtos'>
                <input type="text" className='nome-produto' placeholder='Pesquisar...'/>
                <a className='procura-botao' href="#">
                  <img className='Lupa' src={LupaPesquisa} alt="" />
                </a>
              </div>
              
              <select value={titulo} onChange={e => setTitulo(e.target.value)}>
                <option> </option>
                {produtosFiltro.map(item => <option value={item.categoria} key={item.id}>{item.categoria}</option>)}
              </select>
          </div>
          <h1 className='title-produtos'>{!titulo || titulo === 'Selecione uma categoria' ? 'Produto' : `Produtos: ${titulo}`}</h1>
          <section className='Cards-product'>
            {/* {card.map(item => <CardProdutosUsuario
              fabricante={item.fabricante}
              nome={item.nome}
              volume={item.volume}
              linha={!item.linha ? 'Não informada ' : item.linha}
              valor={item.valor}
              imagem={item.imagem}
            />)} */}

            {card.map(item =>  <CardProdutosUsuario key={item.id} item={item} />)}

          </section>
          
        </div>
    )
}
import { useEffect, useState } from 'react'
import './index.scss';
import Img5 from '../../assets/images/image 5.png';

import Rodape from '../../components/rodape';
import CabecalhoUser from '../../components/cabecalho-user';
import ofertas3 from '../../assets/images/oferta3.png'
import marca1 from '../../assets/images/marca1.png'
import marca2 from '../../assets/images/marca2.png'
import marca3 from '../../assets/images/marca3.png'
import icone from '../../assets/images/iconeDep.png'
import segundaFaixa from '../../assets/images/img4.png';
import ofertas2 from '../../assets/images/oferta2.png'
import { PegarDepoimento } from '../../api/UsuarioAPI.js';
import { useNavigate } from 'react-router-dom';
import { API_URL } from '../../api/config';

import Jump from 'react-reveal';
import Jumpp from 'react-reveal';
import Fade from 'react-reveal/Fade';



import { ListarDepoimentos } from '../../api/UsuarioAPI';
import { Link } from 'react-router-dom';
import { BuscarOfertaAPI, FiltrarProdutosNome, MostrarProdutos } from '../../api/ProdutoAPI';
import { set } from 'local-storage';


export default function LadinPage() {
  const [depoimentos, setDepoimentos] = useState([]);
  const [ofertas, setOfertas] = useState([]);
  const [nomeProduto, setNomeProduto] = useState('');
  const [produto, setProduto] = useState([]);
  const [render, setRender] = useState(false);

  const MostrarDepoimentos = async  _ =>{
      const resposta = await ListarDepoimentos();
      setDepoimentos(resposta);
  }

  const PesquisarProduto = async () =>{
    if(!nomeProduto){
      setRender(false)
    }
    if(nomeProduto){
      const r = await FiltrarProdutosNome(nomeProduto);
      setProduto(r);
      setRender(true)
    }
  }

  const MostrarOfertas = async  _ =>{
    const resposta = await BuscarOfertaAPI();
    setOfertas(resposta);
  }

  const navigate = useNavigate();

  const DetalhesProdutoDirecionar = (id) =>{
      navigate(`/detalhes/produto/${id}`);
  }

  const ExibirImagem = imagem =>{
      if(!imagem)
          return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
      else
          return `${API_URL}/${imagem}`;
  }

  useEffect(()=>{
    MostrarDepoimentos();
    MostrarOfertas();
  },[]);

  useEffect(() =>{
     setTimeout(()=>{
       PesquisarProduto();
     }, 1000)
  }, [nomeProduto]);

  return (
    <div className='Principal-div-home'>
        <CabecalhoUser />
      <div className='ImgFundo'>
        <div className='escrita'>
          <p className='t1'> Bem-vindo a <br/>
          nossa loja</p>
          <input value={nomeProduto} onChange={e => setNomeProduto(e.target.value)} className='bloco'type="text" placeholder ="o que você procura?"/>
         { render === true &&
         produto.map((item, index) => index < 5 && <div onClick={() => DetalhesProdutoDirecionar(item.id)} className='pesquisa-basica hover'>
         <img src={ExibirImagem(item.imagem)} alt="" />
         <p>{item.nome}</p>
         <p>{item.volume}</p>
       </div>)}
        </div>
      </div>
      
      <div className='Segunda-Parte'>
        <div className='Titulo'>
          <p>Cosméticos Naturais: descubra sobre nossos Produtos veganos!</p>
          <div className='Linha2'>
            <hr />
          </div>

            <Jump>

          <div className='Container'>
                <img className='img1' src={segundaFaixa} alt="" />
              <p className='texto-faixa-verde'>
                A adesão aos cosméticos veganos cresce conforme aumenta a conscientização sobre o consumo e, principalmente, sobre os impactos ambientais do estilo de vida moderno.
                O objetivo do veganismo é reduzir os impactos ambientais da sociedade e promover o bem-estar animal, principalmente por meio de mudanças no consumo.
                Os produtos veganos são aqueles que não envolvam qualquer tipo de exploração animal, desde a matéria-prima utilizada, formulação até a execução dos processos de fabricação, podendo ser produtos cosméticos, alimentícios, vestuário ou até produções culturais.
              </p>
          </div>

            </Jump>


          <div className='Container1-2'>
          <Jumpp botton>
            <p>Ofertas do Dia</p>

          </Jumpp>

          <Fade bottom>
          

          <div className='Containers'>
              {ofertas.map((item, index) => index < 4 && <div key={item.id} className='Container1 hover'>
                                          <img onClick={() => DetalhesProdutoDirecionar(item.id)} className='imgP2'src={ExibirImagem(item.imagem)} alt='imagem do produto'/>
                                          <p className='tit3'>{item.categoria}</p> 
                                          <p className='tit1'>{item.nome}</p>
                                          <p className='vl'>R${item.valor.replace('.', ',')}</p>
                                          <h1 className='valorOferta1'>R${item.precoNovo.replace('.', ',')}</h1>
                                        </div>)}

            </div>
            </Fade>
          </div>
        <div className='Container1-3'>
          <div className='Marcas'>
            <img className='M1'src={marca1} alt='img da logo da gaia'/>
            <img className='M1' src={marca2} alt='img da logo principia'/>
            <img className='M1'src={marca3} alt='img da logo almanati'/>
          </div>
        </div>
        <div className='Depoimentos'>
          <div className='Titulo-Depoimentos'>
            <p>Depoimentos de Clientes</p>
            <div className='Linha2'>
              <hr />
            </div>
          </div>
            <div className='Imagens'>
              <div className='card-depoimentos'>
                {
                  depoimentos.map((item, quantidadeDepoimentos)=>
                  
                  quantidadeDepoimentos < 4 &&
                
                     <main key={item.id} className='depoimentos'>
                     <img src={icone} alt=''/>
                     <h1 className='enfase'>{item.nome}</h1>
                     <p className='enfase'>{item.avaliacao}</p>
                     <h4 className='enfase'>{item.email}</h4>
                     <p className='avaliacao'>{item.comentario}</p>
                  </main>
                 )}
              </div>
              <Link to='/depoimentos' className='BT'>
                  <button className='B'> Faça o seu Depoimento</button>
              </Link>
            
          </div>
        </div>
      </div>
      <Rodape/>
      </div>
      </div>
  )
}
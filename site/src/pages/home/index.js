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

import { ListarDepoimentos } from '../../api/UsuarioAPI';
import { Link } from 'react-router-dom';
import { BuscarOfertaAPI } from '../../api/ProdutoAPI';


export default function LadinPage() {
  const [depoimentos, setDepoimentos] = useState([]);
  const [ofertas, setOfertas] = useState([]);

  const MostrarDepoimentos = async  _ =>{
      const resposta = await ListarDepoimentos();
      setDepoimentos(resposta);
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

  return (
    <div className='Principal-div-home'>
        <CabecalhoUser />
      <div className='ImgFundo'>
        <div className='escrita'>
          <p className='t1'> Bem-vindo a <br/>
          nossa loja</p>
          <input className='bloco'type="text" placeholder ="o que você procura?"/>
        </div>
      </div>
      
      <div className='Segunda-Parte'>
        <div className='Titulo'>
          <p>Cosméticos Naturais: descubra sobre nossos Produtos veganos!</p>
          <div className='Linha2'>
            <hr />
          </div>

          <div className='Container'>
                <img className='img1' src={segundaFaixa} alt="" />
              <p className='texto-faixa-verde'>
                A adesão aos cosméticos veganos cresce conforme aumenta a conscientização sobre o consumo e, principalmente, sobre os impactos ambientais do estilo de vida moderno.
                O objetivo do veganismo é reduzir os impactos ambientais da sociedade e promover o bem-estar animal, principalmente por meio de mudanças no consumo.
                Os produtos veganos são aqueles que não envolvam qualquer tipo de exploração animal, desde a matéria-prima utilizada, formulação até a execução dos processos de fabricação, podendo ser produtos cosméticos, alimentícios, vestuário ou até produções culturais.
              </p>
          </div>

            
          <div className='Container1-2'>
            <p>Ofertas do Dia</p>

          
          
          <div className='Containers'>
             {ofertas.map((item, index) => index < 3 && <div className='Container1'>
                                          <img onClick={DetalhesProdutoDirecionar} className='imgP2'src={ExibirImagem(item.imagem)} alt='imagem do produto'/>
                                          <p className='tit3'>{item.categoria}</p> 
                                          <p className='tit1'>{item.nome}</p>
                                          <p className='vl'>R${item.precoNovo.replace('.', ',')}</p>
                                          <h1 className='valorOferta1'>R${item.valor.replace('.', ',')}</h1>
                                        </div>)}
            </div>

          
          </div>
        </div>

        <div className='Container1-3'>
          <div className='Marcas'>
            <div>
              <img className='M1'src={marca1} alt='img da logo da gaia'/>
            </div>
            <div>
              <img className='M1' src={marca2} alt='img da logo principia'/>
            </div>
            <div>
              <img className='M1'src={marca3} alt='img da logo almanati'/>
            </div>
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
  )
}
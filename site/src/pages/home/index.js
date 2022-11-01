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



import { ListarDepoimentos } from '../../api/UsuarioAPI';
import { Link } from 'react-router-dom';


export default function LadinPage() {
  const [depoimentos, setDepoimentos] = useState([]);

  const MostrarDepoimentos = async  _ =>{
      const resposta = await ListarDepoimentos();
      setDepoimentos(resposta);
  }

  useEffect(()=>{
    MostrarDepoimentos();
  },[]);

  return (
    <div className='Principal'>
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
              <div className='Container1'>
                <img className='imgP2'src={Img5} alt='imagem do produto'/>
                <p className='tit3'>KIT ROTINA DIÁRIA</p> 
                <p className='tit1'>Gala vegano</p>
                <p className='vl'>R$240,00</p>
                <h1 className='valorOferta1'>R$200,00</h1>
              </div>
              <div className='Container2'>
                <img className='imgP2'src={ofertas2} alt='imagem do produto'/>
                <p className='tit4'>Shampoo Natural Hidratação</p>
                <p className='tit1'>Suave Argan</p>
                <p className='valor2'>R$100,00</p>
                <h1 className='valorOferta2'>R$40,00</h1>
              </div>
              
              <div className='Container3'>
                <img className='imgP2'src={ofertas3} alt='imagem do produto'/>
                <p className='tit5'>Protetor Solar Facial Natural e 
                Vegano FPS 30</p>
                <p className='valor2'>R$100,00</p>
                <h1 className='valorOferta2'>R$40,00</h1>
              </div>
            </div>
          </div>
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
  )
}

import LogoTipo from '../../assets/images/logo.png'
import { useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Cabecalho1 from '../../components/cabecalho-principal'
import Rodape from '../../components/rodape'
import Img5 from '../../assets/images/image 5.png'
import CabecalhoUser from '../../components/cabecalho-user';


import ofertas3 from '../../assets/images/oferta3.png'
import marca1 from '../../assets/images/marca1.png'
import marca2 from '../../assets/images/marca2.png'
import marca3 from '../../assets/images/marca3.png'
import icone from '../../assets/images/iconeDep.png'
import ofertas2 from '../../assets/images/oferta2.png'


export default function LadinPage() {
  return (
    <div className='Principal'>
      <div className='ImgFundo'>
        <CabecalhoUser/>
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
            <div className='img1'>
              <div className='Paragrafo-1'>
                <div className='Paragrafo'>
                  A adesão aos cosméticos veganos cresce conforme aumenta a conscientização sobre o consumo e, principalmente, sobre os impactos ambientais do estilo de vida moderno.
                  <br />
                  O objetivo do veganismo é reduzir os impactos ambientais da sociedade e promover o bem-estar animal, principalmente por meio de mudanças no consumo.
                  <br />
                  Os produtos veganos são aqueles que não envolvam qualquer tipo de exploração animal, desde a matéria-prima utilizada, formulação até a execução dos processos de fabricação, podendo ser produtos cosméticos, alimentícios, vestuário ou até produções culturais.
                </div>
              </div>
            </div>
          </div>
          <div className='Container1-2'>
            <p>Ofertas do Dia</p>
            <div className='Containers'>
              <div className='Container1'>
                <img className='imgP1'src={Img5} alt='imagem do produto'/>
                <p className='tit3'>KIT ROTINA DIÁRIA</p> 
                <p className='tit'>Gala vegano</p>
                <p className='valor1'>R$240,00</p>
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
            < div className='Imagens'>
             <main className='depoimentos'>
                <img src={icone} alt=''/>
                <h1 className='enfase'>ALEX PALLADINI</h1>
                <p className='avaliacao'>Os cosméticos são <br/>
                incríveis, potentes e duradouros.</p>
             </main>
             <main className='depoimentos'>
                <img src={icone} alt=''/>
                <h1 className='enfase'>HELLOISE LUZ</h1>
                <p className='avaliacao'> Positivo <br/>
                    Produtos incríveis, alta performance <br/>
                    e melhor de tudo: rendem horroooores!
                </p>
             </main>
             <main className='depoimentos'>
                <img src={icone} alt=''/>
                <h1 className='enfase'>GEORGE NAKAMURA</h1>
                <p className='avaliacao'>
                    Impossível descrever em 512 <br/>
                    caracteres todo o meu amor pela <br/>
                    cosmétique!!!!
                </p>
             </main>
            </div>
            <div className='BT'>
                <button className='B'> mais depoimentos</button>
            </div>
          </div>
        </div>

        < Rodape />
      </div>
    </div>
  )
}

import LogoTipo from '../../assets/images/logo.png'
import { useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Cabecalho1 from '../../components/cabecalho-principal'
import Rodape from '../../components/rodape'
import Img5 from '../../assets/images/image 5.png'
import ofertas2 from '../../assets/images/oferta2.png'



export default function LadinPage() {

  const navigate = useNavigate();

    useEffect(() => {
      if (!storage('usuario-logado')) {
        navigate('/logincliente')
      }
      else {
        const UsuarioLogado = storage('usuario-logado');
      }
    }, []);
                      
  return (
    <div className='Principal'>
      <div className='ImgFundo'>
        <Cabecalho1 className='text' />
        <div className='escrita'>
          <p className='t1'> Bem-vindo a <br/>
          nossa loja</p>
          <input className='bloco'type="text" placeholder ="o que você procura?"></input>
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
               <p className='valorOferta1'>R$200,00</p>
              </div>
              <div className='Container2'>
              <img className='imgP2'src={ofertas2} alt='imagem do produto'/>
               <p className='tit4'>Shampoo Natural Hidratação <br/>
                Suave Argan</p>
               <p className='valor2'>R$240,00</p>
               <p className='valorOferta2'>R$200,00</p>
              </div>
              
              <div className='Container3'></div>
            </div>
          </div>
        </div>

        <div className='Container1-3'>
          <div className='Marcas'>
            <div className='Marcas1'>

            </div>
          </div>
        </div>
        <div className='Depoimentos'>
          <div className='Titulo-Depoimentos'>
            <p>Depoimentos de Clientes</p>
            <div className='Linha2'>
              <hr />
            </div>

            < div className='Imagens'>
              <p></p>
              <div className='Imagen1'></div>
              <div className='Imagen2'></div>
            </div>
          </div>
        </div>

        < Rodape />
      </div>
    </div>
  )
}

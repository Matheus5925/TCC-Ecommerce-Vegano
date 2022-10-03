import LogoTipo from '../../assets/images/logo.png'
import { useEffect } from 'react';
import storage from 'local-storage';
import { useNavigate } from 'react-router-dom'
import './index.scss'
import Cabecalho1 from '../../components/cabecalho-principal'
import Rodape from '../../components/rodape'

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
                <div className='Container1-img' />
              </div>
              <div className='Container2'></div>
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

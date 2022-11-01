import './index.scss'

import CabecalhoUser from '../../../components/cabecalho-user'
import Img23 from '../../../assets/images/image23.png'
import Img24 from '../../../assets/images/image24.png'
import Img25 from '../../../assets/images/image25.png'


export default function QuemSomos () {


    return(
        <main className='Quem-Somos'>
          <CabecalhoUser/>
          <section className='IMG1'></section>
            <label className='quadro1'>
                <img src={Img23} alt=''/>
                <div className='sub-quadro'>
                    <h1>MISSÃO</h1>
                    <p>Desenvolver e disponibilizar aos nossos clientes cosméticos com ativos naturais e veganos inovadores, de alta performance, com eficácia comprovada, que promovam saúde, beleza e bem-estar, respeitando o meio-ambiente e os animais.</p>
                </div>
            </label>
            <label className='quadro1'>
                <img src={Img24}/>
                <div className='sub-quadro'>
                    <h1>VISÃO</h1>
                    <p>Tornar-se referência global no segmento de cosméticos naturais e veganos de alta performance, visando a saúde, beleza e bem-estar dos nossos clientes.</p>
                </div>
            </label>
            <label className='quadro1'>
                <img src={Img25}/>
                <div className='sub-quadro'>
                    <h1>VALORES</h1>
                    <p>Promover saúde, beleza e bem-estar dos nossos clientes, fornecendo cosméticos com ativos naturais e veganos de alta performance, eficazes e sustentáveis, respeitando o meio-ambiente e os animais.</p>
                </div>
            </label>
        </main>
    )

}
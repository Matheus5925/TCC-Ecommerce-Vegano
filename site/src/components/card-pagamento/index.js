import './index.scss'
import Produto from '../../assets/images/imagem produto.png' 

export default function cardParametos() {


    return(
        <section className='card-pagamento'>
            <div className='posicionamento-p'>
                <img src={Produto} />
                <p>Sérum facial</p>
                <p>R$ 150,00</p>
            </div>
        </section>
    )
}
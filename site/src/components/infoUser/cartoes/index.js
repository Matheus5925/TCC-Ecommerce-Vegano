import './index.scss';
import {useState} from 'react';
import CardCartao from './card';
import AdicionarCartao from '../../../assets/images/adicionar-user.png'

const ConteudoCard = props =>{
    const [cardCartao, setCardCartao] = useState([]);

    return(
        <section className='Tela-principal-Cartao'>
                <div className='titulo-card'>
                    <div className='titulo'>
                        <h1>Seus Cartões</h1>
                        <hr className='linha'/>
                    </div>
                    <div className='card'>
                        <CardCartao/>
                    </div>
                </div>
                <div className='button-add'>
                    <img className='adicionar-cartao' src={AdicionarCartao} alt="" />
                </div>
        </section>
    );

}

export default ConteudoCard;
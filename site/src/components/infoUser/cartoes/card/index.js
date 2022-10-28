import './index.scss';
import MasterCard from '../../../../assets/images/logo-mastercard.png';

const CardCartao = props =>{

    return(
       <div className='Principal-card-cartao'>
            <div className='container-cartao'>
                <img className='img-cartao' src={MasterCard} alt="" />
            </div>
            <div className='nome-numero-cartao'>
                <p> Helloise Luz</p>
                <h3>2511 1651 2233 5554</h3>
            </div>
            <div className='data-cvv'>
                <p>CVV: 233</p>
                <p>Validade: 20/24</p>
            </div>
       </div>
    );
}

export default CardCartao;
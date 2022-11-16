import './index.scss';
import MasterCard from '../../../../assets/images/logo-mastercard.png';

const CardCartao = props =>{

    const FormatarNumero = (numero)=> {
        
        let juncao;
        
        if(numero.length == 16){
            juncao = `${numero.substring(0,4)} ${numero.substring(4,8)} ${numero.substring(8,12)} ${numero.substring(12,16)}`;
        }
        else if (numero.length == 13){
            juncao = `${numero.substring(0,4)} ${numero.substring(4,8)} ${numero.substring(8,11)} ${numero.substring(12,13)}`;
        }

        return juncao;
    }

    console.log(FormatarNumero('15258448951235486'));

    return(
       <div className='Principal-card-cartao'>
            <div className='container-cartao'>
                <img className='img-cartao' src={MasterCard} alt="" />
            </div>
            <div className='nome-numero-cartao'>
                <p> {props.item.titular}</p>
                <h3>{FormatarNumero(props.item.numeroCartao)}</h3>
            </div>
            <div className='data-cvv'>
                <p>CVV: {props.item.cvv}</p>
                <p>Validade: {props.item.vencimento}</p>
            </div>
       </div>
    );
}

export default CardCartao;
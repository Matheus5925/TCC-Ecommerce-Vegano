import './index.scss';
import EnderecoIcone from '../../../../assets/images/endereco-img.png';

const CardEndereco = props =>{

    return(
       <div className='Principal-card-endereco' >
           
            <div className='nome-endereco'>
                <h3>{`${props.item.endereco}, ${props.item.bairro}, ${props.item.estado} - ${props.item.cidade} - CEP ${props.item.cep}`}</h3>
            </div>
            <div className='container-endereco'>
                <img className='img-endereco' src={EnderecoIcone} alt="" />
            </div>
       </div>
    );
}

export default CardEndereco;
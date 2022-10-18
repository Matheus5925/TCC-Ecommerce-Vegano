import './index.scss'
import imagemProduto from '../../assets/images/image 30.png';
import {API_URL} from '../../api/config.js'



export default function CardCarrinho(props) {

    const ExibirImagem = (imagem) =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return API_URL + '/' + imagem;
    }

    return(
        <div className='CARD'>
            <img className='imagem-carrinho' src={imagemProduto} alt="produto"/>
            <p>Selagem Vegana Marroquina 1L Tigo Cosméticos</p>
            <p>R$ 139,90</p>
            <div className='QNT'>
                <p className='editar'>+</p>
                <p>1</p>
                <p className='editar' >-</p>
            </div>
            <p>R$ 139,90</p>
        </div>
    )
}
import './index.scss'
import imagemProduto from '../../assets/images/image 30.png'


export default function CardCarrinho() {

    return(
        <div className='CARD'>
            <img src={imagemProduto} alt="produto"/>
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
import './index.scss'
import {API_URL} from '../../api/config.js';
import { useState} from 'react'
import Storage from 'local-storage';



export default function CardCarrinho(props) {
    const [QtdCarrinho, setQtdCarrinho] = useState(props.item.qtd);

    const ExibirImagem = (imagem) =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return API_URL + '/' + imagem;
    }

    function SubTotal() {
        let sub = QtdCarrinho * props.item.id.valor;

        return sub;
    }

    function AlterarQuantidade(novaQuantidade) {
        setQtdCarrinho(novaQuantidade);
        console.log('passou');

        let carrinho = Storage('carrinho');
        let NewItem = carrinho.find(item => item.id === props.item.id);
        NewItem.qtd = novaQuantidade;

        Storage('carrinho', carrinho);
    }

    return(
        <div className='CARD'>
            <img className='imagem-carrinho' src={ExibirImagem(props.item.id.imagem)} alt="produto"/>
            <p>{`${props.item.id.nome} ${props.item.id.volume}  ${props.item.id.fabricante}`}</p>
            <p>R$ {props.item.id.valor}</p>
            <div className='QNT'>
                {/* <p className='editar'>+</p> */}
                <select value={QtdCarrinho} onChange={e => AlterarQuantidade(e.target.value)}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
            <p>R$ {SubTotal()}</p>
        </div>
    )
}
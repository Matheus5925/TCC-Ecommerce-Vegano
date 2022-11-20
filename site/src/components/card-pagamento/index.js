import './index.scss'
import {API_URL} from '../../api/config.js';
import { useState} from 'react'
import Storage from 'local-storage';
import { useNavigate } from 'react-router-dom';


export default function CardPagamento(props) {

    console.log(props);
    const [QtdCarrinho, setQtdCarrinho] = useState(props.item.qtd);


    const navigate = useNavigate();

    const DetalhesProdutoDirecionar = () =>{
        navigate(`/detalhes/produto/${props.item.id.id}`);
    }

    function Remover(){
        props.removerItem(props.item.id.id);
    }


    const ExibirImagem = (imagem) =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return API_URL + '/' + imagem;
    }

    function SubTotal() {
        let sub = QtdCarrinho * props.item.id.valor;

        return sub.toFixed(2);
    }

    function AlterarQuantidade(novaQuantidade) {
        setQtdCarrinho(novaQuantidade);

        let carrinho = Storage('carrinho');
        console.log(carrinho);
        let NewItem = carrinho.find(item => item.id == props.item.id.id);
        NewItem.qtd = novaQuantidade;
        
        Storage('carrinho', carrinho);
        props.CarregarCarrinho();
    }


    function AlterarQuantidade(novaQuantidade) {
        setQtdCarrinho(novaQuantidade);
  
        let carrinho = Storage('carrinho');
        console.log(carrinho);
        let NewItem = carrinho.find(item => item.id == props.item.id.id);
        NewItem.qtd = novaQuantidade;
        
        Storage('carrinho', carrinho);
        props.CarregarCarrinho();
    }
    



    return(
        <section className='card-pagamento'>
            <div className='posicionamento-p'>
            <img onClick={DetalhesProdutoDirecionar} className='imagem-pagamento' src={ExibirImagem(props.item.id.imagem)} alt="produto"/>
            <p onClick={DetalhesProdutoDirecionar} className='cursor'>{`${props.item.id.nome} ${props.item.id.volume}  ${props.item.id.fabricante}`}</p>
            <div className='info-card-pagamento'>
                <p className='preco-pg' onClick={DetalhesProdutoDirecionar}>R$ {Number(props.item.id.valor)}</p>
            </div> 
            </div>
            <div className='preco-excluir-pagamento'>
                <div className='excluir'>
                    <button onClick={Remover}>Excluir</button>
                </div>
            </div>  
        </section>
    )
}
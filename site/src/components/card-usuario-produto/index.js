import { API_URL } from '../../api/config';
import './index.scss';
import imagemTeste from '../../assets/images/imagem-falta-produto.png';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import storage from 'local-storage';



const CardProdutosUsuario = props =>{

    const navigate = useNavigate();

    const DetalhesProdutoDirecionar = () =>{
        navigate(`/detalhes/produto/${props.item.id}`);
    }

    const ExibirImagem = imagem =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return `${API_URL}/${imagem}`;
    }

    const AdicionarCarrinho = () =>{
        let carrinho = [];
        if(storage('carrinho'))
            carrinho = storage('carrinho');
        if(!carrinho.find(item => item.id === props.item.id)){
            carrinho.push({
                id: props.item.id,
                quantidade: props.item.quantidade
            })
        }
    };

    return(
        <div className='Card-Produto-Usuario'>
<<<<<<< HEAD
            <div className='Titulo-Produto'>
                <h1>{props.fabricante}</h1>
            </div>
            <div className='imagem-produto-cliente'>
                <img className='imagem-produto-cliente' src={ExibirImagem(props.imagem)} alt="" />
=======
            
            <div onClick={DetalhesProdutoDirecionar} className='Titulo-Produto'>
                <h1>{props.item.fabricante}</h1>
            </div>
            <div onClick={DetalhesProdutoDirecionar} className='imagem-produto-cliente'>
                <img className='imagem-produto-cliente' src={ExibirImagem(props.item.imagem)} alt="" />
>>>>>>> 87e4d967ae24796924664ec03c798f735ba0924b
            </div>
            <div className='nome-valor-linha'>
                <p>{props.nome}</p>
                <p>{`${props.volume} - ${props.linha} `}</p>
            </div>
<<<<<<< HEAD
                <p className='form-valor'>{`R$ ${props.valor}`}</p>
=======
                <p className='form-valor'>{`R$ ${props.item.valor.replace('.', ',')}`}</p>
>>>>>>> 87e4d967ae24796924664ec03c798f735ba0924b
                <div className='button-adicionar'>
                    <button onClick={AdicionarCarrinho}>Adicionar</button>
                </div>
        </div>
    )
}

export default CardProdutosUsuario;
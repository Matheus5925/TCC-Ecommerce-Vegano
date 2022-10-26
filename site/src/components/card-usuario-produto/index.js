import { API_URL } from '../../api/config';
import './index.scss';
import imagemTeste from '../../assets/images/imagem-falta-produto.png';
import { useNavigate, useParams } from 'react-router-dom';
<<<<<<< HEAD
import { toast, ToastContainer } from 'react-toastify';
import Storage from 'local-storage';
=======
import { useEffect } from 'react';
import Storage from 'local-storage';
import { toast, ToastContainer } from 'react-toastify';
>>>>>>> b36f6eedcef771282236645eb3a112a6f0c1c7bb



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
<<<<<<< HEAD
        let carrinho = [];
        if(Storage('carrinho'))
            carrinho = Storage('carrinho');
        if(!carrinho.find(item => item.id === props.item.id)){
            carrinho.push({
                id: props.item.id,
                quantidade: props.item.quantidade
            })
        }
        Storage('carrinho', carrinho);
        toast.success('Adicionado com sucesso');
    };
=======
        let carrinho = []
        if(Storage('carrinho')){
            carrinho = Storage('carrinho');
        }

        if(!carrinho.find(item => item.id === props.item.id)){
           carrinho.push({
                id: props.item.id,
                qtd: 1
           })
           Storage('carrinho', carrinho);
        }
            toast.success('Produto adicionado com sucesso');
    }


>>>>>>> b36f6eedcef771282236645eb3a112a6f0c1c7bb

    return(
        <div className='Card-Produto-Usuario'>
            <ToastContainer/>
<<<<<<< HEAD
=======
            
>>>>>>> b36f6eedcef771282236645eb3a112a6f0c1c7bb
            <div onClick={DetalhesProdutoDirecionar} className='Titulo-Produto'>
                <h1>{props.item.fabricante}</h1>
            </div>
            <div onClick={DetalhesProdutoDirecionar} className='imagem-produto-cliente'>
                <img className='imagem-produto-cliente' src={ExibirImagem(props.item.imagem)} alt="" />
            </div>
            <div className='nome-valor-linha'>
                <p>{props.item.nome}</p>
                <p>{`${props.item.volume} - ${props.item.linha} `}</p>
            </div>
                <p className='form-valor'>{`R$ ${props.item.valor.replace('.', ',')}`}</p>
                <div className='button-adicionar'>
                    <button onClick={AdicionarCarrinho}>Adicionar</button>
                </div>
        </div>
    );
}

export default CardProdutosUsuario;
import { API_URL } from '../../api/config';
import './index.scss';
import imagemTeste from '../../assets/images/imagem-falta-produto.png'


const CardProdutosUsuario = props =>{


    const ExibirImagem = imagem =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return `${API_URL}/${imagem}`;
    }

    return(
        <div className='Card-Produto-Usuario'>
            <div className='Titulo-Produto'>
                <h1>{props.fabricante}</h1>
            </div>
            <div className='imagem-produto-cliente'>
                <img className='imagem-produto-cliente' src={ExibirImagem(props.imagem)} alt="" />
            </div>
            <div className='nome-valor-linha'>
                <p>{props.nome}</p>
                <p>{`${props.volume} - ${props.linha} `}</p>
            </div>
                <p className='form-valor'>{`R$ ${props.valor}`}</p>
                <div className='button-adicionar'>
                    <button>Adicionar</button>
                </div>
        </div>
    )
}

export default CardProdutosUsuario;
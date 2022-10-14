import './index.scss';


const CardProdutosUsuario = props =>{
    return(
        <div className='Card-Produto-Usuario'>
            <div className='Titulo-Produto'>
                <h1>{props.fabricante}</h1>
            </div>
            <div className='imagem-produto-cliente'>
                <img className='imagem-produto-cliente' src={`http://localhost:5000/${props.imagem}`} alt="" />
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
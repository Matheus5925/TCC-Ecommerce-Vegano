import { useState } from 'react';
import './index.scss';


const CardStoque = props => {
    const [quantidade, setQuantidade] = useState(0);

    return (
        <div className='card-stoque'>
            <h1>{props.fabricante}</h1>
            <div className='imagem-card'>
                <img className='img-produto' src={props.image} alt="" />
            </div>
            <div className='nome-valor'>
                <p className='nome-produto'>{props.nome}</p>
                <p className='valor'>{props.value}</p>
            </div>
            <div className='quantidade'>
                <label>QTD:</label>
                <div className='input-quantidade'>
                    <p>+</p>
                    <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)} />
                    <p>-</p>
                </div>
            </div>
        </div>
    );
}

export default CardEstoque;
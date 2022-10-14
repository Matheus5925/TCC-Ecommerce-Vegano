import { useEffect, useState } from 'react';
import './index.scss';
import {confirmAlert} from 'react-confirm-alert';
import { toast } from 'react-toastify';
import lixeira from '../../assets/images/lixeira-estoque.png';
import lapis from '../../assets/images/lapis-estoque.png';
import { DeletarProduto, ListarEstoque, ListarEstoqueNome } from '../../api/ProdutoAPI.js';
import { useNavigate } from 'react-router-dom';
import { buscarImagem } from '../../api/ProdutoAPI.js';
import { API_URL } from '../../api/config';





const CardEstoque = props => {
    const [quantidade, setQuantidade] = useState(0);


    const navigate = useNavigate();

    const AlterarProduto = ()=>{
        navigate(`/cadastrarprodutos/alterar/${props.id}`);
    }


    async function removerServico(id, nome) {
        confirmAlert({
            title: 'Remover Serviço',
            message: `Deseja mesmo remover o produto ${props.nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resp = await DeletarProduto(id, nome)
                        if (ListarEstoqueNome === '') {
                            ListarEstoque();
                            toast.dark('filme removido!!')
                        }
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }

    const ExibirImagem = imagem =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return `${API_URL}/${imagem}`;
    }

    return (
        <div className='card-stoque'>
            <h1>{props.fabricante}</h1>
            <div className='delet-edit'>
                <img onClick={e => {e.stopPropagation(); AlterarProduto(props.id)}} className='lixeira-lapis' src={lapis} alt="" />
                <img onClick={e => {e.stopPropagation(); removerServico(props.id, props.nome)}} className='lixeira-lapis' src={lixeira} alt="" />
            </div>
            <div className='imagem-card'>
                <img className='img-produto' src={ExibirImagem(props.imagem)} alt="" />
            </div>
            <div className='nome-valor'>
                <p className='nome-produto'>{props.nome}</p>
                <p className='valor'>{props.value.replace('.', ',')}</p>
            </div>
            <div className='quantidade'>
                <label>QTD:</label>
                <div className='input-quantidade'>
                    <p>+</p>
                    <input type="number" value={quantidade} onChange={e => setQuantidade(e.target.value)}/>
                    <p>-</p>
                </div>
            </div>
        </div>
    );
}

export default CardEstoque;
import CabecalhoUser from '../../../components/cabecalho-user';
import './index.scss';
import Rodape from '../../../components/rodape'
import { useEffect, useState } from 'react';
import { BuscarId } from '../../../api/ProdutoAPI';
import { useParams } from 'react-router-dom';
import { API_URL } from '../../../api/config';
import { toast, ToastContainer } from 'react-toastify';

const DetalhesProduto = props =>{
    const [produtos, setProdutos] = useState({id: 0, nome: '',categoria: '', linha: '',  descricao: '', valor: '', fabricante: '', validade:'', volume:'', imagem: ''});

    const {idParams} = useParams();

    const ListarProduto = async _ =>{
        const r = await BuscarId(idParams);
        setProdutos(r);
    }

    useEffect(() =>{
        ListarProduto();
    },[]);

    const ExibirImagem = (imagem) =>{
        if(!produtos.imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return API_URL + '/' + imagem;
    }

    const AdicionarCarrinho = () =>{
        let carrinho = []
        if(Storage('carrinho')){
            carrinho = Storage('carrinho');
        }

        if(!carrinho.find(item => item.idParams === idParams)){
           carrinho.push({
                id: idParams,
                qtd: 1
           })
           Storage('carrinho', carrinho);
        }
            toast.success('Produto adicionado com sucesso');
    }


    return(
        <main className='Principal-page-detalhes'>
            <ToastContainer/>
            <CabecalhoUser/>
            <div className='body-content'>
                <section className='conteudo-principal-detalhes'>
                    <div className='imagem'>
                        <img className='imagem-produto-detalhe' src={ExibirImagem(produtos.imagem)} alt="" srcset="" />
                    </div>
                    <div className='Conteudo'>
                        <div className='titulo-marca-volume'>
                            <h2>{produtos.fabricante}</h2>
                            <h3>{`${produtos.nome} ${produtos.volume}`}</h3>
                        </div>
                        <div className='valor-detalhes'>
                            <div className='data-detalhes'>
                                <label>Valor:</label>
                                <p>R$ {produtos.valor.replace('.', ',')}</p>
                            </div>
                            <div className='data-detalhes'>
                                <label> Data de validade:</label>
                                <p>{produtos.validade.substr(0,10)}</p>
                            </div>
                            <div className='data-detalhes'>
                                <label> Linha:</label>
                                <p>{!produtos.linha ? 'Não informada' : produtos.linha}</p>
                            </div>
                            <div className='data-detalhes'>
                                <label> Categoria:</label>
                                <p>{produtos.categoria}</p>
                            </div>
                        </div>
                        <div className='buttons-detalhes'>
                            <button>Compre</button>
                            <button onClick={AdicionarCarrinho}>Adicionar</button>
                        </div>
                    </div>
                </section>
                <section className='descricao'>
                    <h3 className='title-desc'>Descrição do Produto</h3>
                    <p>{produtos.descricao}</p>
                </section>
            </div>
            <Rodape/>
        </main>
    );
}

export default DetalhesProduto;
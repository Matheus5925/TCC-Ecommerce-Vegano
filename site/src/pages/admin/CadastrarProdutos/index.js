import { AlterarProduto, BuscaCategoria, BuscarId, buscarImagem, BuscarParteCorpo, CadastrarProduto, EnviarImagem } from '../../../api/ProdutoAPI.js'
import { toast, ToastContainer } from 'react-toastify'
import React, { useState, useEffect } from 'react';
import './index.scss'

import CabecalhoAdmin from '../../../components/cabecalho-admin/index.js';
import { useParams } from 'react-router-dom';

export default function CadastrarProdutos() {
    const [produto, setProduto] = useState('');
    const [linha, setLinha] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [data, setData] = useState('');
    const [volume, setVolume] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor] = useState();
    const [descricao, setDescricao] = useState('');
    const [imagem, setImagem] = useState();
    const [id, setId] = useState(0);

    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idParteCorpo, setIdParteCorpo] = useState();
    const [parteCorpo, setParteCorpo] = useState([]);

    const {idParams} = useParams();

    const NovoProduto = _ => {
        setProduto('');
        setLinha('');
        setFabricante('');
        setData('');
        setVolume(0);
        setQuantidade(0);
        setValor('');
        setDescricao('');
        setCategoria([]);
        setIdParteCorpo([]);
        setImagem();
    }

    const CarregarProduto = async () =>{
        if(!idParams) return;

        const r = await BuscarId(idParams);
        setId(r.id);
        setIdCategoria(r.categoria);
        setIdParteCorpo(r.ParteCorpo);
        setProduto(r.nome);
        setLinha(r.linha);
        setDescricao(r.descricao);
        setValor(r.valor);
        setFabricante(r.fabricante);
        setData(r.validade.substr(0, 10));
        setQuantidade(r.quantidade);
        setVolume(r.volume);
    }

    const Categoria = async () => {
        const r = await BuscaCategoria();
        setCategoria(r);
    }

    const ParteDoCorpo = async _ => {
        const r = await BuscarParteCorpo();
        setParteCorpo(r);
    }

    const Salvar = async () => {
        try {
           if (id === 0) {
                let preco = Number(valor.replace(',', '.'));

                const r = await CadastrarProduto(idCategoria, idParteCorpo, produto, descricao, preco, fabricante, data, volume, quantidade, linha);
                await EnviarImagem(r.id, imagem);
                setId(r.id);

                toast.success('Produto cadastrado com sucesso!');
                NovoProduto();
           }
           else{
                let preco = Number(valor.replace(',', '.'));

                const r = await AlterarProduto(idCategoria, idParteCorpo, produto, descricao, preco, fabricante, data, volume, quantidade, linha, id);
                
                if(typeof(imagem) === "object")
                    await EnviarImagem(id, imagem);

                toast.success('Produto alterado com sucesso!');
           }

        } catch (err) {
            toast.error(err.response.data.erro)
        };
    };



    useEffect(() => {
        Categoria();
        ParteDoCorpo();
        CarregarProduto();
    }, []);

    const escolherImagem = () => {
        document.getElementById('imagemProduto').click();
    }

    const MostrarImagem = () => {
        if (typeof (imagem) === 'object') {
            return URL.createObjectURL(imagem);
        }
        else {
            return buscarImagem(imagem);
        }
    }


    // const uploadImage = async e => {

    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append('image', image);

    // }

    return (
        <main className='Page-cadastro'>
            <ToastContainer />
            <CabecalhoAdmin />
            <div className='principal'>
                <div className='titulo'>
                    <p>ADICIONAR UM PRODUTO</p>
                </div>
                <div className="container">

                    <div className='pg-Principal'>

                        <div className='pag-toda'>

                            <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
                            <input placeholder='Mascará de....' value={produto.trimStart()} onChange={e => setProduto(e.target.value)} className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Linha do produto</label>
                            <input placeholder='vegana, natural...' value={linha.trimStart()} onChange={e => setLinha(e.target.value)} className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Fabricante</label>
                            <input placeholder='Gaya, Avon...' value={fabricante.trimStart()} onChange={e => setFabricante(e.target.value)} className='Caixa-Texto' type="text" />


                            <div className='section-inputs2'>
                                <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Data de validade </label>
                                        <input value={data} onChange={e => setData(e.target.value)} className='caixa-menor Caixa-Data' type="date" />
                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Volume </label>
                                        <input placeholder='50g, 250ml...' value={volume} onChange={e => setVolume(e.target.value)} className='caixa-menor number' type="text" />
                                    </div>
                                </div>
                                <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Quantidade de Produto</label>
                                        <input value={quantidade} onChange={e => setQuantidade(e.target.value)} className='caixa-menor number' type="number" />
                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Valor </label>
                                        <input placeholder='$00,00' value={valor} onChange={e => setValor(e.target.value)} className='caixa-menor number' type="number" min="0" pattern="^\d*(\.\d{0,2})?$" />
                                    </div>
                                </div>
                                <div className='categ-parte'>

                                    <div className="label">
                                        <label className='Titulo-Caixa-Texto'> Categoria </label>
                                        <select value={idCategoria} onChange={e => setIdCategoria(e.target.value)}>
                                            <option value="Selecione uma opção">Selecione</option>
                                            {categoria.map(item => <option key={item.id} value={item.id}> {item.categoria}</option>)}
                                        </select>
                                    </div>

                                    <div className="label">
                                        <label className='Titulo-Caixa-Texto'> Parte do corpo </label>
                                        <select value={idParteCorpo} onChange={e => setIdParteCorpo(e.target.value)}>
                                            <option value="Selecione uma opção">Selecione</option>
                                            {parteCorpo.map(item => <option value={item.id}>{item.parteCorpo}</option>)}

                                        </select>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="pg-lado">
                        <div onClick={escolherImagem}>
                            <label className='Titulo-Caixa-Texto'>Adicione uma foto</label>
                            {
                                !imagem &&
                                <img src="./neblina.png" alt="imagem" width="250px" height="250px" />
                            }

                            {
                                imagem &&
                                <img src={MostrarImagem()} alt="imagem" width="250px" height="250px" />
                            }
                            <br />
                            <input type='file' id='imagemProduto' onChange={e => setImagem(e.target.files[0])} />
                        </div>

                        <label className='Titulo-Caixa-Texto'>Adicione uma descrição </label>
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao" name="descricao" rows="13" cols="55" />

                        <div className='botao'>
                            <button>Voltar</button>
                            <button onClick={Salvar}>{id === 0 ? 'Salvar' : 'Alterar'}</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
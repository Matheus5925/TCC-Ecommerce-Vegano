import { BuscaCategoria, BuscarParteCorpo } from '../../api/ProdutoAPI.js'

import React, { useState, useEffect } from 'react';
import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function CadastrarProdutos() {
    const [produto, setProduto] = useState('');
    const [linha, setLinha] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [data, setData] = useState(Date);
    const [volume, setVolume] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor ] = useState(0);
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState('');
    const [enderecoImg, setEnderecoImagem] = useState('');
    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });
    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idParteCorpo, setIdParteCorpo] = useState();
    const [parteCorpo, setParteCorpo] = useState([]);

    
    const Categoria = async () =>{
        const r = await BuscaCategoria();
        setCategoria(r);
    }

    const ParteDoCorpo = async _ =>{
        const r = await BuscarParteCorpo();
        setParteCorpo(r);
    }

    useEffect(() =>{
        Categoria();
        ParteDoCorpo();
    }, []);
   

    const uploadImage = async e => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

    }

    return (
        <main className='Page-cadastro'>

            <Cabecalho />
            <div className='principal'>
                <div className='titulo'>
                    <p>ADICIONAR UM PRODUTO</p>
                </div>
                <div className="container">

                    <div className='pg-Principal'>

                        <div className='pag-toda'>

                            <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
                            <input value={produto.trimStart()} onChange={e => setProduto(e.target.value)} className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Linha do produto</label>
                            <input  value={linha.trimStart()} onChange={e => setLinha(e.target.value)} className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Fabricante</label>
                            <input  value={fabricante.trimStart()} onChange={e => setFabricante(e.target.value)} className='Caixa-Texto' type="text" />


                            <div className='section-inputs2'>
                                <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Data de validade </label>
                                        <input value={data} onChange={e => setData(e.target.value)} className='caixa-menor Caixa-Data' type="date" />
                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Volume </label>
                                        <input value={volume} onChange={e => setVolume(e.target.value)} className='caixa-menor number' type="number" />
                                </div>
                                </div>
                                <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Quantidade de Produto</label>
                                        <input value={quantidade} onChange={e => setQuantidade(e.target.value)} className='caixa-menor number' type="number" />
                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Valor </label>
                                        <input value={valor} onChange={e => setValor(e.target.value)} className='caixa-menor number' type="number" min="0" pattern="^\d*(\.\d{0,2})?$" />
                                    </div>
                                </div>
                                <div className='categ-parte'>

                                    <div className="label">
                                        <label className='Titulo-Caixa-Texto'> Categoria </label>
                                        <select>
                                            <option value="Selecione uma opção">Selecione</option>
                                            {categoria.map(item => <option value={item.id}> {item.categoria}</option>)}
                                        </select>
                                    </div>

                                    <div className="label">
                                        <label className='Titulo-Caixa-Texto'> Parte do corpo </label>
                                        <select>
                                            <option value="Selecione uma opção">Selecione</option>
                                            {parteCorpo.map(item => <option value={item.id}>{item.parteCorpo}</option>)} 
                                            
                                        </select>
                                    </div>

                                </div>
                            </div>

                           
                        </div>

                    </div>

                    <div className="pg-lado">
                        <form onSubmit={uploadImage}>
                            <label className='Titulo-Caixa-Texto'>Adicione uma foto</label>
                            {
                                image ?
                                    <img src={window.URL.createObjectURL(image)} alt="imagem" width="250px" height="250px" /> :
                                    <img src="./neblina.png" alt="imagem" width="250px" height="250px" />
                            }
                            <br />
                            <input type='file' name='image' onChange={e => setImage(e.target.files[0])} />
                        </form>

                        <label className='Titulo-Caixa-Texto'>Adicione uma descrição </label>
                        <textarea id="descricao" name="descricao" rows="13" cols="55" />

                        <div className='botao'>
                            <button>Voltar</button>
                            <button>Salvar</button>
                        </div>

                    </div>

                </div>
            </div>
        </main>
    )
}
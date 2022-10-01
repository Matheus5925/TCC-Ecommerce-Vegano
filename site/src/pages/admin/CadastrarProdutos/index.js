import { BuscaCategoria, BuscarParteCorpo, CadastrarProduto } from '../../../api/ProdutoAPI.js'
import { toast,ToastContainer }  from 'react-toastify'
import React, { useState, useEffect } from 'react';
import './index.scss'

import Cabecalho from '../../../components/cabecalho'

export default function CadastrarProdutos() {
    const [produto, setProduto] = useState('');
    const [linha, setLinha] = useState('');
    const [fabricante, setFabricante] = useState('');
    const [data, setData] = useState('');
    const [volume, setVolume] = useState('');
    const [quantidade, setQuantidade] = useState(0);
    const [valor, setValor ] = useState();
    const [descricao, setDescricao] = useState('');
    const [image, setImage] = useState('');
  
    const [idCategoria, setIdCategoria] = useState();
    const [categoria, setCategoria] = useState([]);

    const [idParteCorpo, setIdParteCorpo] = useState();
    const [parteCorpo, setParteCorpo] = useState([]);

    const NovoProduto = _ =>{
        setProduto('');
        setLinha('');
        setFabricante('');
        setData('');
        setVolume(0);
        setQuantidade(0);
        setValor('');
        setDescricao('');
        setCategoria([]);
        setIdParteCorpo([])
    }
    
    const Categoria = async () =>{
        const r = await BuscaCategoria();
        setCategoria(r);
    }

    const ParteDoCorpo = async _ =>{
        const r = await BuscarParteCorpo();
        setParteCorpo(r);
    }

    const Salvar = async () =>{
        try {
            let preco = Number(valor.replace(',', '.'));

            const r = await CadastrarProduto(idCategoria, idParteCorpo, produto, descricao, preco, fabricante, data, volume ,quantidade, linha);
            toast.success('Produto cadastrado com sucesso!');
            NovoProduto();
            
        } catch (err) {
            toast.error(err.response.data.erro)
        };
    };

   

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
            <ToastContainer />
            <Cabecalho />
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
                            <input placeholder='vegana, natural...'  value={linha.trimStart()} onChange={e => setLinha(e.target.value)} className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Fabricante</label>
                            <input placeholder='Gaya, Avon...'  value={fabricante.trimStart()} onChange={e => setFabricante(e.target.value)} className='Caixa-Texto' type="text" />


                            <div className='section-inputs2'>
                                <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Data de validade </label>
                                        <input value={data} onChange={e => setData(e.target.value)} className='caixa-menor Caixa-Data' type="date" />
                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Volume </label>
                                        <input placeholder='50g, 250ml...' value={volume} onChange={e => setVolume(e.target.value)} className='caixa-menor number' type="number" />
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
                                            {categoria.map(item =><option key={item.id} value={item.id}> {item.categoria}</option>)}
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
                        <textarea value={descricao} onChange={e => setDescricao(e.target.value)} id="descricao" name="descricao" rows="13" cols="55" />

                        <div className='botao'>
                            <button>Voltar</button>
                            <button onClick={Salvar}>Salvar</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
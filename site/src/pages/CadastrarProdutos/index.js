
import React, { useState, useEffect } from 'react';
import './index.scss'

import Cabecalho from '../../components/cabecalho'

export default function CadastrarProdutos() {

    const [image, setImage] = useState('');
    const [enderecoImg, setEnderecoImagem] = useState('');

    const [status, setStatus] = useState({
        type: '',
        mensagem: ''
    });

    const uploadImage = async e => {

        e.preventDefault();

        const formData = new FormData();
        formData.append('image', image);

    }



    return (
        <main>

            <Cabecalho />
            <div className='principal'>
                <div className='titulo'>
                    <p>ADICIONAR UM PRODUTO</p>
                </div>
                <div className="container">

                    <div className='pg-Principal'>

                        <div className='pag-toda'>

                            <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
                            <input className='Caixa-Texto' type="text" />
                            <label className='Titulo-Caixa-Texto'>LInha do produto</label>
                            <input className='Caixa-Texto' type="text" />
                            <label className='Titulo-Caixa-Texto'>Fabricante</label>
                            <input className='Caixa-Texto' type="text" />


                            <div className='data-volume'>
                                <div className='label'>
                                    <label className='Titulo-Caixa-Texto'> Data de validade </label>
                                    <input className='Caixa-Data' type="date" />
                                </div>
                                <div className='label'>
                                    <label className='Titulo-Caixa-Texto'> Volume </label>
                                    <input className='Caixa-Texto number' type="number" />
                                </div>
                            </div>
                            <div className='qtd-valor' >
                                <div className='label'>
                                    <label className='Titulo-Caixa-Texto'> Quantidade de Produto</label>
                                    <input className='Caixa-Texto number' type="number" />
                                </div>

                                <div className='label'>
                                    <label className='Titulo-Caixa-Texto'> Valor </label>
                                    <input className='Caixa-Texto number' type="number" min="0" pattern="^\d*(\.\d{0,2})?$" />
                                </div>
                            </div>

                            <div className='categ-parte'>

                                <div className="label">
                                    <label className='Titulo-Caixa-Texto'> Categoria </label>
                                    <select>
                                        <option value="Selecione uma opção"></option>
                                        <option value="categoria_1">1</option>
                                        <option value="categoria_2">2</option>
                                        <option value="categoria_3">3</option>
                                    </select>
                                </div>

                                <div className="label">
                                    <label className='Titulo-Caixa-Texto'> Parte do corpo </label>
                                    <select>
                                        <option value="Selecione uma opção"></option>
                                        <option value="categoria_1">1</option>
                                        <option value="categoria_2">2</option>
                                        <option value="categoria_3">3</option>
                                    </select>
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
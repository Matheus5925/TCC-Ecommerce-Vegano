
import './index.scss'
import CabecalhoAdmin from "../../../components/cabecalho-admin"
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { BuscarId } from '../../../api/ProdutoAPI.js';
import { API_URL } from '../../../api/config';
import { CadastrarOfertas } from '../../../api/admAPI';
import { toast, ToastContainer } from 'react-toastify';


export default function AdicionarOfertas() {
    const [produto, setProduto] = useState({id: 0, categoria: '',parteCorpo: '', nome: '', linha:'', descricao: '', valor: '', fabricante: '', validade: '', quantidade: 0, volume: '', imagem: ''});
    const [NovoPreco, setNovoPreco] = useState('');
    const [erro, setErro] = useState('');

    const {idProdutos} = useParams();
    const navigate = useNavigate();

    const CarregarProduto = async _ =>{
        const r = await BuscarId(idProdutos);
        setProduto({id: r.id, categoria: r.categoria,parteCorpo:r.ParteCorpo, nome:r.nome, linha: r.linha, descricao: r.descricao, valor: r.valor, fabricante: r.fabricante, validade: r.validade, quantidade: r.quantidade, volume: r.volume, imagem: r.imagem});
    };

    const ExibirImagem = imagem =>{
        if(!imagem)
            return 'https://cdn-icons-png.flaticon.com/512/1178/1178428.png';
        else
            return `${API_URL}/${imagem}`;
    }

    const CadastrarOferta = async ()=>{
        try {
            let preco = Number(NovoPreco.replace(',', '.'));

            const r = await CadastrarOfertas(produto.id, preco);
            toast.success('Oferta Cadastrada com sucesso');

        } catch (err) {
            toast(err.response.data.erro);
        }

    }

    useEffect(()=>{
        CarregarProduto();
    },[])

    return(
    <div className='Adicionar-Ofertas'>
        <ToastContainer/>
        <CabecalhoAdmin/>
        <h1 className='Titulo-Adicionar'> ADICIONAR OFERTAS</h1>
        <div className='Linha-Principal'>
            <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
            <input value={produto.nome} placeholder='Mascará de....'  className='Caixa-Texto' type="text" />

            <label className='Titulo-Caixa-Texto'>Linha do produto</label>
            <input value={produto.linha} placeholder='vegana, natural...' className='Caixa-Texto' type="text" />

            <div className='qtd-valor' >
                <div className='label'>
                    <label className='Titulo-Caixa-Texto'> Marca </label>
                    <input value={produto.fabricante} placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />
                </div>
            </div>
            <div className='qtd-valor' >
                <div className='label'>
                    <label className='Titulo-Caixa-Texto'> Categoria </label>
                    <input value={produto.categoria} className='Caixa-Texto1' type="text" />

                </div>

                <div className='label'>
                    <label className='Titulo-Caixa-Texto'>Parte do Corpo </label>
                    <input value={produto.parteCorpo} className='Caixa-Texto1' type="text" />

                </div>

                <div className='label'>
                    <label className='Titulo-Caixa-Texto'> Valor antigo:</label>
                    <input value={produto.valor.replace('.', ',')} className='Caixa-Texto1' type="text" />
                </div>

                <div className='label'>
                    <label className='Titulo-Caixa-Texto'> Valor Atual:</label>
                    <input value={NovoPreco} onChange={e => setNovoPreco(e.target.value)} className='Caixa-Texto1' type="text" />               
                </div>
            </div>

            <div className='Img'>

                {
                    <img className='img-produto' src={ExibirImagem(produto.imagem)}/>
                }
            </div>

            <button onClick={CadastrarOferta} className='Adicionar'>ADICIONAR OFERTA</button>
                            
        </div>               
    </div>
    )
}
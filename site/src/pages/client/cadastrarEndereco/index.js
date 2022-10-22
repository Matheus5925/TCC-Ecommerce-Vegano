import './index.scss';
import {useState, useEffect} from 'react';
import storage from 'local-storage';
import { CadastroEnderecoUsuario } from '../../../api/UsuarioAPI';
import {toast, ToastContainer } from 'react-toastify';
import {confirmAlert} from 'react-confirm-alert';
import { useNavigate } from 'react-router-dom';

export default function CadastrarIndereco() {
    const [cep, setCep] = useState('');
    const [endereco, setEndereco] = useState('');
    const [ptReferencia, setPtReferencia] = useState('');
    const [bairro, setBairro] = useState('');
    const [cidade,setCidade] = useState('');
    const [estado, setEstado] = useState('');
    const [nrCasa, setNrCasa] = useState(0);
    const [usuario, setUsuario] = useState({id: 0, nome: ''});

    const navigate = useNavigate();

    useEffect(() =>{
        if(storage('usuario-logado')){
            const UsuarioLogado = storage('usuario-logado');
            
            setUsuario({id:UsuarioLogado.id, nome:UsuarioLogado.nome});
        }
    });

    const CadastroEndereco = async _ =>{
        try {
            const r = await CadastroEnderecoUsuario(usuario.id, cep, endereco, ptReferencia, bairro, estado, cidade, nrCasa);
            toast.success('Endereço cadastrado com sucesso!');

            setTimeout(()=>{
                ConfirmarServico();
            },2000 )

        } catch (err) {
            toast.error(err.response.data.erro)
        }
    };

    const NovoEndereco = _ =>{
        setCep('');
        setEndereco('');
        setPtReferencia('');
        setBairro('');
        setCidade('');
        setEstado('');
        setNrCasa(0);
    }

    async function ConfirmarServico() {
        confirmAlert({
            title: 'Cadastrar Endereço',
            message: `Você deseja Cadastrar um novo endereço? ${usuario.nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                       NovoEndereco();
                    }
                },
                {
                    label: 'Não',
                    onClick: _ =>{
                        navigate('/infousuario')
                    }
                }
            ]
        })
    }

    
    return(
        <section className='conteiner-1'>
            <ToastContainer/>
            <div className='Fundo-Cadastro-Img'>
                <div className='box-br'>
                    <h2> Cadastrar Endereço </h2>
                    <div className='box-ajustar'>
                        <div className='row'>
                            <div className='coluna'>
                                <label> CEP: </label>
                                <input value={cep} onChange={e => setCep(e.target.value)} type='number' className='inpu'/>
                                
                                <label> Endereço: </label>
                                <input value={endereco} onChange={e => setEndereco(e.target.value)} type='text' className='inpu'/>    
                            </div>
                            <div className='coluna'>
                                <label> Numero: </label>
                                <input value={nrCasa} onChange={e => setNrCasa(e.target.value)}  type='number' className='inpu'/>
                                
                                <label> Bairro: </label>
                                <input value={bairro} onChange={e => setBairro(e.target.value)} type='text' className='inpu'/> 
                            </div>
                        </div>
                        <label> Ponto de referencia: </label>
                        <input value={ptReferencia} onChange={e => setPtReferencia(e.target.value)} type='text' className='caixa-grande'/>
                        <div className='row'>
                            <div className='coluna' >
                                <label>Estado:</label>
                                <input value={estado} onChange={e => setEstado(e.target.value)} type='text' className='inpu'/>
                            </div>
                            <div className='coluna' >
                                <label>Cidade:</label>
                                <input value={cidade} onChange={e => setCidade(e.target.value)} type='text' className='inpu'/>
                            </div>
                        </div>
                    </div>
                    <button className='but'onClick={CadastroEndereco}>Salvar e continuar</button>
                </div>
            </div>
        </section>
    )
}
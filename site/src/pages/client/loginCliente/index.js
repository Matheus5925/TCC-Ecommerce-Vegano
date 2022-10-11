import { LoginUsuario } from '../../../api/UsuarioAPI.js';
import { useState, useEffect, useRef } from 'react'
import storage from 'local-storage';
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import './index.scss'

export default function LoginCliente() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [erro, setErro] = useState('');
    const [carregamento, setCarregamento] = useState(false)

    const navigate = useNavigate();
    const ref = useRef();

    useEffect(() => {
        storage.remove('usuario-logado');
    }, []);

    useEffect(() => {
        if (storage('usuario-logado'));
        navigate('/logincliente')
    }, []);

    const LoginCliente = async () => {
        ref.current.continuousStart();
        setCarregamento(true);

        try {
            const resposta = await LoginUsuario(email, senha);
            storage('usuario-logado', resposta);
            setTimeout(() => {
                navigate('/');
            }, 3000);

        } catch (err) {
            ref.current.complete();
            setCarregamento(false);

            if (err.response.status === 401)
                setErro(err.response.data.erro);
        }
    }


    return (
        <main className='Principal'>
            <LoadingBar color='#f11946' ref={ref} />
            <div className='imgFundo'>
                <div className='Fundo-Cliente'>
                    <div className='Titulo-Principal'>
                        <h2>Faça Seu Login</h2>
                    </div>
                    <p className='erro'>{erro}</p>
                    <div className='Formulario1'>
                        <label className='Titulo-Caixa-Texto1'>E-MAIL</label>
                        <input value={email} onChange={e => setEmail(e.target.value)} className='Caixa-Texto1' type="text" />
                    </div>
                    <div className='Formulario2'>
                        <label className='Titulo-Caixa-Texto2'>SENHA</label>
                        <input value={senha} onChange={e => setSenha(e.target.value)} className='Caixa-Texto2' type='password' />
                    </div>
                    <div className='botoes'>
                        <div className='Botao2'>
                            <button className='Botao2' onClick={LoginCliente}>CRIAR CONTA</button>
                        </div>
                        <div className='Botao'>
                            <button className='Botao1' onClick={LoginCliente}>ENTRAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
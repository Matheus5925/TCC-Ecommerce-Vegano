import './index.scss'

import CabecalhoUser from '../../../components/cabecalho-user'
import { useEffect, useState } from 'react'
import Storage from 'local-storage';
import { ComentarUmDepoimento } from '../../../api/UsuarioAPI';
import { toast, ToastContainer } from 'react-toastify';

export default function Depoimentos () {
    const [Usuario, setUsuario] = useState({id: 0, nome:''});
    const [positiva, setPositiva] = useState(false);
    const [negativa, setNegativa] = useState(false);
    const [avaliacao, setAvaliacao] = useState('');
    const [comentario, setComentario] = useState('');

        const BuscarStorage = _ =>{
            if(Storage('usuario-logado')){
                const User = Storage('usuario-logado')
                setUsuario({id:User.id, nome:User.nome})
            }
        }

        const BuscarAvaliacao = () =>{
            if(positiva === true)
                setNegativa(false);
            if(negativa === true)
                setPositiva(false);

            if(positiva === true)
                setAvaliacao('Positiva');
            else if(negativa === true)
                setAvaliacao('Negativa');
        }

        async function Comentar(){
            try {
                const r = await ComentarUmDepoimento(Usuario.id, avaliacao, comentario);
                toast.success('Depoimento cadastrado com sucesso')
            } catch (err) {
                if (err.response.status === 400)
                    toast.error(`❌ ${err.response.data.erro}`);
            }
        }

    useEffect(()=>{


        BuscarStorage();
    }, [])

    useEffect(()=>{
        BuscarAvaliacao();
    },[positiva])

    useEffect(()=>{
        BuscarAvaliacao();
    },[negativa])
    return(
        <main className='depoimento'>
            <ToastContainer/>
            <CabecalhoUser/>
            <h2 className='titles'> DEIXE SEU DEPOIMENTOS SOBRE NÓS </h2>
            <section className='escrita'>
                <label className='NM'> Nome: </label>
                <h1>{Usuario.nome}</h1>
                <label> Avaliação:</label> 
                <div className='A'>
                   
                    <label className='check'> 
                        <input value={positiva} onChange={e => setPositiva(e.target.checked)} type="checkbox"/> 
                        <span></span>
                        <p>Positiva</p>
                    </label>
                    <label className='check'>
                        <input value={negativa} onChange={e => setNegativa(e.target.checked)} type="checkbox"/>
                        <span></span>  
                        <p>Negativa</p>
                    </label> 
                </div>
                <label className='Dep'> Depoimento: </label>
                <textarea value={comentario}  onChange={e => setComentario(e.target.value)} className='D' type="text" placeholder= 'escreva aqui o seu depoimento...'/>
            </section>
            <div className='Bt'>
                <button className='botD'onClick={Comentar}> Enviar </button>
            </div>
           
        </main>
    )
}
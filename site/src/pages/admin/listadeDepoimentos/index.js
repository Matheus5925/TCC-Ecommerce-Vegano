
import './index.scss'
import CabecalhoAdmin from '../../../components/cabecalho-admin';
import Depoimentos from '../../../assets/images/depoimentos.png';
import { ListarDepoimentos } from '../../../api/UsuarioAPI';
import { useState, useEffect } from 'react';
import { ExcluirDepoimentos } from '../../../api/admAPI';
import {confirmAlert} from 'react-confirm-alert';
import {toast, ToastContainer} from 'react-toastify'

export default function ListadeDepoimentos() {
    const [depoimentos, setDepoimentos] = useState([]);

    const MostrarDepoimentos = async  _ =>{
        const resposta = await ListarDepoimentos();
        setDepoimentos(resposta);
    }

    const ExcluirComentario = async function (id,nome) {
        confirmAlert({
            title: 'Remover Depoimento',
            message: `Deseja mesmo remover o Depoimento ${nome}?`,
            buttons: [
                {
                    label: 'Sim',
                    onClick: async () => {
                        const resposta = await ExcluirDepoimentos(id);
                        
                        MostrarDepoimentos();
                        toast.dark('Comentario removido ✅');
                    }
                },
                {
                    label: 'Não'
                }
            ]
        })
    }
  
    useEffect(()=>{
      MostrarDepoimentos();
    },[]);

    return(
        <div className='Principal-Depoimentos'>
            <ToastContainer/>
            <CabecalhoAdmin/>
            <div className='title-depoimento'>
                    <h1>Depoimentos dos Clientes</h1>
                </div>
            <section className='ajustes'>
                {depoimentos.map(item => <div key={item.id} className='card-depoimentos'>
                    <div className='img-nome'>
                        <img className='img-cliente' src={Depoimentos} alt="" />
                        <p className='nome-cliente'>{item.nome}</p>
                        <p>{item.data.substring(0,10)}</p>
                    </div>
                    <div className='avaliacao-depoimento'>
                        <p className='Avaliacao-cliente'>{item.avalicao}</p>
                        <div className='barra-depoimento'>
                            <p className='depoimento-cliente'>{item.comentario}</p>
                        </div>
                    </div>
                    <div className='btn'>
                        <button onClick={e => {e.stopPropagation(); ExcluirComentario(item.id, item.nome)}}> Excluir </button>
                    </div>
                </div>)}
            </section>
        </div>
    )
}
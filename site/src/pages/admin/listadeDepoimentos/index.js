
import './index.scss'
import CabecalhoAdmin from '../../../components/cabecalho-admin';
import Depoimentos from '../../../assets/images/depoimentos.png';
import { ListarDepoimentos } from '../../../api/UsuarioAPI';
import { useState, useEffect } from 'react';

export default function ListadeDepoimentos() {
    const [depoimentos, setDepoimentos] = useState([]);

    const MostrarDepoimentos = async  _ =>{
        const resposta = await ListarDepoimentos();
        setDepoimentos(resposta);
    }
  
    useEffect(()=>{
      MostrarDepoimentos();
    },[]);

    return(
        <div className='Principal-Depoimentos'>
            <CabecalhoAdmin/>
            <div className='title-depoimento'>
                    <h1>Depoimentos dos Clientes</h1>
                </div>
            <section className='ajustes'>
                {depoimentos.map(item => <div className='card-depoimentos'>
                    <div className='img-nome'>
                        <img className='img-cliente' src={Depoimentos} alt="" />
                        <p className='nome-cliente'>{item.nome}</p>
                    </div>
                    <div className='avaliacao-depoimento'>
                        <p className='Avaliacao-cliente'>{item.avalicao}</p>
                        <div className='barra-depoimento'>
                            <p className='depoimento-cliente'>{item.comentario}</p>
                        </div>
                    </div>
                    <div className='btn'>
                        <button> Excluir </button>
                    </div>
                </div>)}
            </section>
        </div>
    )
}
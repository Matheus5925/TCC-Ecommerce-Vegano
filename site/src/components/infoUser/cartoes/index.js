import './index.scss';
import {useEffect, useState} from 'react';
import CardCartao from './card';
import AdicionarCartao from '../../../assets/images/adicionar-user.png'
import {Link} from 'react-router-dom'
import { PegarCartoesUsuario } from '../../../api/UsuarioAPI';
import storage from 'local-storage';

const TelaCartao = props =>{
    const [cardCartao, setCardCartao] = useState([]);


    async function Cartoes() {
        if(storage('usuario-logado')){
            let Usuario = storage('usuario-logado');
            
            const r = await PegarCartoesUsuario(Usuario.id);
            setCardCartao(r);
        }
    }

    useEffect(()=>{
        Cartoes();
    },[])

    return(
        <section className='principal-cartao'>
                <div className='Tela-principal-Cartao'>
                    <div className='titulo-card'>
                        <div className='titulo'>
                            <h1>Seus Cartões</h1>
                            <hr className='linha'/>
                        </div>
                        <div className='card'>
                            {cardCartao.map(item => <CardCartao item={item}/>)}
                        </div>
                    </div>
                    <Link to='/cadastrarCartao' className='button-add'>
                        <img className='adicionar-cartao' src={AdicionarCartao} alt="" />
                    </Link>
                </div>
        </section>
    );

}

export default TelaCartao;
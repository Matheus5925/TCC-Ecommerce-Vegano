import './index.scss';
import {useState, useEffect} from 'react';
import AdicionarCartao from '../../../assets/images/adicionar-user.png'
import CardEndereco from './card';
import { ListarEnderecos } from '../../../api/UsuarioAPI';
import Storage from 'local-storage';
import {Link} from 'react-router-dom'

const TelaEndereco = props =>{
    const [enderecos, setEnderecos] = useState([]);


    async function MostrarEnderecos() {
        if(Storage('usuario-logado')){
            let idUsuario = Storage('usuario-logado').id;
            const r = await ListarEnderecos(idUsuario);
            setEnderecos(r);
        }
      
    }

    useEffect(()=>{
       MostrarEnderecos();
    },[]);
   

    return(
        <section className='principal-endereco'>
                <div className='Tela-principal-endereco'>
                    <div className='titulo-endereco'>
                        <div className='titulo'>
                            <h1>Seus Endereços</h1>
                            <hr className='linha'/>
                        </div>
                        <div className='card'>
                            {enderecos.map(item => <CardEndereco item={item}/>)}
                        </div>
                    </div>
                    <Link to='/cadastroindereco' className='button-add'>
                        <img className='adicionar-endereco' src={AdicionarCartao} alt="" />
                    </Link>
                </div>
        </section>
    );

}

export default TelaEndereco;
import './index.scss';
import iconeUsuario from '../../../assets/images/icone-usuario.png'

const InicioInfoUser = props =>{

    return(
        <div className='ajuste'>
            <div className='caixa-principal'>
                <img src={iconeUsuario} />
                <div className='titulo-nome'>
                    <h1>{props.nome ? props.nome : 'Seja bem-vindo!'}</h1>
                </div>
                <hr/>
                <div className='caixa-3'>
                    <div className='caixa-2' >
                        <label> E-mail: </label>
                        <div type="texto" className='inpu' >
                            <p>{props.email}</p>
                        </div>
                        <label> Telefone: </label>
                        <div className='inpu'>
                            <p>{props.telefone}</p>
                        </div>
                    </div>
                    <div className='caixa-2'>
                        <label> CPF: </label>
                        <div className='inpu'>
                            <p>{props.cpf}</p>
                        </div>
                        <label> Data de nacimento: </label>
                        <div type="texto" className='inpu'>
                            <p>{props.nascimento}</p>
                        </div>
                </div>
            </div>
            
        </div>
    </div>
    );
}

export default InicioInfoUser;
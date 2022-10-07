
import CabecalhoLateral from '../../../components/cabecalho-lateral'

import './index.scss'

export default function InfoUsuario() {

    return (
        <section className='box-1'>
            < CabecalhoLateral />
            <div>
                <div className='ajuste'>
                    <img />
                    <div>
                        <p>Bem-vindo!</p>
                    </div>
                    <hr />
                    <div>
                    <label> Nome: </label>
                    <input type="texto" className='caixa-1' />
                    </div>
                    <div className='caixa-3'>
                        <div className='caixa-2' >
                            <label> Sobrenome: </label>
                            <input type="texto" />
                            <label> Telefone: </label>
                            <input type="texto" />
                        </div>
                        <div className='caixa-2'>
                            <label> CPF: </label>
                            <input type="texto" />
                            <label> Data de nacimento: </label>
                            <input type="texto" />
                        </div>
                    </div>
                    <div>
                    <label> E-mail: </label>
                    <input type="texto" className='caixa-1' />
                    </div>
                </div>
            </div>
        </section>
    )
}
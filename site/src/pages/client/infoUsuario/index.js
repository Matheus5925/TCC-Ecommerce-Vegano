
import CabecalhoLateral from '../../../components/cabecalho-lateral'

import './index.scss'

export default function InfoUsuario() {

    return (
        <section className='box-1'>
            < CabecalhoLateral />
            <div>
                <img />
                <div>
                    <p>Bem-vindo!</p>
                </div>
                <hr />
                <label> Nome: </label>
                <input type="texto" className='caixa-1' />
                <div>
                    <div>
                        <label> Sobrenome: </label>
                        <input type="texto" />
                        <label> Telefone: </label>
                        <input type="texto" />
                    </div>
                    <div>
                        <label> CPF: </label>
                        <input type="texto" />
                        <label> Data de nacimento: </label>
                        <input type="texto" />
                    </div>
                </div>
                <label> E-mail: </label>
                <input type="texto" />
            </div>
        </section>
    )
}
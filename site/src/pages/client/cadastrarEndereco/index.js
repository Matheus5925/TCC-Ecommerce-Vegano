import './index.scss'

export default function CadastrarIndereco() {

    return(
        <section className='conteiner-1'>
            <div className='Fundo-Cadastro-Img'>
                <div className='box-br'>
                    <h2> CADASTRAR ENDEREÇO </h2>
                    <div className='box-ajustar'>
                        <div className='row'>
                            <div className='coluna'>
                                <label> CEP: </label>
                                <input type='number' className='inpu'/>
                                
                                <label> Complemento: </label>
                                <input type='text' className='inpu'/>    
                            </div>
                            <div className='coluna'>
                                <label> Numero: </label>
                                <input type='number' className='inpu'/>
                                
                                <label> Bairro: </label>
                                <input type='text' className='inpu'/> 
                            </div>
                        </div>
                        <label> Ponto de referencia: </label>
                        <input type='text' className='caixa-grande'/>
                        <div className='row'>
                            <div className='coluna' >
                                <label>Estado:</label>
                                <input type='text' className='inpu'/>
                            </div>
                            <div className='coluna' >
                                <label>Cidade:</label>
                                <input type='text' className='inpu'/>
                            </div>
                        </div>
                    </div>
                    <button>Salvar e continuar</button>
                </div>
            </div>
        </section>
    )
}
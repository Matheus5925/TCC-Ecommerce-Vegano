
import './index.scss'
import CabecalhoAdmin from "../../../components/cabecalho-admin"


export default function AdicionarOfertas() {
    return(
       <div className='Adicionar-Ofertas'>
        <CabecalhoAdmin/>
         <h1 className='Titulo-Adicionar'> ADICIONAR OFERTAS:</h1>
   <hr className='Linha-Principal'></hr>
     
   <label className='Titulo-Caixa-Texto'>Nome do Produto</label>
                            <input placeholder='Mascará de....'  className='Caixa-Texto' type="text" />

                            <label className='Titulo-Caixa-Texto'>Linha do produto</label>
                            <input placeholder='vegana, natural...' className='Caixa-Texto' type="text" />

                            <div className='qtd-valor' >
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Marca </label>
                                        <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />

                                    </div>
                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> qtd.Produto </label>
                                        <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />

                                    </div>
                                </div>

                                <div className="label">
                                        <label className='Titulo-Caixa-Texto'> Categoria </label>
                                        <select>
                                            <option value="Selecione uma opção">Selecione</option>
                                            <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />

                                        </select>

                                        <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Parte do Corpo </label>
                                        <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />
                                    </div>

                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Valor antigo: </label>
                                        <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />

                                    </div>

                                    <div className='label'>
                                        <label className='Titulo-Caixa-Texto'> Valor atual: </label>
                                        <input placeholder='Gaya, Avon...'className='Caixa-Texto1' type="text" />
                                        
                                    </div>
                                    </div>

                                    <div>
                            <label className='Titulo-Caixa-Texto'>Adicione uma foto</label>
                            {
                                
                                <img src="./neblina.png" alt="imagem" width="250px" height="250px" />
                            }

                            {
                                <img />
                            }
                          
                            
                        </div>

     
                          
    </div>

   

    
    )
}
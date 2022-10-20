
import './index.scss'
import CabecalhoAdmin from "../../../components/cabecalho-admin"


export default function AdicionarOfertas() {
    return(
       <div className='Adicionar-Ofertas'>
        <CabecalhoAdmin/>
         <h1 className='Titulo-Adicionar'> ADICIONAR OFERTAS:</h1>
   <hr className='Linha-Principal'></hr>

   <div className='Container-Adicionar'>

     <label className='Mini-Titulo'>NOME DO PRODUTO:</label>
     <input className='Input1'></input>

     <label className='Mini2'>LINHA DO PRODUTO:</label>
     <input className='Input2'></input>

 <div className='Row'>
     <label className='Mini3'>MARCA:</label>
     <input className='Input3'></input>
     <label className='Mini3'>QTD. PRODUTOS:</label>
     <input className='Input3'></input>
 </div>

     <div className='Row2'>
     <label className='Mini5'>CATEGORIA:</label>
     <input className='Input5'></input>

     <label className='Mini5'>PARTES DO CORPO:</label>
     <input className='Input5'></input>

     <label className='Mini5'>VALOR ANTIGO:</label>
     <input className='Input5'></input>

     <label className='Mini5'>VALOR ATUAL:</label>
     <input className='Input5'></input>

     </div>

     <div className='Image'>
    <label className='Imagem'>ADICIONE UMA FOTO</label>
     </div>
    
     </div>

       </div>
    )
}
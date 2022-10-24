import './index.scss'

import CabecalhoUser from '../../../components/cabecalho-user'


export default function Depoimentos () {

    return(
        <main className='depoimento'>
            <CabecalhoUser/>
            <h2 className='titles'> DEIXE SEU DEPOIMENTOS SOBRE NÓS </h2>
            <section className='escrita'>
                <label className='NM'> Nome: </label>
                <input className='N' type="text"/>
                <label> Avaliação:</label> 
                <div className='A'>
                    <input type="Radio" />
                    <label> Positiva </label> 
                    <input type="Radio" />
                    <label> Negativa </label> 
                </div>
                <label className='Dep'> Depoimento: </label>
                <input className='D' type="text" placeholder= 'escreva aqui o seu depoimento...'/>
            </section>
            <div className='Bt'>
                <button className='botD'onClick={Depoimentos}> Enviar </button>
            </div>
            

           
        </main>
    )
}
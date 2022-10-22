import './index.scss'

import img30 from '../../assets/images/image 30.png'

export default function Caixa_Pedido () {

    return(
        <div className='caixinha'>

            <img src={img30} alt=''/>
            <p>Selagem Vegana Marroquina 1L Tigo Cosméticos</p>
            <h1 className='itens'>R$ 180,00</h1>
            <h1 className='itens'>A CAMINHO</h1>

        </div>
    )
}
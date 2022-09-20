import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AdminLogin from './pages/loginAdmin/index.js'
import CadastrarProdutos  from './pages/CadastrarProdutos/index.js';

const Rotas = () =>{
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminLogin/>}></Route>
            <Route path='/cadastrarprodutos' element={<CadastrarProdutos/>}/> 
        </Routes>
    </BrowserRouter>
}

export default Rotas;
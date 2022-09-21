import {BrowserRouter, Routes, Route} from 'react-router-dom';


import AdminLogin from './pages/loginAdmin';
import CadastrarProdutos  from './pages/CadastrarProdutos';

const Rotas = () =>{
    return(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<AdminLogin/>}></Route>
            <Route path='/cadastrarprodutos' element={<CadastrarProdutos/>}/> 
        </Routes>
    </BrowserRouter>
    );
};

export default Rotas;
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LadinPage from './pages/ladinPage';
import LoginCliente from './pages/loginCliente';
import AdminLogin from './pages/loginAdmin';
import CadastrarProdutos  from './pages/CadastrarProdutos';
import TelaCadastro from './pages/TelaCadastro'

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />}></Route>
                <Route path='/lading' element={<LadinPage />}></Route>
                <Route path='/logincliente' element={<LoginCliente/>}></Route>
                <Route path='/cadastrarprodutos' element={<CadastrarProdutos />}></Route> 
                <Route path='/cadastrousuario' element={<TelaCadastro />}></Route>
            </Routes>
                
        </BrowserRouter>
    );
};

export default Rotas;
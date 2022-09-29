import {BrowserRouter, Routes, Route} from 'react-router-dom';

import LadinPage from './pages/home';
import LoginCliente from './pages/client/loginCliente';
import AdminLogin from './pages/admin/loginAdmin';
import CadastrarProdutos  from './pages/admin/CadastrarProdutos';
import TelaCadastro from './pages/client/TelaCadastroCliente'
import { PageSelection } from './pages/admin/selecaoSistem';

const Rotas = () =>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />}></Route>
                <Route path='/lading' element={<LadinPage />}></Route>
                <Route path='/logincliente' element={<LoginCliente/>}></Route>
                <Route path='/cadastrarprodutos' element={<CadastrarProdutos />}></Route> 
                <Route path='/cadastrousuario' element={<TelaCadastro />}></Route>
                <Route path='/paginaselecao' element={<PageSelection/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
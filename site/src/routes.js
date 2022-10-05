import { BrowserRouter, Routes, Route } from 'react-router-dom';

import InfoUsuario from './pages/client/infoUsuario'
import TelaProdutos from './pages/client/telaProdutos';
import PedidosPendents from './pages/admin/pedidospendents'
import Estoque from './pages/admin/estoque';
import HistoricoCompras from './pages/admin/historicoCompras';
import LadinPage from './pages/home';
import LoginCliente from './pages/client/loginCliente';
import AdminLogin from './pages/admin/loginAdmin';
import CadastrarProdutos from './pages/admin/CadastrarProdutos';
import TelaCadastroCliente from './pages/client/TelaCadastroCliente'
import { PageSelection } from './pages/admin/selecaoSistem';

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<AdminLogin />}></Route>
                <Route path='/landing' element={<LadinPage />}></Route>
                <Route path='/logincliente' element={<LoginCliente />}></Route>
                <Route path='/cadastrarprodutos' element={<CadastrarProdutos />}></Route>
                <Route path='/cadastrousuario' element={<TelaCadastroCliente />}></Route>
                <Route path='/paginaselecao' element={<PageSelection />} />
                <Route path='/historicocompras' element={<HistoricoCompras />} />
                <Route path='/estoque' element={<Estoque />} />
                <Route path='/pedidospedents' element={<PedidosPendents />} />
                <Route path='/telaprodutos' element={<TelaProdutos/>}></Route>
                <Route path='/cadastrarprodutos/alterar/:idParams' element={<CadastrarProdutos/>}/>
                <Route path='/infousuario' element={<InfoUsuario/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
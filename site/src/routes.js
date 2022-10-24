import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AdicionarOfertas from './pages/admin/adicionarOfertas';
import ListadeDepoimentos from './pages/admin/listadeDepoimentos';
import CadastrarIndereco from './pages/client/cadastrarEndereco';
import InfoUsuario from './pages/client/infoUsuario';
import TelaProdutos from './pages/client/telaProdutos';
import PedidosPendents from './pages/admin/pedidospendents'
import Estoque from './pages/admin/estoque';
import HistoricoCompras from './pages/admin/historicoCompras';
import LadinPage from './pages/home';
import LoginCliente from './pages/client/loginCliente';
import AdminLogin from './pages/admin/loginAdmin';
import CadastrarProdutos from './pages/admin/CadastrarProdutos';
import TelaCadastroCliente from './pages/client/TelaCadastroCliente';
import Carrinho from './pages/client/carrinho';
import CadastrarCartao from './pages/client/cadastrarCartao';
import { PageSelection } from './pages/admin/selecaoSistem';
import DetalhesProduto from './pages/client/infoProdutos';
import TelaOfertas from './pages/client/TelaOfertas';
import ConteudoCard from './components/cabecalho-lateral/cartoes';
import MeusPedidos from  './pages/client/meusPedidos'
import Depoimentos from './pages/client/depoimentos';
import QuemSomos from './pages/client/QuemSomos';
import Pagamento from './pages/client/pagamento'

const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/loginAdm' element={<AdminLogin />}></Route>
                <Route path='/' element={<LadinPage />}></Route>
                <Route path='/logincliente' element={<LoginCliente />}></Route>
                <Route path='/cadastrarprodutos' element={<CadastrarProdutos />}></Route>
                <Route path='/cadastrousuario' element={<TelaCadastroCliente />}></Route>
                <Route path='/paginaselecao' element={<PageSelection />} />
                <Route path='/historicocompras' element={<HistoricoCompras />} />
                <Route path='/estoque' element={<Estoque />} />
                <Route path='/pedidospedents' element={<PedidosPendents />} />
                <Route path='/telaprodutos' element={<TelaProdutos/>}></Route>
                <Route path='/infousuario' element={<InfoUsuario/>}></Route>
                <Route path='/cadastroindereco' element={<CadastrarIndereco/>}></Route>
                <Route path='/carrinho' element={<Carrinho/>}></Route>
                <Route path='/cadastrarCartao' element={<CadastrarCartao/>}></Route>
                <Route path='/cadastrarprodutos/alterar/:idParams' element={<CadastrarProdutos/>}/>
                <Route path='/detalhes/produto/:idParams' element={<DetalhesProduto/>} />
                <Route path='/telaOfertas' element={<TelaOfertas/>}/>
                <Route  path='/teste' element={<ConteudoCard/>}/>
                <Route path='/listadedepoimentos' element={<ListadeDepoimentos/>}/>
                <Route path='/adicionarofertas' element={<AdicionarOfertas/>}/>
                <Route path='/meusPedidos' element={<MeusPedidos/>}/>
                <Route path='/depoimentos' element={<Depoimentos/>}/>
                <Route path='/quemSomos' element={<QuemSomos/>}/>
                <Route path='/pagamento' element={<Pagamento/>}></Route>
            </Routes>
        </BrowserRouter>
    );
};

export default Rotas;
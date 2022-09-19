import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
<<<<<<< HEAD
import Rotas from './routes';
=======
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/loginAdmin';
import CadastrarProdutos from './pages/CadastrarProdutos';
>>>>>>> 2270dfb04b347ab39a5ba6c48c817b5f7cb1fc70


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    <Rotas/>
  </React.StrictMode>
);


=======
  <BrowserRouter>
  <Routes>
     
     
    <Route  path='/' element={<AdminLogin/>}/>
    <Route path='/cadastrarprodutos' element={<CadastrarProdutos/>}/> 
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);

>>>>>>> 2270dfb04b347ab39a5ba6c48c817b5f7cb1fc70

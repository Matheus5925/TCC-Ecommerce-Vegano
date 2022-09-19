import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import AdminLogin from './pages/loginAdmin';
import CadastrarProdutos from './pages/CadastrarProdutos';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <BrowserRouter>
  <Routes>
     
     
    <Route  path='/' element={<AdminLogin/>}/>
    <Route path='/cadastrarprodutos' element={<CadastrarProdutos/>}/> 
  </Routes>
  </BrowserRouter>
  </React.StrictMode>
);


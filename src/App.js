import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu.jsx';
import React from 'react';
import './App.css';
import './reset.css'; 

import Teste from './components/Teste/Teste';
import Home from './components/Home/Home';
import Compras from './components/Compras/Compras';
import Clientes from './components/Clientes/Clientes';
import Produtos from './components/Produtos/Produtos';
import Fornecedores from './components/Fornecedores/Fornecedores';
import Pedidos from './components/Pedidos/Pedidos';
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="article">
        <Route component={Home} path="/" exact/>
        <Route component={Teste} path="/teste" />
        <Route component={Compras} path="/compras" />
        <Route component={Clientes} path="/clientes" />
        <Route component={Produtos} path="/produtos" />
        <Route component={Fornecedores} path="/fornecedores" />
        <Route component={Pedidos} path="/Pedidos" />
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

import React from "react";
import { Route, BrowserRouter } from "react-router-dom"

import Header from './../Header/Header.jsx';
import Home from './../Home/Home';
import Compras from './../Compras/Compras';
import Clientes from './../Clientes/Clientes';
import Produtos from './../Produtos/Produtos';
import Fornecedores from './../Fornecedores/Fornecedores';
import Pedidos from './../Pedidos/Pedidos';
import Container from './../Container/Container.jsx';
import Footer from './../Footer/Footer';

const Routes = () => {
   return(
    <BrowserRouter>
    <Header />
    <Container>
    <Route component={Home} path="/home" exact/>
    <Route component={Compras} path="/compras" />
    <Route component={Clientes} path="/clientes" />
    <Route component={Produtos} path="/produtos" />
    <Route component={Fornecedores} path="/fornecedores" />
    <Route component={Pedidos} path="/Pedidos" />
    </Container>
    <Footer />
  </BrowserRouter>
   )
}

export default Routes;
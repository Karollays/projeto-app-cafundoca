import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import Home from './../../pages/Home/Home';
import Compras from './../../pages/Compras/Compras';
import Clientes from './../../pages/Clientes/Clientes';
import Produtos from './../../pages/Produtos/Produtos';
import Fornecedores from './../../pages/Fornecedores/Fornecedores';
import Pedidos from './../../pages/Pedidos/Pedidos';
import Login from './../../pages/Login/Login';

const Routes = () => {
  return (
    <BrowserRouter>
      <Route component={Login} path="/" exact />
      <Switch>
        <Route component={Home} path="/home" />
        <Route component={Compras} path="/compras" />
        <Route component={Clientes} path="/clientes" />
        <Route component={Produtos} path="/produtos" />
        <Route component={Fornecedores} path="/fornecedores" />
        <Route component={Pedidos} path="/pedidos" />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

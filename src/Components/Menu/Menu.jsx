import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <Link to="/" className="btn">
          <Button texto="Home"></Button>
        </Link>
        <Link to="/teste" className="btn">
          <Button texto="Teste"></Button>
        </Link>
        <Link to="/Compras" className="btn">
          <Button texto="Compras"></Button>
        </Link>
        <Link to="/Clientes" className="btn">
          <Button texto="Clientes"></Button>
        </Link>
        <Link to="/Produtos" className="btn">
          <Button texto="Produtos"></Button>
        </Link>
        <Link to="/Fornecedores" className="btn">
          <Button texto="Fornecedores"></Button>
        </Link>
        <Link to="/Pedidos" className="btn">
          <Button texto="Pedidos"></Button>
        </Link>
      </ul>
    </div>
  );
}
export default Menu;

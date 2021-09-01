import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <Link to="/" className="btn">
        <li><Button texto="Home"></Button></li>
        </Link>
        <Link to="/login" className="btn">
        <li><Button texto="Teste"></Button></li>
        </Link>
        <Link to="/Compras" className="btn">
        <li><Button texto="Compras"></Button></li>
        </Link>
        <Link to="/Clientes" className="btn">
          <li><Button texto="Clientes"></Button></li>
        </Link>
        <Link to="/Produtos" className="btn">
        <li><Button texto="Produtos"></Button></li>
        </Link>
        <Link to="/Fornecedores" className="btn">
        <li><Button texto="Fornecedores"></Button></li>
        </Link>
        <Link to="/Pedidos" className="btn">
        <li><Button texto="Pedidos"></Button></li>
        </Link>
      </ul>
    </div>
  );
}
export default Menu;

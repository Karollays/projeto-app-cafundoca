import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import './Menu.css';

function Menu() {
  return (
    <div className="menu">
      <ul>
        <Link to="/home" className="btn">
          <li>
            <Button texto="Home"></Button>
          </li>
        </Link>
        <Link to="/compras" className="btn">
          <li>
            <Button texto="Compras"></Button>
          </li>
        </Link>
        <Link to="/clientes" className="btn">
          <li>
            <Button texto="Clientes"></Button>
          </li>
        </Link>
        <Link to="/produtos" className="btn">
          <li>
            <Button texto="Produtos"></Button>
          </li>
        </Link>
        <Link to="/fornecedores" className="btn">
          <li>
            <Button texto="Fornecedores"></Button>
          </li>
        </Link>
        <Link to="/pedidos" className="btn">
          <li>
            <Button texto="Pedidos"></Button>
          </li>
        </Link>
      </ul>
    </div>
  );
}
export default Menu;

import React from 'react'; 
import Button from '../Button/Button';
import './Menu.css'

function Menu() {
     return (
         <div className="menu">
     <ul>
         <Button texto="Login" ></Button>
         <Button texto="Compras" ></Button>
         <Button texto="Clientes" ></Button>
         <Button texto="Produtos" ></Button>
         <Button texto="Fornecedores" ></Button>
         <Button texto="Pedidos" ></Button>
     
     </ul>
     </div>

     
     );
}
export default Menu;
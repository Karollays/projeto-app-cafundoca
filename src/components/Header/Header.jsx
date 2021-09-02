import React from 'react';
import './Header.css';
import Logo from './../Logo/Logo.jsx';
import Menu from './../Menu/Menu';
function Header() {
  return (
    <div className="header-content">
      <Logo width="100px" height="6rem" />
      <Menu />
    </div>
  );
}

export default Header;

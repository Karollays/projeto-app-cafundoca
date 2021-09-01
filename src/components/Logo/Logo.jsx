import React, {} from 'react';
import './Logo.css'
import logoCafundoca from './../../rest/logo-cafundoca.png'
const Logo = (props) => {
  const width = props.width || '100%';
  return ( 
    <div className="logo-cafundoca">
      <img width={width} src={logoCafundoca} alt="Logo Restaurante" />
    </div>
   );
}
 
export default Logo;
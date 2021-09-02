import React from 'react';
import './Footer.css';
import { FaWhatsapp } from 'react-icons/fa';
import { FiInstagram } from 'react-icons/fi';
import { FiFacebook } from 'react-icons/fi';

function Footer() {
  return (
    <div className="footer">
      <>&copy; Since 2021 </>
      <FaWhatsapp size={35} style={{ margin: 8 }} color= "#f39200" />
      <FiInstagram size={35} style={{ margin: 8 }} color= "#f39200" />
      <FiFacebook size={35} style={{ margin: 8 }} color= "#f39200" />
    </div>
  );
}
export default Footer;

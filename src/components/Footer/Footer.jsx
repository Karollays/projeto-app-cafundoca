import React from 'react';
import './Footer.css';
import { GrLinkedin } from 'react-icons/gr';
import { FiInstagram } from 'react-icons/fi';
import { FaFacebookSquare } from 'react-icons/fa';

function Footer() {
  return (
    <div className="footer">
      <h4>&copy; Since 2018</h4>
      <GrLinkedin size={35} style={{ margin: 8 }} />
      <FiInstagram size={35} style={{ margin: 8 }} />
      <FaFacebookSquare size={35} style={{ margin: 8 }} />
    </div>
  );
}
export default Footer;

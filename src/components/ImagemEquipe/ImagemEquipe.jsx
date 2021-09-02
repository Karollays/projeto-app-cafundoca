import React from 'react';
import './ImagemEquipe.css';
// import { GrLinkedin } from 'react-icons/fi';
// import { FaGithub } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
export default function ImagemEquipe(props) {
  const { name, imgFirst, imgMeme } = props;
  return (
    <div className="imageEquipeContainer">
      <img className="imgFirst" src={imgFirst} alt="" />
      <img className="imgMeme" src={imgMeme} alt="" />
      <h3 style={{ color: '#3b1151' }}>{name}</h3>
      {/* <span className="redes">
        <Link to="google.com.br">
          <GrLinkedin size={35} style={{ margin: 8 }} />
        </Link>
        <Link to="google.com.br">
          <FaGithub size={35} style={{ margin: 8 }} />
        </Link>
      </span> */}
    </div>
  );
}

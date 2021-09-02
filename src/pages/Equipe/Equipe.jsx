import React from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImagemEquipe from '../../components/ImagemEquipe/ImagemEquipe';
import andreyImg from './../../rest/andrey.png';
import andreyMeme from './../../rest/memeAndrey.jpg';
import './Equipe.css';
export default function Equipe() {
  return (
    <div className="equipeContainer">
      <Header />
      <Container>
        <ImagemEquipe
          name="Andrey Nithack"
          imgFirst={andreyImg}
          imgMeme={andreyMeme}
        />
      </Container>
      <Footer />
    </div>
  );
}

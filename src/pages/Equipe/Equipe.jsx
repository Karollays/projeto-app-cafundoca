import React from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ImagemEquipe from '../../components/ImagemEquipe/ImagemEquipe';
import andreyImg from './../../rest/andrey.png';
import andreyMeme from './../../rest/memeAndrey.jpg';
import biancaImg from './../../rest/bianca.png';
import biancaMeme from './../../rest/memeBianca.jpeg';
import camilaImg from './../../rest/camila.png';
import camilaMeme from './../../rest/memeCamila.jpeg';
import matheusImg from './../../rest/matheus.png';
import matheusMeme from './../../rest/memeMatheus.png';
import karolineImg from './../../rest/karol.png';
import karolineMeme from './../../rest/memeKarol.jpeg';
import imgLink from './../../rest/linkedin.png';
import imgGit from './../../rest/github.png';

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
          imgLink={imgLink}
          imgGit={imgGit}
         
          />
           <ImagemEquipe
          name="Bianca Scharneski"
          imgFirst={biancaImg}
          imgMeme={biancaMeme}
          imgLink={imgLink}
          imgGit={imgGit}
          />
          <ImagemEquipe
          name="Camila Trizotto"
          imgFirst={camilaImg}
          imgMeme={camilaMeme}
          imgLink={imgLink}
          imgGit={imgGit}
          />
          <ImagemEquipe
          name="Matheus Couto"
          imgFirst={matheusImg}
          imgMeme={matheusMeme}
          imgLink={imgLink}
          imgGit={imgGit}
          />
          <ImagemEquipe
          name="Karol Penteado"
          imgFirst={karolineImg}
          imgMeme={karolineMeme}
          imgLink={imgLink}
          imgGit={imgGit}
        />
      </Container>
      <Footer />
    </div>
  );
}

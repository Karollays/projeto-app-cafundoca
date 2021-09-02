import React from 'react';
import Container from '../../components/Container/Container';
import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer';
import AnimacaoLogo from './../../components/AnimacaoLogo/AnimacaoLogo';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Container>
        <AnimacaoLogo/>
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

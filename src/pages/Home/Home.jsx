import React from 'react';
import Container from '../../components/Container/Container';
import Logo from './../../components/Logo/Logo';
import Header from './../../components/Header/Header.jsx';
import Footer from './../../components/Footer/Footer';
const Home = () => {
  return (
    <div className="home">
      <Header />
      <Container>
        <Logo width="70%" />
      </Container>
      <Footer />
    </div>
  );
};

export default Home;

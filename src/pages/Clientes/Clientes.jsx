import React from 'react';
import AnimacaoLogo from '../../components/AnimacaoLogo/AnimacaoLogo';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import './Clientes.css';
export default function Clientes() {
  return (
    <div className="clientesContainer">
      <Header />
      <Container>
        <AnimacaoLogo />
      </Container>
      <Footer />
    </div>
  );
}

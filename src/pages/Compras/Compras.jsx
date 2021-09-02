import React from 'react';
import Container from './../../components/Container/Container';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import EmConstrucao from './../../components/AnimacaoConstrucao/EmConstrucao';
import './Compras.css';
export default function Compras() {
  return (
    <div className="comprasContainer">
      <Header />
      <Container>
      <EmConstrucao />
        </Container>
      <Footer />
    </div>
  );
}

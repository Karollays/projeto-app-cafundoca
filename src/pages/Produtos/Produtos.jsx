import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './Produtos.css';
export default function Produtos() {
  return (
    <div className="produtosContainer">
      <Header />
      <Container>Pedidos</Container>
      <Footer />
    </div>
  );
}

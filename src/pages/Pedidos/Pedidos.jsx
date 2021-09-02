import React from 'react';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import EmContrucao from './../../components/AnimacaoConstrucao/EmConstrucao';

import './Pedidos.css';
export default function Pedidos() {
  return (
    <div className="pedidosContainer">
      <Header />
      <Container>
        <EmContrucao/>
        </Container>
      <Footer />
    </div>
  );
}

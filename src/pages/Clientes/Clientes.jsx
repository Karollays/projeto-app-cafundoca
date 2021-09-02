import React from 'react';
import EmContrucao from '../../components/AnimacaoConstrucao/EmConstrucao';
import Container from '../../components/Container/Container';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

import './Clientes.css';
export default function Clientes() {
  return (
    <div className="clientesContainer">
      <Header />
      <Container>
        <EmContrucao />
      </Container>
      <Footer />
    </div>
  );
}

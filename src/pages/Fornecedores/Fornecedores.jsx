import React from 'react';
import Header from './../../components/Header/Header';

import './Fornecedores.css';
import Footer from './../../components/Footer/Footer';
import Container from '../../components/Container/Container';
import EmContrucao from '../../components/AnimacaoConstrucao/EmConstrucao';
export default function Fornecedores() {
  return (
    <div className="fornecedores">
      <Header />
      <Container>
        <EmContrucao />
      </Container>
      <Footer />
    </div>
  );
}

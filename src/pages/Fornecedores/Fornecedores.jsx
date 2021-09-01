import React from 'react';
import Header from './../../components/Header/Header';
import AnimacaoLogo from './../../components/AnimacaoLogo/AnimacaoLogo';
import './Fornecedores.css';
import Footer from './../../components/Footer/Footer';
import Container from '../../components/Container/Container';
export default function Fornecedores() {
  return (
    <div className="fornecedores">
      <Header />
      <Container>
        <AnimacaoLogo />
      </Container>
      <Footer />
    </div>
  );
}

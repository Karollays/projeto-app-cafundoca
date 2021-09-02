import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './Produtos.css';
export default function Produtos() {
  return (
    <div className="produtosContainer">
      <Header />
      <Container>
        <div className="productContent">
          <div className="productContentTitle">
            <h1>Produtos</h1>
          </div>
          <div className="productColunmLeft"></div>th
          <ul className="productContentList">
            <li>
              <div className="productContentListItem">Batata</div>
            </li>
            <li>
              <div className="productContentListItem">Beterraba</div>
            </li>
            <li>
              <div className="productContentListItem">Cenoura</div>
            </li>
            <li>
              <div className="productContentListItem">Cebola</div>
            </li>
            <li>
              <div className="productContentListItem">Couve</div>
            </li>
            <li>
              <div className="productContentListItem">Couve-flor</div>
            </li>
          </ul>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

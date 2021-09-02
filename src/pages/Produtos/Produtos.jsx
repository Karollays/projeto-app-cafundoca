import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './Produtos.css';
import InputField from '../../components/Input/InputField';
import ListaItem from '../../components/ListaItem/ListaItem';
import Item from '../../components/Item/Item';
import api from './../../infra/axiosConfig';

export default function Produtos() {
  const defaultList = [
    {
      id: '',
      nome: '',
      preco: 0,
      porcentagemDeLucro: 0,
      quantidadeEstoque: 0,
      quantidadeVendidos: 0,
      descricao: '',
      image: '',
    },
  ];
  const [lista, setLista] = useState(defaultList);
  const [current, setCurrent] = useState(defaultList);

  useEffect(() => {
    getProdutos();
  }, []);
  const getProdutos = () => {
    api
      .get('/produtos')
      .then((response) => {
        setLista(
          response.data.data.map((el) => {
            return { key: el.id, id: el.id, ...el };
          })
        );
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
  };
  const updateForm = (event) => {
    event.preventDefault();
    const { id } = event.target;
    setCurrent(lista.find((el) => el.id === id));
  };
  const clearForm = (event) => {
    event.preventDefault();
    setCurrent(defaultList);
  };
  const deleteProduct = (event) => {
    event.preventDefault();
    const confirm = window.confirm('Deseja realmente excluir este produto?');
    if (!confirm) return;
    const { id } = current;
    api
      .delete(`/produtos/` + id)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    setCurrent(defaultList);
    getProdutos();
  };

  const postProduct = (data) => {
    data.preventDefault();
    console.log(current);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.value);
  };

  return (
    <div className="produtosContainer">
      <Header />
      <Container>
        <div className="productContent">
          <div className="productBox">
            <div className="productColumnLeft">
              <div className="productColumnLeftTitle">Lista de Produtos</div>
              <ListaItem>
                {lista.map((item) => (
                  <Item
                    key={item.id}
                    onClickDelete={deleteProduct}
                    id={item.id}
                    onClick={updateForm}
                    texto={item.nome}
                  ></Item>
                ))}
              </ListaItem>
            </div>

            <div className="productColumnRight">
              <form className="productForm" onSubmit={handleSubmit}>
                Nome:
                <InputField
                  style={{ marginTop: '0.1rem' }}
                  name="nome"
                  width="20rem"
                  placeholder={current.nome}
                />
                Descrição:
                <InputField
                  width="20rem"
                  name="descricao"
                  placeholder={current.descricao}
                />
                Preço:
                <InputField
                  width="20rem"
                  name="preco"
                  placeholder={current.preco}
                />
                Quantidade em Estoque:
                <InputField
                  name="quantidadeEstoque"
                  width="20rem"
                  placeholder={current.quantidadeEstoque}
                />
                Quantidade vendidos:
                <InputField
                  name="quantidadeVendidos"
                  width="20rem"
                  placeholder={current.quantidadeVendidos}
                />
                Porcentagem de lucro:
                <InputField
                  name="porcentagemDeLucro"
                  width="20rem"
                  placeholder={current.quantidadeVendidos}
                />
                <div className="productButton">
                  <Item id="salvarProduto" type="submit" texto="Salvar" />
                  <Item
                    id="apagarForm"
                    onClick={deleteProduct}
                    texto="Deletar"
                  />
                  <Item id="" onClick={clearForm} texto="Limpar" />
                </div>
              </form>
              <div className="productImage">
                <img className="productImage" src={current.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

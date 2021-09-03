import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './Compras.css';
import InputField from '../../components/Input/InputField';
import ListaItem from '../../components/ListaItem/ListaItem';
import Item from '../../components/Item/Item';
import api from './../../infra/axiosConfig';

export default function Compras() {
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
    getCompras();
  }, []);
  const getCompras = () => {
    api
      .get('/compras')
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
  const deleteCompras = (event) => {
    event.preventDefault();
    const confirm = window.confirm('Deseja realmente excluir esta Compra?');
    if (!confirm) return;
    const { id } = current;
    api
      .delete(`/compras/` + id)
      .then((response) => {
        getCompras();
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    setCurrent(defaultList);
    getCompras();
  };

  const postCompras = (data) => {
    data.preventDefault();
    api
      .post('/compra', { data })
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
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.value);
  };

  return (
    <div className="comprasContainer">
      <Header />
      <Container>
        <div className="compraContent">
          <div className="compraBox">
            <div className="compraColumnLeft">
              <div className="compraColumnLeftTitle">Lista de Compras</div>
              <ListaItem>
                {lista.map((item) => (
                  <Item
                    key={item.id}
                    onClickDelete={deleteCompras}
                    id={item.id}
                    onClick={updateForm}
                    texto={item.nome}
                  ></Item>
                ))}
              </ListaItem>
            </div>

            <div className="compraColumnRight">
              <form className="compraForm" onSubmit={handleSubmit}>
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
                <div className="compraButton">
                  <Item id="salvarCompra" type="submit" texto="Salvar" />
                  <Item
                    id="apagarForm"
                    onClick={deleteCompras}
                    texto="Deletar"
                  />
                  <Item id="" onClick={clearForm} texto="Limpar" />
                </div>
              </form>
              <div className="compraImage">
                <img className="compraImage" src={current.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

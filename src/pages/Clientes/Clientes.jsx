import React, { useState, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Container from '../../components/Container/Container';
import './Clientes.css';
import InputField from '../../components/Input/InputField';
import ListaItem from '../../components/ListaItem/ListaItem';
import Item from '../../components/Item/Item';
import api from './../../infra/axiosConfig';

export default function Clientes() {
  const defaultList = [
    {
      id: '',
      nome: '',
      telefone: '',
      email: '',
     dataNascimento: 0,
      rua: "",
      numero: '',
      bairro: '',
      cidade: '',
      uf: '',
      cep:'',
      image:''
    },
  ];
  const [lista, setLista] = useState(defaultList);
  const [current, setCurrent] = useState(defaultList);

  useEffect(() => {
    getClientes();
  }, []);
  const getClientes = () => {
    api
      .get('/clientes')
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
  const deleteCliente = (event) => {
    event.preventDefault();
    const confirm = window.confirm('Deseja realmente excluir este cliente?');
    if (!confirm) return;
    const { id } = current;
    api
      .delete(`/cliente/` + id)
      .then((response) => {
        getClientes();
      })
      .catch((err) => {
        console.error('ops! ocorreu um erro' + err);
      });
    setCurrent(defaultList);
    getClientes();
  };

  const postCliente = (data) => {
    data.preventDefault();
    api
      .post('/cliente', { data })
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
    <div className="clientesContainer">
      <Header />
      <Container>
        <div className="clienteContent">
          <div className="clienteBox">
            <div className="clienteColumnLeft">
              <div className="clienteColumnLeftTitle">Lista de Clientes</div>
              <ListaItem>
                {lista.map((item) => (
                  <Item
                    key={item.id}
                    onClickDelete={deleteCliente}
                    id={item.id}
                    onClick={updateForm}
                    texto={item.nome}
                  ></Item>
                ))}
              </ListaItem>
            </div>

            <div className="clienteColumnRight">
              <form className="clienteForm" onSubmit={handleSubmit}>
                Nome:
                <InputField
                  style={{ marginTop: '0.1rem' }}
                  name="nome"
                  width="20rem"
                  placeholder={current.nome}
                />
                Telefone:
                <InputField
                  width="20rem"
                  name="telefone"
                  placeholder={current.telefone}
                />
                E-mail:
                <InputField
                  width="20rem"
                  name="email"
                  placeholder={current.email}
                />
                Data de Nascimento:
                <InputField
                  name="dataNascimento"
                  width="20rem"
                  placeholder={current.dataNascimento}
                />
                Rua:
                <InputField
                  name="rua"
                  width="20rem"
                  placeholder={current.rua}
                />
                Número:
                <InputField
                  name="numero"
                  width="20rem"
                  placeholder={current.numero}
                />
                 Bairro:
                <InputField
                  name="bairro"
                  width="20rem"
                  placeholder={current.bairro}
                />
                 Cidade:
                <InputField
                  name="cidade"
                  width="20rem"
                  placeholder={current.cidade}
                />
                UF:
                <InputField
                  name="uf"
                  width="20rem"
                  placeholder={current.uf}
                />
                CEP:
                <InputField
                  name="cep"
                  width="20rem"
                  placeholder={current.cep}
                />
                <div className="clienteButton">
                  <Item id="salvarCliente" type="submit" texto="Salvar" />
                  <Item
                    id="apagarForm"
                    onClick={deleteCliente}
                    texto="Deletar"
                  />
                  <Item id="" onClick={clearForm} texto="Limpar" />
                </div>
              </form>
              <div className="clienteImage">
                <img className="clienteImage" src={current.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
}

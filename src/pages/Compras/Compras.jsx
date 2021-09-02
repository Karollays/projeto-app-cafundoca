import React from 'react';
import Container from './../../components/Container/Container';
import Footer from './../../components/Footer/Footer';
import Header from './../../components/Header/Header';
import './Compras.css';
import InputField from './../../components/Input/InputField';
const compras = [
  {
    "id": "2d2f96b5-b06e-4648-a73e-9bcc2013e669",
    "nome": "Matheus Couto",
    "status": true,
    "dataDeEntrega": "",
    "listaDeCompras": "",
    "createdAt": "2021-07-29T02:30:50.375Z",
    "updatedAt": "2021-07-29T02:30:50.375Z"
  },

  {
    "id": "2a19187a-df83-4e85-ba49-4b4c9ea01988",
    "nome": "Brito",
    "status": true,
    "dataDeEntrega": "",
    "listaDeCompras": "",
    "createdAt": "2021-07-29T02:32:15.985Z",
    "updatedAt": "2021-07-29T02:32:15.985Z"
  },

  {
    "id": "bef1207f-f1c9-4d38-97de-257e7fef4bc2",
    "nome": "Camila",
    "status": true,
    "dataDeEntrega": "",
    "listaDeCompras": "",
    "createdAt": "2021-07-29T02:32:35.165Z",
    "updatedAt": "2021-07-29T02:32:35.165Z"
  },
  
]


export default function Compras() {
  return (
    <div className="comprasContainer">
      <Header />
      <Container>

        <div className="comprasContent">
          <div className="comprasContentTitle">
            <h1>Compras</h1>
            </div>
            <ul className="comprasContentList">
              <li>
                <div className="comprasContentListItem">Batata</div>
                </li>
                <li>
                  <div className="comprasContentListItem">Beterraba</div>
                </li>
                    <li>
                      <div className="comprasContentListItem">Cenoura</div>
                    </li>
                    </ul>
                    </div>
                    <div className="comprasColumnRight">
                      <div className="comprasFrom">


                      Nome:
                     <InputField placeholder={compras[0].nome} />
                      Status:
                      <InputField placeholder={compras[0].status}/>
                      Preço: 
                      <InputField placeholder={compras[0].preço}/>
                      Data De Entrega: 
                      <InputField placeholder={compras[0].dataDeEntrega}/>
                      Lista De Compras:
                      <InputField placeholder={compras[0].listaDeCompras}/> 
                      Create Atualizado: 
                      <InputField placeholder={compras[0].createAtualizado}/> 
                      Updated Atualizado:
                      <InputField placeholder={compras[0].updatedAtualizado}/>

                      </div>
                  

                     
                    </div>
      </Container>

      <Footer />
    </div>
  );
}

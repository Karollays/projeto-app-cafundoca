import { Route, BrowserRouter } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer';
import Menu from './components/Menu/Menu.jsx';
import React from 'react';
import './App.css';
import './reset.css'; 

import Teste from './components/Teste/Teste';
import Home from './components/Home/Home'
function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header />
        <Menu />
        <div className="article">
        <Route component={Home} path="/" exact/>
        <Route component={Teste} path="/teste" />
        <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}
export default App;

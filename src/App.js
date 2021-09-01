import React from "react";
import { Route, BrowserRouter } from "react-router-dom"
import Routes from './components/Routes/Routes';
import Login from './components/Login/Login';

import './App.css';
import './reset.css';


function App() {
  return (
    <div className="container">
      <BrowserRouter>
          <Route component={Login} path="/" exact />
          <Route component={Routes} path="/home" />
      </BrowserRouter>
    </div>
  );
}
export default App;

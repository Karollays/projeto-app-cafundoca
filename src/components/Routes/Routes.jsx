import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import Login from "./../Login/Login";
import Teste from "./../Teste/Teste"

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { Login }  path="/" exact />
           <Route component = { Teste }  path="/teste" exact />
           
       </BrowserRouter>
   )
}

export default Routes;
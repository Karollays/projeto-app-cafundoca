import React from 'react';
import "./../AnimacaoLogo/AnimacaoLogo.css";
import  SimboloCa from "./../../rest/ca.png";
import  SimboloCafundoca from "./../../rest/cafundoca.png";



function AnimacaoLogo() {

    return (
        <div className="divsimbolo">
        <div >
              <img className="simboloca" src={SimboloCa} alt="Símbolo com a letra C e A " />
                <img className="simbolocafundoca" src={SimboloCafundoca} alt="Símbolo com com a frase Cafundóca comida com carinho ao redor" />
                </div>
                <h2 className="carregando">Carregando...</h2>
        </div>        

    );

}

export default AnimacaoLogo; 
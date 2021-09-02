import React from 'react';
import './EmConstrucao.css';
import Cafundoca1img from './../../rest/cafundoca1.png';
import emConstrucaoimg from './../../rest/emConstrucao.png';

function EmContrucao() {
  return (
    <div className="divsimbolo2">
      <div>
        <img
          className="cafundocaConstrucao"
          src={Cafundoca1img}
          alt="Símbolo com a letra C e A "
        />
        <img
          className="emConstrucao"
          src={emConstrucaoimg}
          alt="Símbolo com com a frase Cafundóca comida com carinho ao redor"
        />
      </div>
      <h2 className="construcao">Em Construção</h2>
    </div>
  );
}

export default EmContrucao;
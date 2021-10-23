import React from 'react';
import { Link } from 'react-router-dom';

import closeIcon from '../images/x-square.svg'
import './Warning.css';

class Warning extends React.Component {
  // constructor() {
  //   super();
  //   this.closeWarning = this.closeWarning.bind(this);
  // }

  // closeWarning() {

  // }

  render() {
    return (
      <div className="warning">
        <h1>
          AVISO <br />
          VOCÊ ENTRARÁ AGORA NA PLATAFORMA DE ACESSO AO VI SEMFEP. ANTES DE
          SUBMETER SEU TRABALHO, RECOMENDAMOS QUE PRIMEIRO VOCÊ POSSA SE SITUAR
          EM UM DOS OITO ENQUADRAMENTOS QUE DELIMITAMOS. <br />
          A INSCRIÇÃO PARA
          TRABALHOS ACONTECERÁ DE 18 A 31 DE OUTUBRO DE 2021.
        </h1>
        <Link to="/visemfep">
          <img src={closeIcon} alt="Fechar" className="close-icon"/>
        </Link>
      </div>
    );
  }
}

export default Warning;

import React from 'react';

import eventLogo from '../images/logo-do-evento.png';

import './Header.css';

class Header extends React.Component {
  render() {
    return (
      <>
        <header className="header-Header">
          <img
            className="img-header"
            src={eventLogo}
            alt="Logo do sexto Seminário de Formação de Professores em Exercício"
          />
          <nav className="nav-header">
            <button className="nav-button" id="pagina-inicial">
              Página Inicial
            </button>

            <button className="nav-button" id="enquandrar-trabalho">
              Enquadrar Trabalho
            </button>

            <button className="nav-button" id="contatos">
              Contatos
            </button>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;

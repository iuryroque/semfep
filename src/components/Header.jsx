import React from 'react';

import eventLogo from '../images/logo-do-evento.png';
import { Link } from 'react-router-dom'

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
            <Link>
              <button className="nav-button" id="pagina-inicial">
                Página Inicial
              </button>
            </Link>  

            <Link>
              <button className="nav-button" id="enquandrar-trabalho">
                Enquadrar Trabalho
              </button>
            </Link>  

            <Link to='/semfep/contatos'>
              <button className="nav-button" id="contatos">
                Contatos
              </button>
            </Link>  
          </nav>
        </header>
      </>
    );
  }
}

export default Header;

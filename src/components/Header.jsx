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
            <Link className='link-header'>
              Página Inicial
            </Link>
            <Link className='link-header'>
              Enquadrar Trabalho
            </Link>  
            <Link to='/semfep/contatos' className='link-header'>
                Contatos
            </Link>  
          </nav>
        </header>
      </>
    );
  }
}

export default Header;

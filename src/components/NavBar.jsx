import React from 'react';
import { Link } from 'react-router-dom';
import eventLogo from '../images/logo-do-evento.png';
import './NavBar.css';
import ButtonMenu from '../images/Android/button-menu.png';

function NavBar() {
  return (
    <div className="nav-page">
      <Link to="/visemfep/frames">
        <img id="img-navbar" src={eventLogo} alt="" />
      </Link>
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img class="fas fa-bars" src={ButtonMenu} />
        </label>
        {/* <label class="logo"></label> */}
        <ul className="ul-nav fist-li">
          <Link to="/visemfep/frames" className="a-nav">
            <li className="li-nav">Página Inicial</li>
          </Link>
          <Link to="/visemfep/enquadrar-trabalho" className="a-nav">
            <li className="li-nav">Enquadrar Trabalho</li>
          </Link>
          <Link to="/visemfep/contatos" className="a-nav">
            <li className="li-nav">Contatos</li>
          </Link>
          <Link
            to="/visemfep/ficha-tecnica"
            className="a-nav"
            id="ficha-tecnica"
          >
            <li className="li-nav">Ficha Técnica</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;

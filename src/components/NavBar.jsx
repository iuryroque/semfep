import React from "react";
import { Link } from 'react-router-dom'
import eventLogo from '../images/logo-do-evento.png';
import './NavBar.css'
import ButtonMenu from '../images/Android/button-menu.png'

function NavBar() {
  return (
    <div >
       <img id='img-navbar' src={ eventLogo } alt="" />
      <nav>
        <input type="checkbox" id="check" />
        <label for="check" class="checkbtn">
          <img class="fas fa-bars" src={ ButtonMenu }/>
        </label>
        {/* <label class="logo"></label> */}
        <ul>
          <Link class="">
            <li>Página Inicial</li>
          </Link>
          <Link>
            <li>Enquadrar Trabalho</li>
          </Link>
          <Link>
            <li>Contato</li>
          </Link>
          <Link id='ficha-tecnica'>
            <li>Ficha Técnica
          </li></Link>
        </ul>
      </nav>
    </div>
    );
  }
  
  export default NavBar;
  
import React from 'react';

import './Contacts.css';

import logoMail from '../images/logo-mail.png';
import logoInstagram from '../images/logo-instagram.png';
import logoFacebook from '../images/logo-facebook.png';
import logoWhatsapp from '../images/logo-whatsapp.png';

class Contacts extends React.Component {
  render() {
    return (
      <>
        <section className="container-contacts-icons">
          <h1 className="titulo-contacts">CONTATOS</h1>
          <img src={logoMail} alt="Enviar e-mail" className="logo-mail" />
          <img src={logoInstagram} alt="Instagram" className="logo-instagram" />
          <img src={logoFacebook} alt="Facebook" className="logo-facebook" />
          <img
            src={logoWhatsapp}
            alt="Acesso ao grupo do Whatsapp"
            className="logo-mail"
          />
        </section>
      </>
    );
  }
}

export default Contacts;

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
        <section className="container-contacts">
          <div className="container-title-contacts">
            <h1 className="titulo-contacts">CONTATOS</h1>
          </div>
          <div className="container-moving-icons">
            <label for="mail" title="Enviar e-mail">
              <a href="mailto:fep.faced.ufba@gmail.com " id="mail">
                <img src={logoMail} alt="Enviar e-mail" className="logo-mail" />
              </a>
            </label>
            <label for="instagram" title="Acesso ao Instagram do SemFEP">
              <a
                href="https://www.instagram.com/fep.ufba/"
                id="instagram"
                target="_blank"
              >
                <img
                  src={logoInstagram}
                  alt="Instagram"
                  className="logo-instagram"
                />
              </a>
            </label>
            <label for="facebook" title="Acesso ao Facebook do SemFEP">
              <a href="#facebook" id="facebook" target="_blank">
                <img
                  src={logoFacebook}
                  alt="Facebook"
                  className="logo-facebook"
                />
              </a>
            </label>
          </div>
          <div className="container-externo-wpp">
            <label
              id="label-wpp"
              for="whatsapp"
              title="Acesso ao grupo do WhatsApp"
            >
              <a
                className="acesso-whatsapp"
                href="https://chat.whatsapp.com/GgvCeoQkC4z1T34K0daJsP"
                id="whatsapp"
                target="_blank"
              >
                <section className="container-whatsapp">
                  <img
                    src={logoWhatsapp}
                    alt="Acesso ao grupo do Whatsapp"
                    className="logo-mail"
                  />
                  <h2>Acesso ao grupo do WhatsApp</h2>
                </section>
              </a>
            </label>
          </div>
        </section>
      </>
    );
  }
}

export default Contacts;
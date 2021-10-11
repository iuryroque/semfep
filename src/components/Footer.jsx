import React from 'react';
import brasaoUFBA from '../images/brasao_ufba.jpg';
import facedLogo from '../images/faced_logo.png';
import ppgeLogo from '../images/ppge-ufba.png';
import colorLogo from '../images/color-logo.jpg';

import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <>
        <footer>
          <section className="footer-links">
            {' '}
            <a href="#ficha-tecnica" target="#">
              Ficha Técnica
            </a>{' '}
            |{' '}
            <a href="#contatos" target="#">
              Contatos
            </a>
          </section>
          <section className="footer-images-container">
            <img
              width="40px"
              height="60px"
              src={brasaoUFBA}
              alt="Brasão da Universidade Federal da Bahia (UFBA)"
            />
            <img
              width="100px"
              height="50px"
              src={facedLogo}
              alt="Logo da Faculdade de Educação da UFBA"
            />
            <img
              width="120px"
              height="60px"
              src={ppgeLogo}
              alt="Logo do Programa de Pós Graduação em Educação da UFBA"
            />
            <img
              width="65px"
              height="60px"
              src={colorLogo}
              alt="Logo do Grupo de Formação de Professores em Exercício da UFBA"
            />
          </section>
        </footer>
      </>
    );
  }
}

export default Footer;

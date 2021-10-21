import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import ppge_ufba from '../images/ppge-ufba.png';
import faced_logo from '../images/faced_logo.png';
import brasao_ufba from '../images/brasao_ufba.jpg';
import logo_fep_footer from '../images/logo-fep-colorido-footer.png';

function Footer() {
  return (
    <footer className="footer-Footer">
      <p className="links-footer">
        <Link to="/visemfep/ficha-tecnica">Ficha Técnica</Link> <Link>|</Link>{' '}
        <Link to="/visemfep/contatos">Contatos</Link>
      </p>
      <div className="footer-deadline">
        <p>VI SEMFEP | 25 a 27 de Novembro/2021</p>
        <p>Inscrições para trabalhos de 18 a 31 de Outubro/2021</p>
      </div>
      <div className="imgs-container">
        <img
          className="img-footer"
          src={brasao_ufba}
          alt="Logo da Faculdade de Educação da UFBA"
        />
        <img
          className="img-footer"
          src={faced_logo}
          alt="Logo do Programa de Pós Graduação em Educação da UFBA"
        />
        <img
          className="img-footer"
          src={ppge_ufba}
          alt="Logo do Programa de Pós Graduação em Educação da UFBA"
        />
        <img
          className="img-footer"
          src={logo_fep_footer}
          alt="Logo do Grupo de Formação de Professores em Exercício da UFBA"
        />
      </div>
    </footer>
  );
}

export default Footer;

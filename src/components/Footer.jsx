import React from "react";
import './Footer.css'
import ppge_ufba from '../images/ppge-ufba.png'
import faced_logo from '../images/faced_logo.png'
import brasao_ufba from '../images/brasao_ufba.jpg'
import color_logo from '../images/color-logo.jpg'

function Footer() {
  return(
    <footer className='footer-Footer'>
        <p className='links-footer'>
          <a href="#">Ficha Técnica</a> | <a href="#">Contatos</a> 
        </p>
      <div className='imgs-container'>
        <img className='img-footer' src= { brasao_ufba } alt="Logo da Faculdade de Educação da UFBA" />
        <img className='img-footer' src= { faced_logo } alt="Logo do Programa de Pós Graduação em Educação da UFBA" />
        <img className='img-footer' src= { ppge_ufba } alt="Logo do Programa de Pós Graduação em Educação da UFBA" />
        <img className='img-footer' src= { color_logo } alt="Logo do Grupo de Formação de Professores em Exercício da UFBA" />
      </div>
    </footer>
  )
}

export default Footer;

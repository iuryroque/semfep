import React from 'react';
import './Parceiros.css';

import LOGO_IF_SERTAO from '../images/parceiros/if_sertao-PARCERIa.png';
import LOGO_IFBA from '../images/parceiros/IF-PARCERIA.png'
import LOGO_FEL from '../images/parceiros/FEL-PARCERIA.png' ;
import LOGO_GEFEP from '../images/parceiros/GEFEP-PARCERIA.jpeg'
import LOGO_UNEB from '../images/parceiros/UNEB-PARCERIA.png'
import LOGO_APLB from '../images/parceiros/APLB-APOIO.png';

class Parceiros extends React.Component {
  render() { 
    return (
      <>
        <div className="container-parceiros-e-apoio">
          <div className="container-parceiros">
            <div className="column-1">
              <h3 className="title-parceiros">Parceiros</h3>
              <img className="logo-if-sertao" src={ LOGO_IF_SERTAO } alt="Logo do Instituto Federal Sertão de Pernambuco" />
              <img className="logo-ifba" src= { LOGO_IFBA } alt="Logo do Instituto Federal Baiano" />
            </div>
            <div className="column-2">
              <img className="logo-fel" src={ LOGO_FEL } alt="Logo Formação Experiência Linguagens" />
              <img className="logo-gefep" src={ LOGO_GEFEP } alt="Logo Grupo de Pesquisa Forma em Ação" />
              <img className="logo-uneb" src={ LOGO_UNEB } alt="Logo do Departamento de Educação, Campus Catorze, Universidade do Estado da Bahia" />
            </div>
          </div>
          <div className="container-apoio">
            <h3 className="title-apoio">Apoio Cultural</h3>
            <img className="logo-aplb" src={ LOGO_APLB } alt="Logo da APLB Sindicato" />
        </div>  
        </div>
      </>
    );
  }
}
 
export default Parceiros;

            
            
        
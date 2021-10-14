import React from 'react';
import warningSign from '../images/warning.png';
import './saudadeDescription.css';

class SaudadeDescription extends React.Component {
  render() {
    return (
      <div className="container-frame-description-page">
        <section className="frame-description">
          <h1>SAUDADE</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description"></p>
            <p>
              O frame é constituído de provocações de outras lugaridades
              educacionais. Lugaridades, muitas vezes, sem concretude, em corpos
              afetivamente des-territorializados. É assim com a saudade da
              Escola Pública Brasileira situada em um antigamente não
              temporalmente definido. Tem sido assim com a saudade da escola
              pré-pandêmica. Saudades de um passado localizado no presente.
              Saudades da escola que há de vir, com tudo que transformaremos,
              movimentaremos, libertaremos autonomamente, localizada no desejo
              do presente.
            </p>
            <p>
              Para emplacar a bossa-nova, na virada dos 50s para os 60s, João
              Gilberto, com uma nota só, convocava: Chega de saudade.
            </p>
            <p>
              {' '}
              <strong>E aí professores: chega de uma certa saudade?</strong>
            </p>
            <p>
              João Gilberto - <i>Chega de Saudade</i> (1959)
            </p>
          </div>
          <div className="warning-frame-description">
            <img className="warning-sign" src={warningSign} alt="Atenção" />
            <p>
              Se você não se enquadra em SAUDADE, escolha outro <i>Frame</i>.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default SaudadeDescription;

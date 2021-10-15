import React from 'react';
import warningSign from '../../images/warning.png';
import './resistenciaDescription.css';

class ResistenciaDescription extends React.Component {
  render() {
    return (
      <div className="container-resistencia-description-page">
        <section className="frame-description">
          <h1>RESISTÊNCIA</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">Resistir é preciso?</p>
            <p>
              Este frame é fundamentalmente político e sugere que resistir é
              preciso em um tempo-espaço de luta que homogeneiza, anacroniza e
              compete entre si na produção de realidades resistentes.
            </p>
            <p>
              A busca por modos de conhecer situados, corporificados, ecoando
              outras vozes, revelando outros corpos/sujeitos curriculantes faz
              emergir questões tais como: Que projeto de educação disputamos?
              Por que resistimos? Como e com quem vivemos e resistimos? Como as
              lutas que lutamos ressoam em nós e nos currículos que produzimos?
              Que sociedade queremos viver, amar, educar?
            </p>
            <p>
              {' '}
              <strong>
                Com tantas perguntas, como não clamar por Fernando Pessoa:
                Resistir é preciso?
              </strong>
            </p>
            <p>
              Fernando Pessoa - <i>Navegar é preciso, viver não é preciso</i>{' '}
              (1914)
            </p>
            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em RESISTÊNCIA, escolha outro{' '}
                <i>Frame</i> ao lado.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default ResistenciaDescription;

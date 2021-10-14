import React from 'react';
import warningSign from '../../images/warning.png';
import './linguagemDescription.css';

class FramesDescription extends React.Component {
  render() {
    return (
      <div className="container-linguagem-description-page">
        <section className="frame-description">
          <h1>LINGUAGEM</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              Viver sem virar as páginas ou morrer de lamber os dedos?
            </p>
            <p>
              Para este frame somos inspirados pela obra “O nome da Rosa”. Ali,
              os lambidos da morte, do envenenamento, do desejo de conhecer.
              Este frame da linguagem que se posiciona em contraposição ao
              proibido e se coloca como passaporte de acesso às múltiplas
              línguas, prometem a felicidade das viagens épicas ao alcançar o
              mundo pelo conhecimento conduzido pela leitura. A ideia de um
              sistema onipresente, múltiplo, que não permite a comunicação de
              signos e sentimentos humanos fora dos seus limites, o texto, a
              escritura, e mesmo a manifestação da fala.
            </p>
            <p>
              {' '}
              <strong>
                Nesta nova escola sob o império da linguagem, estamos livres dos
                envenenamentos? Ou continuaremos sempre, em Nome de alguma Rosa,
                nos envenenando?
              </strong>
            </p>
            <p>
              Umberto Eco – <i>O Nome da Rosa</i> (1980)
            </p>

            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em LINGUAGEM, escolha outro <i>Frame</i>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FramesDescription;

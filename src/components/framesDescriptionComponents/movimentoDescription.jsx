import React from 'react';
import warningSign from '../images/warning.png';
import './movimentoDescription.css';

class MovimentoDescription extends React.Component {
  render() {
    return (
      <div className="container-frame-description-page">
        <section className="frame-description">
          <h1>Movimento</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              E se movimentar for sempre ter uma pedra no caminho?
            </p>
            <p>
              O Frame Movimento se ancora em uma tradicional base humanista que
              é também metafísica com ambição salvacionista, emancipatória. A
              mudança é vista como necessária e para alcançá-la não se pode
              ficar parado, é o movimento. Um movimento em direção à terra
              prometida. Uma perspectiva teleológica em que os riscos - que
              metaforicamente estamos chamando de Pedra - são para serem
              vencidos.
            </p>
            <p>
              {' '}
              <strong>
                Mas, e quando aparece uma pedra que vira o caminho?
              </strong>
            </p>
            <p>
              Carlos Drummond de Andrad - <i>No Meio do Caminho</i> (1928)
            </p>
          </div>
          <div className="warning-frame-description">
            <img className="warning-sign" src={warningSign} alt="Atenção" />
            <p>
              Se você não se enquadra em MOVIMENTO, escolha outro <i>Frame</i>.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default MovimentoDescription;

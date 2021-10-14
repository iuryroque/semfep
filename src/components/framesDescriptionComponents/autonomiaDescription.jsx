import React from 'react';
import warningSign from '../../images/warning.png';
import './autonomiaDescription.css';

class AutonomiaDescription extends React.Component {
  render() {
    return (
      <div className="container-autonomia-description-page">
        <section className="frame-description">
          <h1>AUTONOMIA</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              Autonomizar na educação para (continuar a) morrer pela pátria e
              viver sem razão?
            </p>
            <p>
              No Frame Autonomia vamos de Geraldo Vandré e sua viralizada música
              de 1968: Pra não dizer que não falei das flores/Caminhando. Neste
              Frame, hegemoniza-se e legitima-se significações de Autonomia, que
              mesmo deslizantes entre si, fecham-se na ideia de liberdade como a
              condição de - sem ou minimizando as amarras -
              saber/conseguir/poder fazer, condição esta alcançada pela
              conscientização, pelo empoderamento, pelo centramento humanista.
            </p>
            <p>
              {' '}
              <strong>
                E você, vai querer morrer/viver pela pátria com razão?
              </strong>
            </p>
            <p>
              Geraldo Vandré –{' '}
              <i>Canção Pra não dizer que não falei das flores</i> (1968)
            </p>

            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em AUTONOMIA, escolha outro <i>Frame</i>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default AutonomiaDescription;

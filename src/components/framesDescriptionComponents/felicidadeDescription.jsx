import React from 'react';
import warningSign from '../../images/warning.png';
import './felicidadeDescription.css';

class FelicidadeDescription extends React.Component {
  render() {
    return (
      <div className="container-felicidade-description-page">
        <section className="frame-description">
          <h1>FELICIDADE</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              Tristeza não tem fim, felicidade sim?
            </p>
            <p>
              Curiosamente em um tempo-espaço intensamente caracterizado como
              sombrio, a escola é situada em um frame que quer/merece ser feliz,
              em um clamor humanista marcadadamente desejante de práticas
              felizes de ensino e aprendizagem. Uma felicidade instrumental,
              emprestada. Uma identidade feliz que se pretende fixa, reguladora
              e controladora das contingências, afim de afastar a tristeza.
            </p>
            <p>
              {' '}
              <strong>
                E se o poeta estiver certo, e a tristeza, diferente da
                felicidade, não tem fim?
              </strong>
            </p>
            <p>
              Vinicius de Moraes – <i>A felicidade</i> (1959)
            </p>
            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em FELICIDADE, escolha outro{' '}
                <i>Frame</i> ao lado.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default FelicidadeDescription;

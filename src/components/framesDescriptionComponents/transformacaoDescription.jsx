import React from 'react';
import warningSign from '../../images/warning.png';
import './transformacaoDescription.css';

class TransformacaoDescription extends React.Component {
  render() {
    return (
      <div className="container-transformacao-description-page">
        <section className="frame-description">
          <h1>TRANSFORMAÇÃO</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              E se pra mudar, bastar existir?
            </p>
            <p>
              Este frame projetando normatividades instituídas, parece focar nos
              360 ângulos da câmara para uma perspectiva de transformação com
              direção única, e como propósito último promotor de um modo
              universalizante e redentor de educar em busca de um admirável
              futuro melhor. Temos, sim, alterações gráficas: Educação
              Transforma. Educação Transforma! Educação transforma!!
            </p>
            <p>
              {' '}
              <strong>
                Recitando Braulio Bessa que para mudar basta existir, podemos
                perguntar: Então, toda educação é transformadora?
              </strong>
            </p>
            <p>
              Braulio Lessa - <i>É preciso Mudar</i> (2020)
            </p>

            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em TRANSFORMAÇÃO, escolha outro{' '}
                <i>Frame</i> ao lado.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default TransformacaoDescription;

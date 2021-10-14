import React from 'react';
import warningSign from '../../images/warning.png';
import './seriedadeDescription.css';

class SeriedadeDescription extends React.Component {
  render() {
    return (
      <div className="container-seriedade-description-page">
        <section className="frame-description">
          <h1>SERIEDADE</h1>
          <div className="container-frame-description">
            <p className="subtitle-frame-description">
              Para que tanta seriedade, quer virar herói ou heroína?
            </p>
            <p>
              De um modo peculiar, este frame se pronuncia em relação aos
              imperativos de expressiva seriedade que tomam lugar nas
              manifestações públicas em defesa da educação. Desterritorializando
              Tom Zé, se percebe o quanto toda essa “mania de ser tão sério, de
              parecer tão sério”, de sorrir e chorar tão sério, é uma
              característica desse tal professor brasileiro complexado com sua
              “vontade de parecer herói”, sina trágica ao modo dialético. De uma
              perspectiva aristotélica, o império do trágico implica
              necessariamente no aparecimento da figura heroica. É apenas nas
              tramas da tragédia, superiores às das comédias, que podem devir os
              temas sérios, e é aos heróis trágicos que está reservada a nobreza
              de caráter, qualidades embaladas por uma sentença de morte ou pela
              autopunição.
            </p>
            <p>
              {' '}
              <strong>E aí, quer virar herói ou heroína?</strong>
            </p>
            <p>
              Tom Zé – <i>Complexo de Épico</i> (1973)
            </p>

            <div className="warning-frame-description">
              <img className="warning-sign" src={warningSign} alt="Atenção" />
              <p>
                Se você não se enquadra em SERIEDADE, escolha outro <i>Frame</i>
                .
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default SeriedadeDescription;

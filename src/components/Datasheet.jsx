import React from 'react';

import './Datasheet.css';

class Datasheet extends React.Component {
  render() {
    return (
      <div className="container-datasheet">
        <section>
          <h1>FICHA TÉCNICA</h1>
          <h4>Web Designer</h4>
          <p>Lucas do Santos</p>

          <h4>Programação Web </h4>
          <p>
            Ulisses Roque <br />
            Iury Roque
          </p>

          <h4>Coordenação Artística</h4>
          <p>Vitor Marques</p>

          <h4>Coordenação do Projeto/ Roteiro / Product Mananger </h4>
          <p>Augusto Flávio</p>

          <h4>Coordenação do VI SEMFEP</h4>
          <p>
            Maria Inez Carvalho <br />
            Roseli de Sá
          </p>

          <h4>Composição dos Frames</h4>
          <p>
            Amarildo dos Santos; Augusto Flávio; Camila Ayala; Carol; Caroline;
            Darty Cléia; Elísio Filho; Emanuela Dourado; Fábio Vieira; Joelma
            Bispo; Marcio Flor; Maria Inez Carvalho; Neurisângela Miranda; Nubia
            Paiva; Pedro Teófilo; Roseli Sá; Rosselinni Muniz Gonçalves; Sara
            Betania; Sara Franco; Vitor Marques.
          </p>
        </section>
      </div>
    );
  }
}

export default Datasheet;

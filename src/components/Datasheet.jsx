import React from 'react';

import './Datasheet.css';

class Datasheet extends React.Component {
  render() {
    return (
      <div className="container-datasheet">
        <section>
          <h1>FICHA TÉCNICA</h1>
          <h2>Web Designer</h2>
          <p>Lucas do Santos</p>

          <h2>Programação Web </h2>
          <p>
            Ulisses Roque <br />
            Iury Roque
          </p>

          <h2>Coordenação Artística</h2>
          <p>Vitor Marques</p>

          <h2>Coordenação do Projeto/ Roteiro / Product Mananger </h2>
          <p>Augusto Flávio</p>

          <h2>Coordenação do VI SEMFEP</h2>
          <p>
            Maria Inez Carvalho <br />
            Roseli de Sá
          </p>

          <h2>Composição dos Frames</h2>
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
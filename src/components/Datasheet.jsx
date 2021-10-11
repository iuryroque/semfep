import React from 'react';

import './Datasheet.css';

class Datasheet extends React.Component {
  render() {
    return (
      <div>
        <section className="datasheet">
          <h2>FICHA TÉCNICA</h2>
          <h3>Web Designer</h3>
          <p>Lucas do Santos</p>

          <h3>Programação Web </h3>
          <p>Ulisses Roque</p>
          <p>Iury Roque</p>

          <h3>Coordenação Artística</h3>
          <p>Vitor Marques</p>

          <h3>Coordenação do Projeto/ Roteiro / Product Mananger </h3>
          <p>Augusto Flávio</p>

          <h3>Coordenação do VI SEMFEP</h3>
          <p>Maria Inez Carvalho</p>
          <p>Roseli de Sá</p>

          <h3>Composição dos Frames</h3>
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

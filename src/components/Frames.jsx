import React from 'react';

class Frames extends React.Component {
  render() {
    return (
      <section id="frames-container">
        <div>
          <label for="resistencia" title="RESISTÊNCIA">
            <button className="frame resistencia" id="resistencia">
              RESISTÊNCIA
            </button>
          </label>
          <label for="seriedade" title="SERIEDADE">
            <button className="frame seriedade" id="seriedade">
              SERIEDADE
            </button>
          </label>
        </div>
        <div>
          <label for="autonomia" title="AUTONOMIA">
            <button className="frame autonomia" id="autonomia">
              AUTONOMIA
            </button>
          </label>
          <label for="movimento" title="MOVIMENTO">
            <button className="frame movimento" id="movimento">
              MOVIMENTO
            </button>
          </label>
        </div>
        <div>
          <label for="felicidade" title="FELICIDADE">
            <button className="frame felicidade" id="felicidade">
              FELICIDADE
            </button>
          </label>
          <label for="linguagem" title="LINGUAGEM">
            <button className="frame linguagem" id="linguagem">
              LINGUAGEM
            </button>
          </label>
        </div>
        <div>
          <label for="transformacao" title="TRANSFORMAÇÂO">
            <button className="frame transformacao" id="transformacao">
              TRANSFORMAÇÃO
            </button>
          </label>
          <label for="saudade" title="SAUDADE">
            <button className="frame saudade" id="saudade">
              SAUDADE
            </button>
          </label>
        </div>
      </section>
    );
  }
}

export default Frames;

import React from 'react';

class FramesNav extends React.Component {
  render() {
    return (
      <div>
        <section id=".container">
          <ul>
            <li>
              <label for="resistencia" title="RESISTÊNCIA">
                <button className="vertical-frame resistencia" id="resistencia">
                  RESISTÊNCIA
                </button>
              </label>
            </li>
            <li>
              <label for="seriedade" title="SERIEDADE">
                <button className="vertical-frame seriedade" id="seriedade">
                  SERIEDADE
                </button>
              </label>
            </li>
            <li>
              <label for="autonomia" title="AUTONOMIA">
                <button className="vertical-frame autonomia" id="autonomia">
                  AUTONOMIA
                </button>
              </label>
            </li>
            <li>
              <label for="movimento" title="MOVIMENTO">
                <button className="vertical-frame movimento" id="movimento">
                  MOVIMENTO
                </button>
              </label>
            </li>
            <li>
              <label for="felicidade" title="FELICIDADE">
                <button className="vertical-frame felicidade" id="felicidade">
                  FELICIDADE
                </button>
              </label>
            </li>
            <li>
              <label for="linguagem" title="LINGUAGEM">
                <button className="vertical-frame linguagem">LINGUAGEM</button>
              </label>
            </li>
            <li>
              <label for="transformacao" title="TRANSFORMAÇÃO">
                <button className="vertical-frame transformacao">
                  TRANSFORMAÇÃO
                </button>
              </label>
            </li>
            <li>
              <label for="saudade" title="SAUDADE">
                <button className="vertical-frame saudade">SAUDADE</button>
              </label>
            </li>
          </ul>
        </section>
      </div>
    );
  }
}

export default FramesNav;

import React from 'react';
import './Frames.css'
import { Link } from 'react-router-dom'

class Frames extends React.Component {
  render() {
    return (
      <section id="frames-container">
        <div>
          <label for="resistencia" title="RESISTÊNCIA">
            <Link className="frame resistencia" id="resistencia">
              RESISTÊNCIA
            </Link>
          </label>
          <label for="seriedade" title="SERIEDADE">
            <Link className="frame seriedade" id="seriedade">
              SERIEDADE
            </Link>
          </label>
          <label for="autonomia" title="AUTONOMIA">
            <Link className="frame autonomia" id="autonomia">
              AUTONOMIA
            </Link>
          </label>
          <label for="movimento" title="MOVIMENTO">
            <Link className="frame movimento" id="movimento">
              MOVIMENTO
            </Link>
          </label>
        </div>
        <div>
          <label for="felicidade" title="FELICIDADE">
            <Link className="frame felicidade" id="felicidade">
              FELICIDADE
            </Link>
          </label>
          <label for="linguagem" title="LINGUAGEM">
            <Link className="frame linguagem" id="linguagem">
              LINGUAGEM
            </Link>
          </label>
          <label for="transformacao" title="TRANSFORMAÇÂO">
            <Link className="frame transformacao" id="transformacao">
              TRANSFORMAÇÃO
            </Link>
          </label>
          <label for="saudade" title="SAUDADE">
            <Link className="frame saudade" id="saudade">
              SAUDADE
            </Link>
          </label>
        </div>
      </section>
    );
  }
}

export default Frames;

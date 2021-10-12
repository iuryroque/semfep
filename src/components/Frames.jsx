import React from 'react';
import './Frames.css'
import { Link } from 'react-router-dom'

class Frames extends React.Component {
  render() {
    return (
      <section className='auto-grid' id="frames-container">
          <label className='frame resistencia' for="resistencia" title="RESISTÊNCIA">
            <Link className="link-grid-frame" id="resistencia">
              RESISTÊNCIA
            </Link>
          </label>
          <label className='frame seriedade' for="seriedade" title="SERIEDADE">
            <Link className="link-grid-frame" id="seriedade">
              SERIEDADE
            </Link>
          </label>
          <label className='frame autonomia' for="autonomia" title="AUTONOMIA">
            <Link className="link-grid-frame" id="autonomia">
              AUTONOMIA
            </Link>
          </label>
          <label className='frame movimento' for="movimento" title="MOVIMENTO">
            <Link className="link-grid-frame" id="movimento">
              MOVIMENTO
            </Link>
          </label>
          <label className='frame felicidade' for="felicidade" title="FELICIDADE">
            <Link className="link-grid-frame" id="felicidade">
              FELICIDADE
            </Link>
          </label>
          <label className='frame linguagem' for="linguagem" title="LINGUAGEM">
            <Link className="link-grid-frame" id="linguagem">
              LINGUAGEM
            </Link>
          </label>
          <label className='frame transformacao' for="transformacao" title="TRANSFORMAÇÂO">
            <Link className="link-grid-frame" id="transformacao">
              TRANSFORMAÇÃO
            </Link>
          </label>
          <label className='frame saudade' for="saudade" title="SAUDADE">
            <Link className="link-grid-frame" id="saudade">
              SAUDADE
            </Link>
          </label>
      </section>
    );
  }
}

export default Frames;

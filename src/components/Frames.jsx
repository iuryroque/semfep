import React from 'react';
import './Frames.css'
import { Link } from 'react-router-dom'

class Frames extends React.Component {
  render() {
    return (
      <div className='container-principal'>
      <section className='auto-grid' id="frames-container">
            <Link className="link-grid-frame resistencia" id="resistencia">
          <label className='frame' for="resistencia" title="RESISTÊNCIA">
              RESISTÊNCIA
          </label>
            </Link>
            <Link className="link-grid-frame seriedade" id="seriedade">
          <label className='frame' for="seriedade" title="SERIEDADE">
              SERIEDADE
          </label>
            </Link>
            <Link className="link-grid-frame autonomia" id="autonomia">
          <label className='frame' for="autonomia" title="AUTONOMIA">
              AUTONOMIA
          </label>
            </Link>
            <Link className="link-grid-frame movimento" id="movimento">
          <label className='frame' for="movimento" title="MOVIMENTO">
              MOVIMENTO
          </label>
            </Link>
            <Link className="link-grid-frame felicidade" id="felicidade">
          <label className='frame' for="felicidade" title="FELICIDADE">
              FELICIDADE
          </label>
            </Link>
            <Link className="link-grid-frame linguagem" id="linguagem">
          <label className='frame' for="linguagem" title="LINGUAGEM">
              LINGUAGEM
          </label>
            </Link>
            <Link className="link-grid-frame transformacao" id="transformacao">
          <label className='frame' for="transformacao" title="TRANSFORMAÇÂO">
              TRANSFORMAÇÃO
          </label>
            </Link>
            <Link className="link-grid-frame saudade" id="saudade">
          <label className='frame' for="saudade" title="SAUDADE">
              SAUDADE
          </label>
            </Link>
      </section>
      </div>
    );
  }
}

export default Frames;

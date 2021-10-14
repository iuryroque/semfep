import React from 'react';
import './Frames.css';
import { Link } from 'react-router-dom';

class Frames extends React.Component {
  render() {
    return (
      <div className="container-principal">
        <section className="auto-grid" id="frames-container">
          <Link
            to="/semfep/frames/descricao-resistencia"
            className="link-grid-frame resistencia"
            id="resistencia"
          >
            <label className="frame" for="resistencia" title="RESISTÊNCIA">
              <Link to="/semfep/frames/descricao-resistencia">RESISTÊNCIA</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-seriedade"
            className="link-grid-frame seriedade"
            id="seriedade"
          >
            <label className="frame" for="seriedade" title="SERIEDADE">
              <Link to="/semfep/frames/descricao-seriedade">SERIEDADE</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-autonomia"
            className="link-grid-frame autonomia"
            id="autonomia"
          >
            <label className="frame" for="autonomia" title="AUTONOMIA">
              <Link to="/semfep/frames/descricao-autonomia">AUTONOMIA</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-movimento"
            className="link-grid-frame movimento"
            id="movimento"
          >
            <label className="frame" for="movimento" title="MOVIMENTO">
              <Link to="/semfep/frames/descricao-movimento">MOVIMENTO</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-felicidade"
            className="link-grid-frame felicidade"
            id="felicidade"
          >
            <label className="frame" for="felicidade" title="FELICIDADE">
              <Link to="/semfep/frames/descricao-felicidade">FELICIDADE</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-linguagem"
            className="link-grid-frame linguagem"
            id="linguagem"
          >
            <label className="frame" for="linguagem" title="LINGUAGEM">
              <Link to="/semfep/frames/descricao-linguagem">LINGUAGEM</Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-transformacao"
            className="link-grid-frame transformacao"
            id="transformacao"
          >
            <label className="frame" for="transformacao" title="TRANSFORMAÇÂO">
              <Link to="/semfep/frames/descricao-transformacao">
                TRANSFORMAÇÃO
              </Link>
            </label>
          </Link>
          <Link
            to="/semfep/frames/descricao-saudade"
            className="link-grid-frame saudade"
            id="saudade"
          >
            <label className="frame" for="saudade" title="SAUDADE">
              <Link to="/semfep/frames/descricao-saudade">SAUDADE</Link>
            </label>
          </Link>
        </section>
      </div>
    );
  }
}

export default Frames;

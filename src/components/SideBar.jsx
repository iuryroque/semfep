import React from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';

function SideBar() {
  return (
    <div className="side-bar">
      <div className="container-side">
        <Link to="/semfep/frames/descricao-linguagem">
          <label title="LINGUAGEM" for="linguagem">
            <button id="linguagem" className="btn-side-bar linguagem ">
              LINGUAGEM
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-resistencia">
          <label
            title="RESISTÊNCIA"
            for="resistencia"
            className="label-side-bar"
          >
            <button id="resistencia" className="btn-side-bar resistencia">
              RESISTÊNCIA
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-seriedade">
          <label title="SERIEDADE" for="seriedade" className="label-side-bar">
            <button id="SERIEDADE" className="btn-side-bar seriedade">
              SERIEDADE
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-autonomia">
          <label title="AUTONOMIA" for="autonomia" className="label-side-bar">
            <button id="autonomia" className="btn-side-bar autonomia">
              AUTONOMIA
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-movimento">
          <label title="MOVIMENTO" for="movimento" className="label-side-bar">
            <button id="movimento" className="btn-side-bar movimento">
              MOVIMENTO
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-felicidade">
          <label title="FELICIDADE" for="felicidade" className="label-side-bar">
            <button id="felicidade" className="btn-side-bar felicidade">
              FELICIDADE
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-transformacao">
          <label
            title="TRANSFORMAÇÃO"
            for="transformacao"
            className="label-side-bar"
          >
            <button id="transformacao" className="btn-side-bar transformacao">
              TRANSFORMAÇÃO
            </button>
          </label>
        </Link>
        <Link to="/semfep/frames/descricao-saudade">
          <label title="SAUDADE" for="saudade" className="label-side-bar">
            <button id="saudade" className="btn-side-bar saudade">
              SAUDADE
            </button>
          </label>
        </Link>
      </div>
    </div>
  );
}

export default SideBar;

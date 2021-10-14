
import React from "react";
import './SideBar.css'

function SideBar() {
  return(
    <div className='side-bar'>
      <div className='container-side'>
      <label title='LINGUAGEM' for='linguagem'>
        <button id='linguagem' className='btn-side-bar linguagem ' >LINGUAGEM</button>
      </label>
      <label title='RESISTÊNCIA' for='resistencia' className='label-side-bar'>
        <button id='resistencia' className='btn-side-bar resistencia'>RESISTÊNCIA</button>
      </label>
      <label title='SERIEDADE' for='seriedade' className='label-side-bar'>
        <button id='SERIEDADE' className='btn-side-bar seriedade'>SERIEDADE</button>
      </label>
      <label title='AUTONOMIA' for='autonomia' className='label-side-bar'>
        <button id='autonomia' className='btn-side-bar autonomia'>AUTONOMIA</button>
      </label>
      <label title='MOVIMENTO' for='movimento' className='label-side-bar'>
        <button id='movimento' className='btn-side-bar movimento'>MOVIMENTO</button>
      </label>
      <label title='FELICIDADE' for='felicidade' className='label-side-bar'>
        <button id='felicidade' className='btn-side-bar felicidade'>FELICIDADE</button>
      </label>
      <label title='TRANSFORMAÇÃO' for='transformacao' className='label-side-bar'>
        <button id='transformacao' className='btn-side-bar transformacao'>TRANSFORMAÇÃO</button>
      </label>
      <label title='SAUDADE' for='saudade' className='label-side-bar'>
        <button id='saudade' className='btn-side-bar saudade'>SAUDADE</button>
      </label>
      </div>
    </div>
  )
}

export default SideBar;

import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import FelicidadeDescription from '../../components/framesDescriptionComponents/felicidadeDescription';
import '../App.css';
import './felicidadePage.css';

function FelicidadeDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <FelicidadeDescription />
      <Footer />
    </div>
  );
}

export default FelicidadeDescriptionPage;

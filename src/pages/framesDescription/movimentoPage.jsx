import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import MovimentoDescription from '../../components/framesDescriptionComponents/movimentoDescription';

import '../App.css';
import './movimentoPage.css';

function MovimentoDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <MovimentoDescription />
      <Footer />
    </div>
  );
}

export default MovimentoDescriptionPage;

import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import LinguagemDescription from '../../components/framesDescriptionComponents/linguagemDescription';
import '../App.css';
import './linguagemPage.css';

function LinguagemDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <LinguagemDescription />
      <Footer />
    </div>
  );
}

export default LinguagemDescriptionPage;

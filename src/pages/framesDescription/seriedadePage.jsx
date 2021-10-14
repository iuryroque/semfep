import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import SeriedadeDescription from '../../components/framesDescriptionComponents/seriedadeDescription';

import '../App.css';
import './seriedadePage.css';

function SeriedadeDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <SeriedadeDescription />
      <Footer />
    </div>
  );
}

export default SeriedadeDescriptionPage;

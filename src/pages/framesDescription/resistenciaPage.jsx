import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
import ResistenciaDescription from '../../components/framesDescriptionComponents/resistenciaDescription';

import '../../App.css';
import './resistenciaPage.css';

function ResistenciaDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <ResistenciaDescription />
      <Footer />
    </div>
  );
}

export default ResistenciaDescriptionPage;

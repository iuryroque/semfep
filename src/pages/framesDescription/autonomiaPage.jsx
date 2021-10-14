import React from 'react';

import NavBar from '../../components/NavBar';
import Footer from '../../components/Footer';
import SideBar from '../../components/SideBar';
import AutonomiaDescription from '../../components/framesDescriptionComponents/autonomiaDescription';

import '../../App.css';
import './autonomiaPage.css';

function AutonomiaDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <AutonomiaDescription />
      <Footer />
    </div>
  );
}

export default AutonomiaDescriptionPage;

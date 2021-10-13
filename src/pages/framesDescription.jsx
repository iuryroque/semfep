import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import FramesDescription from '../components/FramesDescription';

import '../App.css';
import './framesDescription.css';

function FramesDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <FramesDescription />
      <Footer />
    </div>
  );
}

export default FramesDescriptionPage;

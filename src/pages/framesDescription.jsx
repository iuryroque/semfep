import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import FramesDescription from '../components/FramesDescription';

import '../App.css';
import './framesDescription.css';

function FramesDescriptionPage() {
  return (
    <div className="page-frames-description">
      <Header />
      <SideBar />
      <FramesDescription />
      <Footer />
    </div>
  );
}

export default FramesDescriptionPage;

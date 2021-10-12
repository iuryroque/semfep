import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';

import '../App.css';
import './framesDescription.css';

function FramesDescriptionPage() {
  return (
    <div className="page-frames-description">
      <Header />
      <SideBar />
      <Footer />
    </div>
  );
}

export default FramesDescriptionPage;

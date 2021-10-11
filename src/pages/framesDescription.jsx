import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';
import FramesNav from '../components/NavBar';

import '../App.css';
import './framesDescription.css';

function FramesDescriptionPage() {
  return (
    <div className="frames-description-page">
      <Header />
      <FramesNav />
      {/* <Footer /> */}
    </div>
  );
}

export default FramesDescriptionPage;

import React from 'react';

import Header from '../components/Header';
import Frames from '../components/Frames';
import Footer from '../components/Footer';

import '../App.css';
import './frames.css';

function FramesPage() {
  return (
    <div className="frames-page">
      <Header />
      <Frames />
      {/* <Footer /> */}
    </div>
  );
}

export default FramesPage;

import React from 'react';

import NavBar from '../components/NavBar'
import Frames from '../components/Frames';
import Footer from '../components/Footer';

import '../App.css';
import './frames.css';

function FramesPage() {
  return (
    <div className="page-frames">
      <NavBar />
      <Frames />
      <Footer />
    </div>
  );
}

export default FramesPage;

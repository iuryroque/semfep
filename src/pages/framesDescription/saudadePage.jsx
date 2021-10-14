import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import SaudadeDescription from '../../components/framesDescriptionComponents/SaudadeDescription';

import '../App.css';
import './saudadePage.css';

function SaudadeDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <SaudadeDescription />
      <Footer />
    </div>
  );
}

export default SaudadeDescriptionPage;

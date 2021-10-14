import React from 'react';

import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import SideBar from '../components/SideBar';
import TransformacaoDescription from '../../components/framesDescriptionComponents/transformacaoDescription';

import '../App.css';
import './transformacaoPage.css';

function TransformacaoDescriptionPage() {
  return (
    <div className="page-frames-description">
      <NavBar />
      <SideBar />
      <TransformacaoDescription />
      <Footer />
    </div>
  );
}

export default TransformacaoDescriptionPage;

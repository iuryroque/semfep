import React from 'react';

import NavBar from '../components/NavBar';
import Parceiros from '../components/Parceiros';
import Footer from '../components/Footer';

import './parceiros.css'

function ParceirosPage() {
  return(
    <div className="page-parceiros">
      <NavBar />
      <Parceiros />
      <Footer />
    </div>
  )
}

export default ParceirosPage;
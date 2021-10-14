import '../App.css';
import './framework.css';

import Header from '../components/Header';
import FrameWork from '../components/FrameWork';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

function FrameWorkPage() {
  return (
    <div className="page-framework">
      <NavBar />
      <FrameWork />
      <Footer />
    </div>
  );
}

export default FrameWorkPage;
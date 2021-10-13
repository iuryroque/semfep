import '../App.css';
import './framework.css';

import Header from '../components/Header';
import FrameWork from '../components/FrameWork';
import Footer from '../components/Footer';

function FrameWorkPage() {
  return (
    <div className="page-framework">
      <Header />
      <FrameWork />
      <Footer />
    </div>
  );
}

export default FrameWorkPage;

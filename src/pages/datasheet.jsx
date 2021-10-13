import '../App.css';
import './datasheet.css';

import Header from '../components/Header';
import Datasheet from '../components/Datasheet';
import Footer from '../components/Footer';

function DataSheetPage() {
  return (
    <div className="page-datasheet">
      <Header />
      <Datasheet />
      <Footer />
    </div>
  );
}

export default DataSheetPage;

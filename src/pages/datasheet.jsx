import '../App.css';
import './datasheet.css';
import Footer from '../components/Footer';
import DataSheet from '../components/Datasheet'
import Header from '../components/Header';

function DataSheetPage() {
  return (
    <div className="page-datasheet">
      <Header />
      <DataSheet />
      <Footer />
    </div>
  );
}

export default DataSheetPage;

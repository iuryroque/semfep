import '../App.css';
import './datasheet.css';
import Footer from '../components/Footer';
import DataSheet from '../components/Datasheet';
import NavBar from '../components/NavBar';

function DataSheetPage() {
  return (
    <div className="page-datasheet">
      <NavBar />
      <DataSheet />
      <Footer />
    </div>
  );
}

export default DataSheetPage;

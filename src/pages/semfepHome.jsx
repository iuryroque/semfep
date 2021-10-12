import '../App.css';
import './semfepHome.css';
import { Link } from 'react-router-dom';

function SemfepHomePage() {
  return (
    <div className="page-semfep">
      <div className="container-comecar-semfep">
        <h2 className="h2-semfep">
          CLIQUE AQUI <br />
          PARA COMEÇAR
        </h2>
        <Link to="/semfep/frames">
          <button className="button-play-semfep"></button>
        </Link>
      </div>
    </div>
  );
}

export default SemfepHomePage;

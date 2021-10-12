import '../App.css';
import './semfepHome.css';
import { Link } from 'react-router-dom';
import Frame2 from '../images/backgrounds/Frame2.png';
import ButtonPlay from '../images/Button-Play.png';

function SemfepHomePage() {
  return (
    <div className="page-semfep">
      <div className="comecar-container-semfep">
        <h2 className="h2-semfep">
          CLIQUE AQUI <br />
          PARA COMEÇAR
        </h2>
        <Link className="button-play-semfep" to="/semfep/frames">
          <img className="img-button" src={ButtonPlay} alt="" />
        </Link>
      </div>
    </div>
  );
}

export default SemfepHomePage;

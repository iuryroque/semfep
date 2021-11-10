import './App.css';

import Home from './pages/home';
import WarningPage from './pages/warningPage';
import SemfepHomePage from './pages/semfepHome';
import FramesPage from './pages/frames';
import FrameWorkPage from './pages/frameWork';
import ContactsPage from './pages/contacts';
import DataSheetPage from './pages/datasheet';
import Parceiros from './pages/parceiros';

import { Switch, Route, Link } from 'react-router-dom';

// importa páginas de descrição

import felicidadePage from './pages/framesDescription/felicidadePage';
import movimentoPage from './pages/framesDescription/movimentoPage';
import seriedadePage from './pages/framesDescription/seriedadePage';
import saudadePage from './pages/framesDescription/saudadePage';
import transformacaoPage from './pages/framesDescription/transformacaoPage';
import autonomiaPage from './pages/framesDescription/autonomiaPage';
import linguagemPage from './pages/framesDescription/linguagemPage';
import resistenciaPage from './pages/framesDescription/resistenciaPage';

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      {/* <SemfepHomePage /> */}
      {/* <FramesPage /> */}
      {/* <FramesDescriptionPage /> */}
      {/* <FramesDescription2Page /> */}
      {/* <ContactsPage /> */}
      {/* <DataSheetPage /> */}
      {/* <FrameWorkPage /> */}

      <Switch>
        <Route exact path="/" component={WarningPage} />
        <Route path="/visemfep" exact component={SemfepHomePage} />
        <Route path="/visemfep/frames" exact component={FramesPage} />
        {/* rotas para as páginas de descrição */}
        <Route
          path="/visemfep/frames/descricao-felicidade"
          exact
          component={felicidadePage}
        />
        <Route
          path="/visemfep/frames/descricao-autonomia"
          exact
          component={autonomiaPage}
        />
        <Route
          path="/visemfep/frames/descricao-movimento"
          exact
          component={movimentoPage}
        />
        <Route
          path="/visemfep/frames/descricao-linguagem"
          exact
          component={linguagemPage}
        />
        <Route
          path="/visemfep/frames/descricao-seriedade"
          exact
          component={seriedadePage}
        />
        <Route
          path="/visemfep/frames/descricao-saudade"
          exact
          component={saudadePage}
        />
        <Route
          path="/visemfep/frames/descricao-transformacao"
          exact
          component={transformacaoPage}
        />
        <Route
          path="/visemfep/frames/descricao-resistencia"
          exact
          component={resistenciaPage}
        />
        <Route
          path="/visemfep/enquadrar-trabalho"
          exact
          component={FrameWorkPage}
        />
        <Route path="/visemfep/contatos" exact component={ContactsPage} />
        <Route path="/visemfep/ficha-tecnica" exact component={DataSheetPage} />
        <Route path="/visemfep/parceiros" component={Parceiros} />
      </Switch>
    </div>
  );
}

export default App;

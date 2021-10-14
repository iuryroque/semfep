import './App.css';

import Home from './pages/home';
import SemfepHomePage from './pages/semfepHome';
import FramesPage from './pages/frames';
import FrameWorkPage from './pages/frameWork';
import ContactsPage from './pages/contacts';
import DataSheetPage from './pages/datasheet';
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
        <Route path="/" exact component={Home} />
        <Route path="/quem-somos" exact component={Home} />
        <Route path="/semfep" exact component={SemfepHomePage} />
        <Route path="/semfep/frames" exact component={FramesPage} />
        {/* rotas para as páginas de descrição */}
        <Route
          path="/semfep/frames/descricao-felicidade"
          exact
          component={felicidadePage}
        />
        <Route
          path="/semfep/frames/descricao-autonomia"
          exact
          component={autonomiaPage}
        />
        <Route
          path="/semfep/frames/descricao-movimento"
          exact
          component={movimentoPage}
        />
        <Route
          path="/semfep/frames/descricao-linguagem"
          exact
          component={linguagemPage}
        />
        <Route
          path="/semfep/frames/descricao-seriedade"
          exact
          component={seriedadePage}
        />
        <Route
          path="/semfep/frames/descricao-saudade"
          exact
          component={saudadePage}
        />
        <Route
          path="/semfep/frames/descricao-transformacao"
          exact
          component={transformacaoPage}
        />
        <Route
          path="/semfep/frames/descricao-resistencia"
          exact
          component={resistenciaPage}
        />
        <Route
          path="/semfep/enquadrar-trabalho"
          exact
          component={FrameWorkPage}
        />
        {/* <Route path="/semfep/contatos" exact component={ContactsPage} /> */}
        <Route path="/semfep/ficha-tecnica" exact component={DataSheetPage} />
      </Switch>
    </div>
  );
}

export default App;

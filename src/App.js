import './App.css';

import Home from './pages/home';
import SemfepHomePage from './pages/semfepHome';
import FramesPage from './pages/frames';
import FramesDescriptionPage from './pages/framesDescription';
import FramesDescription2Page from './pages/framesDescription2';
import FrameWorkPage from './pages/frameWork';
import ContactsPage from './pages/contacts';
import DataSheetPage from './pages/datasheet';
import { Switch, Route, Link } from 'react-router-dom';

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
        <Route
          path="/semfep/frames-descricao-felicidade"
          exact
          component={FramesDescriptionPage}
        />
        <Route path="/semfep/contatos" exact component={ContactsPage} />
        <Route path="/semfep/ficha-tecnica" exact component={DataSheetPage} />
      </Switch>
    </div>
  );
}

export default App;

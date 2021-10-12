import '../App.css';
import './home.css';
import imagem from '../images/color-logo.jpg';
import {Link} from 'react-router-dom'

function Home() {
  return (
    <div className="page">
      <header className="header-home">
        <nav className="nav-home">
          <img className="img-logo-home" src={imagem} alt="fep logo" />
          <div className='links-home'>
            <Link to=''>Quem Somos</Link>
            <Link to='/semfep'>SEMFEP</Link>
          </div>
        </nav>
            <hr className="hr-home" />
      </header>
      <body className="body-home">
        <h1 className='h1-home'>O Que é o Grupo FEP?</h1>
        <section className="class-home">
          <p className='p-home'>
          Em 2006, foi criado o FEP, um grupo de pesquisa vinculado à linha de pesquisa Currículo e (In)Formação do Programa de Pós-Graduação em Educação (PPGE) da Faced/UFBA. Nasce sob a égide da indissociabilidade entre ensino, pesquisa e extensão.
          </p>
          <p className='p-home'>
          Sua gênese é o ensino. Tudo começou com o Projeto Irecê, nome pelo qual é conhecido o Programa de Formação Continuada de Professores para o Município de Irecê, na Bahia.
          </p>
        </section>
      </body>
    </div>
  );
}

export default Home;
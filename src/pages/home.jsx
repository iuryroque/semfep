import '../App.css';
import './home.css';
import imagem from '../images/color-logo.jpg';
function Home() {
  return (
    <div className="">
      <header className="header-home">
        <nav className="nav-home">
          <img className="img-logo" src={imagem} alt="fep logo" />
          <a href="#somos"> Somos</a>
          <a href="#SEMFEP">SEMFEP</a>
          <div className="hr-home">
            <hr />
          </div>
        </nav>
      </header>
      <body className="body-home">
        <h1>O Que é o Grupo FEP?</h1>
        <section className="class-home">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            pretium molestie arcu nec viverra. Phasellus et quam consectetur,
            tempus ligula at, eleifend nunc. Pellentesque a molestie risus. Duis
            facilisis sapien ac iaculis venenatis. Fusce arcu neque, viverra sed
            condimentum ac, lobortis at risus. Sed mi lorem, vestibulum nec
            ornare in, lacinia imperdiet enim. Nam eu molestie quam. Proin non
            lacus ullamcorper, iaculis erat id, faucibus quam. Ut accumsan ante
            ut scelerisque euismod. In rutrum porttitor orci, aliquet lacinia
            nibh semper et. Nullam diam nulla, posuere gravida porta laoreet,
            bibendum dapibus quam. Aliquam convallis sapien venenatis, bibendum
            eros eu, suscipit lacus. Sed in cursus nibh, non vestibulum sem.
            Vivamus eros dui, vestibulum a odio vel, ultricies blandit ante.
            Vivamus tempor ultrices sollicitudin. Nulla vulputate, metus sit
            amet luctus auctor, augue urna ultricies ante, id ullamcorper nunc
            metus sit amet urna. Nullam gravida leo vitae est rutrum, et congue
            elit tincidunt. Nulla luctus lorem id quam pretium, non maximus
            justo tempus. Suspendisse eros erat, ullamcorper sed molestie sed,
            ultricies interdum sapien. Sed ornare eget ipsum eu tempus. Vivamus
            dapibus massa justo, at eleifend justo posuere vitae. Quisque a
            ultricies nisi. Nunc euismod magna lectus, at ultrices dolor congue
            vel. Curabitur finibus tincidunt libero, in consequat lorem porta
            sit amet. Sed elementum sit amet ipsum fringilla egestas. Fusce
            gravida tortor quis lorem feugiat dignissim. In placerat vestibulum
            justo, non venenatis nunc interdum eu. Phasellus sagittis arcu
            luctus elit tincidunt faucibus. Sed accumsan tortor sed maximus
            iaculis. Maecenas ac elit porttitor ligula interdum tempor.
            Pellentesque hendrerit ipsum et odio dapibus efficitur. Pellentesque
            at pulvinar neque, in viverra urna. Praesent ut ante ut lectus
            convallis euismod. Nunc eu sem ut erat malesuada vehicula. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos.
          </p>
        </section>
      </body>
    </div>
  );
}

export default Home;

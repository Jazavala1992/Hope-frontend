import '../Llevaesperanza Styles/LlevaesperanzaHero.css';
import donacionesImg from '../images/Donaciones.jpg';
import flechaIcon from '../iconos/flecha.png';

function LlevaesperanzaHero() {
  return (
    <section className="llevaesperanza-hero">
      <div className="llevaesperanza-hero-container">
        <div className="llevaesperanza-hero-content">
          <div className="llevaesperanza-hero-text">
            <h1 className="llevaesperanza-hero-titulo">Lleva Esperanza</h1>
            <p className="llevaesperanza-hero-descripcion">
             Nuestra misión avanza gracias a quienes deciden donar recursos y a quienes ofrecen su tiempo como voluntarios. Su apoyo, en cualquiera de estas formas, es invaluable y lo agradecemos sinceramente.
            </p>
            <img 
              src={flechaIcon} 
              alt="Flecha" 
              className="llevaesperanza-hero-flecha"
            />
          </div>
          <div className="llevaesperanza-hero-imagen">
            <img 
              src={donacionesImg} 
              alt="Donaciones HOPE Bolivia" 
              className="hero-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default LlevaesperanzaHero;

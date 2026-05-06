import '../conocenos-styles/Visionymision.css'; 
import { Link } from 'react-router-dom';
import flechaIcon from '../iconos/flecha.png';

function Visionymision () {
  return (
    <div className="vision-mision-container">
        <div className="vision-section">
            <h2 className="section-title">Nuestra Visión</h2>
            <p className="section-text">
                Soñamos con una Bolivia donde los ciclos de vulnerabilidad se rompan, los niños crezcan en ambientes seguros y llenos de oportunidades, y la sociedad esté comprometida a suplir las necesidades del prójimo como parte esencial de vivir el Evangelio.
            </p>
        </div>
        <div className="spacer-section">
            <h3 className="cta-text">¿Listo para ser parte del cambio?</h3>
            <div className="cta-content">
                <Link to="/llevaesperanza" className="cta-button">
                    Lleva Esperanza
                </Link>
                <div className="animated-arrow">
                    <img src={flechaIcon} alt="Flecha" />
                </div>
            </div>
        </div>
        <div className="mision-section">
            <h2 className="section-title">Nuestra Misión</h2>
            <p className="section-text">
                Llevar el amor de Cristo a poblaciones vulnerables,   a infancias y sus familias brindando un apoyo integral —material, emocional, espiritual y educativo.
            </p>
        </div>
    </div>
  );
}
export default Visionymision;
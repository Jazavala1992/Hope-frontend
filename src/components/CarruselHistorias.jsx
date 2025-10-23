import { useState, useEffect } from 'react';
import '../styles/CarruselHistorias.css';
import Farid from '../images/Farid.png';

const historias = [
  {
    nombre: "Farid Mayta",
    imagen: Farid,
    texto: "Desde el 2014, Farid Mayta creció bajo la protección integral de la Fundación Arco Iris (FAI) mediante su proyecto Casa Esperanza, donde lo conocimos gracias a las visitas de los Voluntarios HOPE a este centro. Han pasado más de 10 años desde entonces, gracias a la FAI, Farid tiene una mejor preparación para los desafíos de la vida adulta y, gratamente, encontró en el ayudar a los demás un sentido de vida. Hoy Farid comparte con emoción su experiencia al ser uno de nuestros voluntarios:",
    cita: "Cuando era chico, me gustaba que HOPE trajera libros a la Casa. Ahora siento un cariño especial al apoyar a los niños en sus tareas. Servir y ayudar a otros es algo que quiero seguir haciendo siempre.",
    autor: "Farid Mayta"
  },
  // agregar más historias aquí
];

function CarruselHistorias() {
  const [actual, setActual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActual((prev) => (prev + 1) % historias.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="carrusel-container">
      <h2 className="carrusel-titulo">HISTORIAS DE IMPACTO</h2>
      <div className="carrusel-slide">
        <div className="carrusel-texto">
          <h3 className="carrusel-nombre">{historias[actual].nombre}</h3>
          <p className="carrusel-descripcion">{historias[actual].texto}</p>
          <blockquote className="carrusel-cita">{historias[actual].cita}</blockquote>
        </div>
        <div className="carrusel-imagen">
          <img src={historias[actual].imagen} alt={historias[actual].nombre} />
        </div>
      </div>
    </div>
  );
}

export default CarruselHistorias;
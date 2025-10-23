import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import ProgramasHero from "../programs components/ProgramasHero";
import Biblioteca from "../programs components/Biblioteca";
import Dpi from "../conocenos components/Dpi";
import Esl from '../programs components/Esl';
import Voluntariado from '../programs components/Voluntariado';

function Programas() {
  const { programa } = useParams();

  useEffect(() => {
    if (programa) {
      setTimeout(() => {
        const element = document.getElementById(programa);
        if (element) {
          element.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }
      }, 100);
    }
  }, [programa]);

  return (
    <>
      <Navigation />
      <ProgramasHero />

      {/* Todas las secciones con IDs para navegación */}
      <div id="biblioteca">
        <Biblioteca />
      </div>
      
      <div id="dpi">
        <Dpi />
      </div>

      <div id="esl">
        <Esl />
      </div>
      
      <div id="voluntariado">
        <Voluntariado />
      </div>

      <Footer />
    </>
  );
}

export default Programas;
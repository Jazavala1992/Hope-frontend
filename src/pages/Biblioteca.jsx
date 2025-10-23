import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Cardlibros from "../biblioteca components/Cardlibros";

function Biblioteca() {
  return (
    <>
    <Navigation />
    <div>
      <h1>Biblioteca - Préstamo de Libros</h1>
      <p>Próximamente más información sobre nuestro servicio de préstamo de libros.</p>
    </div>
    <Cardlibros />
    <Footer />
    </>
  );
}

export default Biblioteca;
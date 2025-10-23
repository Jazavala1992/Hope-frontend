import Header from "../components/Header";
import Metricas from "../components/Metricas";
import Programas from "../components/Programas";
import Alianzas from "../components/Alianzas";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Carruselhistorias from "../components/Carruselhistorias";

function Home() {
  return (
    <>
      <Navigation />
      <Header />
      <Carruselhistorias />
      <Metricas />
      <Programas />
      <Alianzas />
      <Footer />
    </>
  );
}

export default Home;
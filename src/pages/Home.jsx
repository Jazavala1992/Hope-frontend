import { useEffect } from "react";
import Header from "../components/Header";
import Metricas from "../components/Metricas";
import Programas from "../components/Programas";
import Alianzas from "../components/Alianzas";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import CarruselHistorias from "../components/CarruselHistorias";

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Header />
      <CarruselHistorias />
      <Metricas />
      <Programas />
      <Alianzas />
      <Footer />
    </>
  );
}

export default Home;
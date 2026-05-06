import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import LlevaesperanzaHero from "../llevaesperanza-components/LlevaesperanzaHero";
import Donaciones from "../llevaesperanza-components/Donaciones";
import VoluntariadoLlevaEsperanza from "../llevaesperanza-components/VoluntariadoLlevaEsperanza";
import CarruselHistorias from "../components/CarruselHistorias";

function Llevaesperanza() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <div className="llevaesperanza-page">
        <LlevaesperanzaHero />
        <Donaciones />
        <VoluntariadoLlevaEsperanza />
      </div>
      <Footer />
    </>
  );
}

export default Llevaesperanza;
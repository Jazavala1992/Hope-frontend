import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Hero from '../conocenos-components/Hero';
import Valores from "../conocenos-components/Volores";
import Visionymision from "../conocenos-components/Visionymision";
function conocenos () {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
        <Navigation />
        <Hero title="Conócenos" subtitle="Descubre quiénes somos y qué hacemos" />
        <Visionymision />
        <Valores />
        <Footer />
    </>
  );
}

export default conocenos;
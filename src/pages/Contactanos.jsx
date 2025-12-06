import { useEffect } from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import Contacto from "../components/Contacto";

function Contactanos() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <Contacto />
      <Footer />
    </>
  );
}

export default Contactanos;
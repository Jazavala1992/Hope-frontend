
import '../llevaesperanza-styles/Donaciones.css';
import qrImage from '../images/QR.jpeg';

function Donaciones() {
  const handleScrollToVoluntariado = () => {
    const voluntariadoSection = document.getElementById('voluntariado-local');
    if (voluntariadoSection) {
      voluntariadoSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="donaciones-section">
      <div className="donaciones-container">
        <div className="donaciones-cards">
          
          {/* Card 1 - Donación por QR */}
          <div className="donacion-card">
            <h3 className="donacion-titulo">Donación por QR</h3>
            <div className="donacion-qr-container">
              <img src={qrImage} alt="Código QR para donaciones" className="donacion-qr" />
            </div>
            <p className="donacion-descripcion">Escanea el código QR para donaciones dentro de Bolivia</p>
          </div>

          {/* Card 2 - Dividido en dos secciones */}
          <div className="donacion-card donacion-card-dividido">
            {/* Sección superior - Donación desde el exterior */}
            <div className="donacion-seccion">
              <h3 className="donacion-titulo">Donación desde el Exterior</h3>
              <p className="donacion-descripcion">Apoya desde cualquier parte del mundo</p>
              <a 
                href="https://hopeww.kindful.com/?campaign=275455" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn-donacion"
              >
                Donar Ahora
              </a>
            </div>

            {/* Línea divisoria */}
            <div className="donacion-divisor"></div>

            {/* Sección inferior - Dona tu tiempo */}
            <div className="donacion-seccion">
              <h3 className="donacion-titulo">Dona tu Tiempo</h3>
              <p className="donacion-descripcion">Conviértete en voluntario y marca la diferencia</p>
              <button 
                onClick={handleScrollToVoluntariado}
                className="btn-donacion btn-donacion-secondary"
              >
                Ser Voluntario
              </button>
            </div>
          </div>

          {/* Card 3 - Transferencia Bancaria en Bolivianos */}
          <div className="donacion-card">
            <h3 className="donacion-titulo">Transferencia Bancaria</h3>
            <div className="donacion-info-cuenta">
              <p className="cuenta-nombre">FUNDACION HOPE WORLDWIDE BOLIVIA</p>
              <p className="cuenta-numero">CUENTA 4010887674</p>
              <p className="cuenta-banco">BANCO MERCANTIL SANTA CRUZ</p>
              <p className="cuenta-nit">NIT 297498021</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Donaciones;

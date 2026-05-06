import { useState, useEffect } from 'react';
import '../llevaesperanza-styles/VoluntariadoLlevaEsperanza.css';

function VoluntariadoLlevaEsperanza() {
  // Fecha objetivo para la cuenta regresiva (ajusta según tu brigada)
  const fechaObjetivo = new Date('2026-07-15T23:59:59').getTime();
  
  const [tiempoRestante, setTiempoRestante] = useState({
    dias: 0,
    horas: 0,
    minutos: 0,
    segundos: 0
  });

  useEffect(() => {
    const intervalo = setInterval(() => {
      const ahora = new Date().getTime();
      const diferencia = fechaObjetivo - ahora;

      if (diferencia > 0) {
        setTiempoRestante({
          dias: Math.floor(diferencia / (1000 * 60 * 60 * 24)),
          horas: Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutos: Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60)),
          segundos: Math.floor((diferencia % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(intervalo);
      }
    }, 1000);

    return () => clearInterval(intervalo);
  }, [fechaObjetivo]);

  return (
    <section id="voluntariado-local" className="voluntariado-section">
      <div className="voluntariado-container">
        
        <div className="voluntariado-grid">
          
          {/* Lado izquierdo - Brigadas Internacionales */}
          <div className="voluntariado-internacional">
            <h2 className="voluntariado-titulo">Viaja, Sirve y Vive la Esperanza</h2>
            <p className="voluntariado-subtitulo">
              Únete a nuestras brigadas de alto impacto. Una experiencia transformadora 
              de 7 a 14 días.
            </p>

            <div className="brigada-destacada">
              <div className="urgencia-container">
                <p className="urgencia-texto">
                  ¡Faltan <span className="urgencia-highlight">pocos días</span> para cerrar inscripciones!
                </p>
              </div>

              <div className="cuenta-regresiva">
                <div className="tiempo-bloque">
                  <span className="tiempo-numero">{tiempoRestante.dias}</span>
                  <span className="tiempo-label">Días</span>
                </div>
                <div className="tiempo-separador">:</div>
                <div className="tiempo-bloque">
                  <span className="tiempo-numero">{tiempoRestante.horas}</span>
                  <span className="tiempo-label">Horas</span>
                </div>
                <div className="tiempo-separador">:</div>
                <div className="tiempo-bloque">
                  <span className="tiempo-numero">{tiempoRestante.minutos}</span>
                  <span className="tiempo-label">Minutos</span>
                </div>
                <div className="tiempo-separador">:</div>
                <div className="tiempo-bloque">
                  <span className="tiempo-numero">{tiempoRestante.segundos}</span>
                  <span className="tiempo-label">Segundos</span>
                </div>
              </div>

              <button 
                onClick={() => window.open('/brigadas/info', '_blank')}
                className="btn-brigada"
              >
                Conoce los Detalles e Inscríbete
              </button>
            </div>
          </div>

          {/* Lado derecho - Voluntariado Local */}
          <div className="voluntariado-local">
            <h2 className="voluntariado-titulo">Manos Locales, Impacto Continuo</h2>
            <p className="voluntariado-descripcion">
              Si vives en la región, únete a nuestro equipo de voluntarios fijos. 
              Requiere compromiso regular y ganas de cambiar tu comunidad. Tu tiempo 
              es el recurso más valioso que puedes ofrecer para transformar vidas.
            </p>

            <button 
              onClick={() => window.open('https://forms.gle/tu-formulario', '_blank')}
              className="btn-voluntariado btn-voluntariado-local"
            >
              Regístrate como Voluntario Local
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default VoluntariadoLlevaEsperanza;

import '../styles/Metricas.css';

import iconoBeneficiarios from '../iconos/icons beneficiarios.png';
import iconoLibros from '../iconos/icono libro.png';
import iconoGraduados from '../iconos/icono graduados.png';
import iconoVoluntarios from '../iconos/icono voluntarios.png';

function Metricas() {
  const metricas = [
    {
      icono: iconoBeneficiarios,
      numero: "6,9K",
      descripcion: "Beneficiarios"
    },
    {
      icono: iconoLibros,
      numero: "4,2K",
      descripcion: "Libros Prestados"
    },
    {
      icono: iconoGraduados,
      numero: "104",
      descripcion: "Estudiantes Graduados del Programa ESL"
    },
    {
      icono: iconoVoluntarios,
      numero: "442",
      descripcion: "Voluntarios"
    }
  ];

  return (
    <div className="container-fluid metricas-container">
      <div className="container">
        <div className="metricas-header">
          <h2 className="metricas-title">MÉTRICAS</h2>
          <h3 className="metricas-year">2024</h3>
        </div>
        
        {/* Cambiar el layout para no usar Bootstrap grid */}
        <div className="metricas-content">
          {metricas.map((metrica, index) => (
            <div key={index} className="metrica-item">
              <div className="metrica-icono-container">
                <div className="metrica-icono">
                  <img 
                    src={metrica.icono} 
                    alt={metrica.descripcion}
                    className="metrica-icono-img"
                  />
                </div>
              </div>
              <div className="metrica-numero">
                {metrica.numero}
              </div>
              <div className="metrica-descripcion">
                {metrica.descripcion}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Metricas;
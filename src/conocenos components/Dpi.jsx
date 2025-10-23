import '../Biblioteca Styles/Dpi.css';
import dpi1 from '../images/dpi1.jpg';
import dpi2 from '../images/dpi2.jpg';
import dpi3 from '../images/dpi3.jpg';

function Dpi() {
    return (
        <section className="dpi-section">
            <div className="container">
                {/* Título y descripción principal */}
                <div className="dpi-header">
                    <h1 className="dpi-title">
                        Desarrollo de la primera infancia y<br />
                        familias saludables
                    </h1>
                    <p className="dpi-description">
                        Apoyo individualizado a familias con acceso limitado de recursos.
                    </p>
                </div>

                {/* Grid de actividades */}
                <div className="dpi-activities">
                    {/* Actividad 1 */}
                    <div className="activity-card">
                        <div className="activity-image">
                            <img src={dpi1} alt="Visita a hogares" />
                        </div>
                        <div className="activity-content">
                            <p className="activity-text">
                                Visita a hogares de niños, niñas y madres adolescentes.
                            </p>
                        </div>
                    </div>

                    {/* Actividad 2 */}
                    <div className="activity-card">
                        <div className="activity-image">
                            <img src={dpi2}  alt="Día del parque" />
                        </div>
                        <div className="activity-content">
                            <p className="activity-text">
                                "Día del parque": jornada de recreación infantil y capacitación familiar.
                            </p>
                        </div>
                    </div>

                    {/* Actividad 3 */}
                    <div className="activity-card">
                        <div className="activity-image">
                            <img src={dpi3}  alt="Pan y palabra" />
                        </div>
                        <div className="activity-content">
                            <p className="activity-text">
                                "Pan y palabra": entrega de desayunos a personas en situación de calle.
                            </p>
                        </div>
                    </div>

                    {/* Actividad 4 */}
                    <div className="activity-card">
                        <div className="activity-image">
                            <img src={dpi1} alt="Lend HOPE" />
                        </div>
                        <div className="activity-content">
                            <p className="activity-text">
                                "Lend HOPE": Programa de micro préstamos para emprendimientos familiares.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dpi;
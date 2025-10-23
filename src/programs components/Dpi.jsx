import '../Biblioteca Styles/Dpi.css';

function Dpi() {
    return (
        <section className="dpi-section" style={{ paddingTop: '80px' }}>
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
                            <img src="../images/dpi-1.jpg" alt="Visita a hogares" />
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
                            <img src="../images/dpi-2.jpg" alt="Día del parque" />
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
                            <img src="../images/dpi-3.jpg" alt="Pan y palabra" />
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
                            <img src="../images/dpi-4.jpg" alt="Lend HOPE" />
                        </div>
                        <div className="activity-content">
                            <p className="activity-text">
                                "Lend HOPE": microcréditos para emprendedores.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Dpi;
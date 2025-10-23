import '../Biblioteca Styles/Esl.css';
import esl1 from '../images/img1.jpg';
import esl2 from '../images/Farid.png';

function Esl() {
    return (
        <section className="esl-section" id="esl">
            <div className="esl-container">
                {/* Título y descripción principal */}
                <div className="esl-header">
                    <h1 className="esl-title">
                        English as a Second Language (ESL)
                    </h1>
                    <p className="esl-description">
                        Clases virtuales de inglés a la comunidad en general y a personas de recursos limitados.
                    </p>
                    <div className="esl-feature">
                        <svg 
                            className="esl-feature-icon"
                            width="24" 
                            height="24" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="esl-feature-text">
                            Convenios con instituciones estratégicas para el desarrollo de profesores voluntarios.
                        </p>
                    </div>
                </div>

                {/* Grid de actividades */}
                <div className="esl-activities">
                    {/* Actividad 1 */}
                    <div className="esl-activity-card">
                        <div className="esl-activity-image">
                            <img src={esl1} alt="Clases virtuales de inglés" />
                        </div>
                        <div className="esl-activity-content">
                            <p className="esl-activity-text">
                                Clases virtuales interactivas adaptadas a diferentes niveles de aprendizaje.
                            </p>
                        </div>
                    </div>

                    {/* Actividad 2 */}
                    <div className="esl-activity-card">
                        <div className="esl-activity-image">
                            <img src={esl2} alt="Profesores voluntarios" />
                        </div>
                        <div className="esl-activity-content">
                            <p className="esl-activity-text">
                                Profesores voluntarios comprometidos con el desarrollo educativo de la comunidad.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Esl;

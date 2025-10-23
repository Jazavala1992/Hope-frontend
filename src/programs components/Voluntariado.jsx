import '../Biblioteca Styles/Voluntariado.css';
import vol1 from '../images/Voluntariado.jpg';
import vol2 from '../images/img1.jpg';
import vol3 from '../images/dpi1.jpg';
import vol4 from '../images/dpi2.jpg';

function Voluntariado() {
    return (
        <section className="voluntariado-section" id="voluntariado">
            <div className="voluntariado-container">
                {/* Título y descripción principal */}
                <div className="voluntariado-header">
                    <h1 className="voluntariado-title">
                        Desarrollo de voluntariado
                    </h1>
                    <p className="voluntariado-description">
                        Movilización y capacitación de voluntarios locales e internacionales.
                    </p>
                </div>

                {/* Grid de imágenes */}
                <div className="voluntariado-images">
                    {/* Imagen grande */}
                    <div className="voluntariado-image-card large">
                        <img src={vol1} alt="Voluntarios en acción" />
                    </div>

                    {/* Imagen superior derecha */}
                    <div className="voluntariado-image-card">
                        <img src={vol2} alt="Capacitación de voluntarios" />
                    </div>

                    {/* Imagen media derecha */}
                    <div className="voluntariado-image-card">
                        <img src={vol3} alt="Grupo de voluntarios" />
                    </div>

                    {/* Imagen inferior derecha */}
                    <div className="voluntariado-image-card">
                        <img src={vol4} alt="Actividades de voluntariado" />
                    </div>
                </div>

                {/* Características / Features */}
                <div className="voluntariado-features">
                    <div className="voluntariado-feature">
                        <svg 
                            className="voluntariado-feature-icon"
                            width="26" 
                            height="26" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="voluntariado-feature-text">
                            Gestión de viajes de voluntariado para población internacional en brigadas, 
                            Hope Volunteer Corps (HVC), y de estadía extendida, Service Corps.
                        </p>
                    </div>

                    <div className="voluntariado-feature">
                        <svg 
                            className="voluntariado-feature-icon"
                            width="26" 
                            height="26" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2"
                        >
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                        <p className="voluntariado-feature-text">
                            Programa de formación de jóvenes líderes voluntarios.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Voluntariado;

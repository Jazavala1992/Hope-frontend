import '../Biblioteca Styles/Biblioteca.css';
import bib1 from '../images/Bib1.jpg';
import bib2 from '../images/Bib2.jpg';
import bib3 from '../images/Bib3.jpg';
import bib4 from '../images/Bib4.jpg';

function Biblioteca() {
    return (
        <section className="biblioteca-section" style={{ paddingTop: '80px' }}>
            <div className="container">
                {/* Título y descripción principal */}
                <div className="biblioteca-header">
                    <h1 className="biblioteca-title">Biblioteca Móvil B-Olivia</h1>
                    <p className="biblioteca-description">
                        Contamos con una librería con casi 7 mil libros de alta calidad en 
                        español y en inglés enfocados en niños desde los 0 años.
                    </p>
                </div>

                {/* Contenido principal */}
                <div className="biblioteca-content">
                    {/* Grid de imágenes */}
                    <div className="biblioteca-images">
                        <div className="image-container top-left">
                            <img src={bib1} alt="Niños leyendo en biblioteca" />
                        </div>
                        <div className="image-container top-right">
                            <img src={bib2} alt="Grupo de niños con libros" />
                        </div>
                        <div className="image-container bottom-left">
                            <img src={bib3} alt="Estantería de libros" />
                        </div>
                        <div className="image-container bottom-right">
                            <img src={bib4} alt="Actividad de lectura" />
                        </div>
                    </div>

                    {/* Texto informativo y botón */}
                    <div className="biblioteca-info">
                        <div className="info-item">
                            <div className="info-icon">
                                <div className="check-circle">✓</div>
                            </div>
                            <p className="info-text">
                                Realizamos préstamos de libros a instituciones educativas, con la 
                                posibilidad de rotes semestrales o anuales.
                            </p>
                        </div>

                        <div className="info-item">
                            <div className="info-icon">
                                <div className="check-circle">✓</div>
                            </div>
                            <p className="info-text">
                                Realizamos actividades de fomento a la lectura donde no solo buscamos 
                                compartir una lectura, sino generar interacciones positivas y actividades 
                                didácticas para su desarrollo.
                            </p>
                        </div>

                        <button className="biblioteca-btn">
                            LLEVA ESPERANZA
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Biblioteca;
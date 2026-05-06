import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Hero.css';
import flechaIcon from '../iconos/flecha.png';
import cmiImg from '../images/CMI.jpg';
import hvcImg from '../images/HVC.jpeg';

function Hero() {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = [
        {
            id: 1,
            title: "Semillas iniciales",
            description: "En 2009, la boliviana Morayma Bak, residente en Estados Unidos, se conmovió por la pobreza y el abuso infantil en Bolivia tras conocer el trabajo de la Fundación Arco Iris (FAI) y su fundador, el padre José María Neuenhofer. Motivada por su fe y su vínculo con HOPE worldwide (a través de las International Churches of Christ), Bak solicitó con persistencia que esta organización se estableciera en Bolivia. Finalmente, en 2011, HOPE worldwide Bolivia se fundó en La Paz. El Dr. Kevin Broyles, su esposa, la enfermera Noelle Broyles, y su colega Gwendolys Ellis se mudaron para iniciar las operaciones",
            mediaType: "video",
            mediaSrc: "https://www.youtube.com/embed/I8TNugLnx74",
            alt: "Living under the rainbow"
        },
        {
            id: 2,
            title: "Expansión y crecimiento",
            description: "En 2009, la boliviana Morayma Bak, inspirada por la lucha contra la pobreza infantil de la Fundación Arco Iris (FAI), impulsó la llegada de HOPE worldwide a Bolivia. Gracias a su gestión, la organización se fundó en La Paz en 2011 con el Dr. Kevin Broyles y su equipo. Aunque inicialmente se enfocaron en salud, la inminente pobreza los llevó a incluir servicios sociales, siendo la Sala de Juegos (2013) en el Hospital Arco Iris uno de sus primeros proyectos clave. Además, FAI abrió sus puertas para que los voluntarios, incluidos internacionales, apoyaran directamente sus centros y hogares.",
            mediaType: "video",
            mediaSrc: "https://www.youtube.com/embed/A5cwdzDpBkU",
            alt: "Historia HOPE"
        },
        {
            id: 3,
            title: "SUEÑO HECHO REALIAD (CMI-HOPE)",
            description: "El sueño de HOPE worldwide Bolivia de tener una clínica autosostenible se concretó con la inauguración del Centro Médico Internacional (CMI-HOPE), un hito clave. Aunque operó solo de 2015 a 2019, el CMI-HOPE fue diseñado para ser el sostén económico de los programas sociales de HOPE. Durante sus cuatro años, atendió a miles de pacientes, ofreció un programa de auxiliar de enfermería para el desarrollo profesional de los beneficiarios y realizó aportes económicos a la Fundación Arco Iris y a los propios programas de HOPE, dejando un legado de alianzas y donadores fieles que permitieron que la labor social de la organización persistiera.",
            mediaType: "image",
            mediaSrc: cmiImg,
            alt: "HOPE CMI"
        },
        {
            id: 4,
            title: "Brigadas Internacionales",
            description: "En los años previos a la pandemia, los programas sociales de HOPE worldwide Bolivia se fortalecieron significativamente gracias al apoyo económico del CMI-HOPE. Un desarrollo clave fue la inscripción de la organización en 2015 en el HOPE Volunteer Corps (HVC), un departamento que facilita viajes de servicio comunitario con voluntarios internacionales. Hasta 2024, se recibieron un total de 10 brigadas internacionales de HVC, incluidas dos enfocadas en atención médica en Rurrenabaque, Beni, lo que permitió forjar lazos duraderos y ayudó a difundir las iniciativas de esperanza de la organización a nivel global.",
            mediaType: "image",
            mediaSrc: hvcImg,
            alt: "HOPE HVC"
        },
        {
            id: 5,
            title: "Hacia un futuro de mayor esperanza",
            description: "A pesar del cierre del CMI-HOPE y el impacto de la pandemia, HOPE worldwide Bolivia intensificó su ayuda, transformando sus iniciativas previas en los cuatro programas actuales de la fundación. La donación inicial de libros se convirtió en la Biblioteca Móvil B-Olivia con casi siete mil ejemplares, el apoyo familiar evolucionó en el programa de Desarrollo de Primera Infancia y Familias Saludables, y la clase de inglés se fortaleció en la virtualidad como ESL HOPE. Este desarrollo ha impulsado el crecimiento de su cuerpo de voluntarios, lo que les permite seguir llevando esperanza.",
            quote: "«El reino de los cielos es semejante a un grano de mostaza, que un hombre sembró en su campo. Sin duda, esta es la más pequeña de todas las semillas; pero, cuando crece, es la más grande de las plantas; se hace árbol, y hasta las aves del cielo vienen y hacen nidos en sus ramas.»",
            reference: "Mateo 13:31-32",
            mediaType: "text",
            mediaSrc: null,
            alt: null
        }
    ];

    // Auto-avanzar cada 5 segundos
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 8000);
        return () => clearInterval(interval);
    }, [slides.length]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 2) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 2 + slides.length) % slides.length);
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    return (
        <div className="hero-container">
            <section className="hero2-title">
                <div className="hero-title-overlay">
                    <div className="hero-title-content">
                        <h1 className="hero-main-title">En Bolivia desde 2011</h1>
                        <p className="hero-subtitle">
                            Servimos a la comunidad<br />
                            llevando esperanza.
                        </p>
                        <div className="hero-btn-container">
                            <Link to="/llevaesperanza" className="hero-donate-btn">
                                LLEVA ESPRANZA
                            </Link>
                            <img src={flechaIcon} alt="Flecha" className="hero-arrow-icon" />
                        </div>
                    </div>
                </div>
            </section>
            {/* Carrusel Hero */}
            <section className="hero-carousel">
                <div className="carousel-content">
                    {/* Lado izquierdo - Texto */}
                    <div className="carousel-text">
                        <h1 className="carousel-title">{slides[currentSlide].title}</h1>
                        <p className="carousel-description">{slides[currentSlide].description}</p>
                        
                        {/* Cita bíblica (solo para slide 5) */}
                        {slides[currentSlide].quote && (
                            <div className="carousel-quote">
                                <p className="quote-text">{slides[currentSlide].quote}</p>
                                <p className="quote-reference">{slides[currentSlide].reference}</p>
                            </div>
                        )}
                        
                        {/* Indicadores de slides */}
                        <div className="carousel-indicators">
                            {slides.map((_, index) => (
                                <button
                                    key={index}
                                    className={`indicator ${index === currentSlide ? 'active' : ''}`}
                                    onClick={() => goToSlide(index)}
                                    aria-label={`Ir a slide ${index + 1}`}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Lado derecho - Media (imagen o video) */}
                    {slides[currentSlide].mediaType !== 'text' && (
                        <div className="carousel-media">
                            {slides[currentSlide].mediaType === 'video' ? (
                                <iframe
                                    className="carousel-video"
                                    src={slides[currentSlide].mediaSrc}
                                    title={slides[currentSlide].alt}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            ) : (
                                <img
                                    className="carousel-image"
                                    src={slides[currentSlide].mediaSrc}
                                    alt={slides[currentSlide].alt}
                                />
                            )}
                        </div>
                    )}
                </div>

                {/* Botones de navegación */}
                <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Slide anterior">
                    ‹
                </button>
                <button className="carousel-arrow next" onClick={nextSlide} aria-label="Siguiente slide">
                    ›
                </button>
            </section>
        </div>
    );
}

export default Hero;
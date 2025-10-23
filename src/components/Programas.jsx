import '../styles/Programas.css';
import biblioteca from '../images/biblioteca.png';
import dpi from '../images/DPI.png';
import eslImage from '../images/ESL.png'; 
import voluntariado from '../images/Voluntariado.jpg';

function Programas() {
    const programas = [
        {
            id: 1,
            titulo: "Biblioteca Móvil B-Olivia",
            descripcion: "Contamos con una librería con casi 7 mil libros de alta calidad en español y en inglés enfocados en niños desde los 0 años.",
            boton: "Leer más",
            imagen: biblioteca, 
            tipo: "azul"
        },  
        {
            id: 2,
            titulo: "Desarrollo de la primera infancia y familias saludables",
            descripcion: "Apoyo individualizado a familias con acceso limitado de recursos.",
            boton: "Leer más",
            imagen: dpi,
            tipo: "celeste"
        },
        {
            id: 3,
            titulo: "English as a Second Language (ESL)",
            descripcion: "Clases virtuales de inglés a la comunidad en general y a personas de recursos limitados.",
            boton: "Leer más",
            imagen: eslImage,
            tipo: "azul"
        },
        {
            id: 4,
            titulo: "Desarrollo de voluntariado",
            descripcion: "Movilización y capacitación de voluntarios locales e internacionales.",
            boton: "Leer más",
            imagen: voluntariado,
            tipo: "celeste"
        }
    ];

    return (
        <section className="programas-section">
            <div className="container">
                <h2 className="programas-titulo">PROGRAMAS</h2>
                <div className="programas-grid">
                    {programas.map((programa) => (
                        <div key={programa.id} className={`programa-card ${programa.tipo}`}>
                            <div className="programa-contenido">
                                <div className="programa-imagen">
                                    <img 
                                        src={programa.imagen} 
                                        alt={programa.titulo}
                                        onError={(e) => {
                                            console.log('Error loading image:', programa.imagen);
                                        }}
                                    />
                                </div>
                                <div className="programa-texto">
                                    <h3>{programa.titulo}</h3>
                                    <p>{programa.descripcion}</p>
                                    <button className="btn-leer-mas">{programa.boton}</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Programas;
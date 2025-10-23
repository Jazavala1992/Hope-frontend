import '../Biblioteca Styles/Cardlibros.css';

function Cardlibros() {
  return (
    <div className="card_container">
        <div className="card_libro">
          <img src="https://www.brunolibros.es/images/libros/grande/9788469627990-nunca-des-de-comer-a-un-tiburon-libros-manipulativos.jpg" alt="Portada del libro" />
          <h3>Título del Libro</h3>
          <p>Autor: Nombre del Autor</p>
          <p>Descripción breve del libro.</p>
          <p>Disponibilidad: Disponible</p>
          <button>Más Información</button>
        </div>
    </div>
  );
}

export default Cardlibros;
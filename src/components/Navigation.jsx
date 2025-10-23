import { Link, useNavigate } from 'react-router-dom';
import { useState, useRef } from 'react';
import logo from '../images/logo.webp';
import '../styles/Navigation.css';

function Navigation() {
  const navigate = useNavigate();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownTimeout = useRef(null);

  const handleProgramClick = (program) => {
    navigate(`/programas/${program}`);
  };

  // Mantener abierto mientras el mouse esté sobre el trigger o el menú
  const handleMouseEnter = () => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current);
    setDropdownOpen(true);
  };
  const handleMouseLeave = () => {
    dropdownTimeout.current = setTimeout(() => setDropdownOpen(false), 120);
  };

  return (
    <nav className="navbar-custom">
      <div className="navbar-content">
        <div className="navbar-brand-custom">
          <img alt="logo" src={logo} className="navbar-logo" />
        </div>
        <ul className="navbar-links">
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/conocenos">Conócenos</Link></li>
          <li
            className="navbar-dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <span>Programas</span>
            <ul
              className="dropdown-menu-custom"
              style={{ display: dropdownOpen ? 'block' : 'none' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <li onClick={() => navigate('/programas')} style={{color:'#283890'}}>Programas</li>
              <li onClick={() => handleProgramClick('biblioteca')}>Biblioteca Móvil B-Olivia</li>
              <li onClick={() => handleProgramClick('dpi')}>DPI & Familias Saludables</li>
              <li onClick={() => handleProgramClick('esl')}>ESL - HOPE English as a Second Language</li>
              <li onClick={() => handleProgramClick('voluntariado')}>Voluntariado</li>
            </ul>
          </li>
          <li><Link to="/biblioteca">Prestamo de libros</Link></li>
          <li><Link to="/contactanos">Contáctanos</Link></li>
        </ul>
        <Link to="/Llevaesperanza" className="btn-esperanza">LLEVA ESPERANZA</Link>
      </div>
    </nav>
  );
}

export default Navigation;
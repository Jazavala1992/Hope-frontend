import '../styles/Footer.css';
import logo from '../images/logo.webp';
import mapa from '../images/mapa.png';
import facebookIcon from '../iconos/facebook.png';
import instagramIcon from '../iconos/instagram.png';
import correoIcon from '../iconos/correo.png';

function Footer() {
    return (
        <div className='footer-wrapper'>
            {/* Sección de llamada a la acción */}
            <section className="footer-cta-section">
                <div className="footer-cta-content">
                    <div className="footer-cta-text">
                        <h2>Sé parte del cambio con nosotros</h2>
                        <p>Únete a nuestra causa</p>
                    </div>
                    <button className="footer-cta-button">
                        LLEVA ESPERANZA
                    </button>
                </div>
            </section>

            {/* Footer principal */}
            <footer className="footer-section">
                <div className="footer-container">
                    <div className="footer-content">
                        {/* Logo y información */}
                        <div className="footer-column footer-logo-column">
                            <img src={logo} alt="HOPE Worldwide Bolivia" className="footer-logo" />
                        </div>

                        {/* Conócenos */}
                        <div className="footer-column">
                            <h3 className="footer-title">Conócenos</h3>
                            <ul className="footer-links">
                                <li><a href="/quienes-somos">¿Quiénes somos?</a></li>
                                <li><a href="/mision-vision">Misión y visión</a></li>
                                <li><a href="/historia">Nuestra historia</a></li>
                                <li><a href="/valores">Nuestros valores</a></li>
                            </ul>
                        </div>

                        {/* Mapa */}
                        <div className="footer-column footer-map-column">
                            <img src={mapa} alt="Ubicación HOPE Bolivia" className="footer-map" />
                        </div>

                        {/* Contáctanos */}
                        <div className="footer-column">
                            <h3 className="footer-title">Contáctanos</h3>
                            <div className="footer-social">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon facebook">
                                        <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                                    </div>
                                </a>
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon instagram">
                                        <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                                    </div>
                                </a>
                                <a href="mailto:contacto@hope.bo">
                                    <div className="social-icon email">
                                        <img src={correoIcon} alt="Correo" className="social-icon-img" />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
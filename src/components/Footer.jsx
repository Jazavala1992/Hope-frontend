import '../styles/Footer.css';
import { Link } from 'react-router-dom';
import logo from '../images/logo.webp';
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
                    <Link to="/llevaesperanza">
                    <button className="footer-cta-button">
                        LLEVA ESPERANZA
                    </button>
                    </Link>
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
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2181780864496!2d-68.08132492486717!3d-16.51162168424755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e88d59b71%3A0x7f8a9b9b9b9b9b9b!2sFW59%2BCJ9%2C%20Av.%20Montenegro%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1733256789000!5m2!1ses!2sbo"
                                width="100%"
                                height="200"
                                style={{ border: 0, borderRadius: '8px' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Mapa de ubicación HOPE Bolivia"
                                className="footer-map"
                            ></iframe> 
                        </div>

                        {/* Contáctanos */}
                        <div className="footer-column">
                            <h3 className="footer-title">Contáctanos</h3>
                            <div className="footer-social">
                                <a href="https://www.facebook.com/HOPEwwBolivia" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon facebook">
                                        <img src={facebookIcon} alt="Facebook" className="social-icon-img" />
                                    </div>
                                </a>
                                <a href="https://www.instagram.com/hopewwbo/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank" rel="noopener noreferrer">
                                    <div className="social-icon instagram">
                                        <img src={instagramIcon} alt="Instagram" className="social-icon-img" />
                                    </div>
                                </a>
                                <Link to="/contactanos">
                                    <div className="social-icon email">
                                        <img src={correoIcon} alt="Correo" className="social-icon-img" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Footer;
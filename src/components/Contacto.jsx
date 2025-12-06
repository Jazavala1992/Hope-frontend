import { useState } from 'react';
import '../styles/Contacto.css';
import facebookIcon from '../iconos/facebook.png';
import instagramIcon from '../iconos/instagram.png';
import whappicon from '../iconos/whapp.webp';

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    ciudad: '',
    telefono: '',
    referencia: '',
    mensaje: ''
  });

  const [status, setStatus] = useState({
    submitting: false,
    message: '',
    type: '' // 'success' o 'error'
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    setStatus({ submitting: true, message: '', type: '' });

    try {
      const response = await fetch('http://localhost:3002/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          submitting: false,
          message: data.message,
          type: 'success'
        });
        
        // Limpiar formulario
        setFormData({
          nombre: '',
          correo: '',
          ciudad: '',
          telefono: '',
          referencia: '',
          mensaje: ''
        });

        // Ocultar mensaje después de 5 segundos
        setTimeout(() => {
          setStatus({ submitting: false, message: '', type: '' });
        }, 5000);
      } else {
        setStatus({
          submitting: false,
          message: data.message || 'Error al enviar el mensaje',
          type: 'error'
        });
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        submitting: false,
        message: 'Error de conexión. Verifica que el servidor esté corriendo.',
        type: 'error'
      });
    }
  };

  return (
    <div className="contacto-container">
      <div className="contacto-content">
        {/* Sección del formulario */}
        <div className="contacto-form-section">
          <h2 className="contacto-titulo">Datos de contacto</h2>
          <p className="contacto-subtitulo">
            Puede contactarse con nosotros escribiéndonos al correo electrónico:{' '}
            <a href="mailto:zavachs1992@gmail.com" className="contacto-email">
              zavachs1992@gmail.com
            </a>{' '}
            o usando el siguiente formulario:
          </p>

          <form className="contacto-form" onSubmit={handleSubmit}>
            {status.message && (
              <div className={`form-message ${status.type}`}>
                {status.message}
              </div>
            )}
            
            <div className="form-row">
              <input
                type="text"
                name="nombre"
                placeholder="Su nombre *"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="email"
                name="correo"
                placeholder="Su correo *"
                value={formData.correo}
                onChange={handleChange}
                required
                className="form-input"
              />
              <input
                type="text"
                name="referencia"
                placeholder="Referencia*"
                value={formData.referencia}
                onChange={handleChange}
                required
                className="form-input"
              />
            </div>

            <div className="form-row">
              <input
                type="text"
                name="ciudad"
                placeholder="Ciudad"
                value={formData.ciudad}
                onChange={handleChange}
                className="form-input"
              />
              <input
                type="tel"
                name="telefono"
                placeholder="Teléfono"
                value={formData.telefono}
                onChange={handleChange}
                className="form-input"
              />
            </div>

            <div className="form-row">
              <textarea
                name="mensaje"
                placeholder="Su mensaje"
                value={formData.mensaje}
                onChange={handleChange}
                className="form-textarea"
                rows="6"
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="form-submit-btn"
              disabled={status.submitting}
            >
              {status.submitting ? 'ENVIANDO...' : 'ENVIAR'}
            </button>
          </form>
        </div>

        {/* Sección de dirección */}
        <div className="contacto-direccion-section">
          <h2 className="direccion-titulo">Dirección</h2>
          
          <div className="direccion-mapa">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.2181780864496!2d-68.08132492486717!3d-16.51162168424755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206e88d59b71%3A0x7f8a9b9b9b9b9b9b!2sFW59%2BCJ9%2C%20Av.%20Montenegro%2C%20La%20Paz!5e0!3m2!1ses!2sbo!4v1733256789000!5m2!1ses!2sbo"
              width="100%"
              height="250"
              style={{ border: 0, borderRadius: '8px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación HOPE Bolivia"
            ></iframe>
          </div>

          <div className="direccion-info">
            <p className="direccion-text">
              Av. Montenegro<br />
              La Paz
            </p>

            <div className="direccion-redes">
              <a href="https://api.whatsapp.com/send/?phone=59173525317&text&type=phone_number&app_absent=0" target="_blank" rel="noopener noreferrer" className="red-social">
                <img src={whappicon} alt="Whatspp" className="red-social-icon" />
                <span>Whatsapp</span>
              </a>
              <a href="https://www.facebook.com/HOPEwwBolivia" target="_blank" rel="noopener noreferrer" className="red-social">
                <img src={facebookIcon} alt="Facebook" className="red-social-icon" />
                <span>Facebook</span>
              </a>
              <a href="https://www.instagram.com/hopewwbo/?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw%3D%3D#" target="_blank" rel="noopener noreferrer" className="red-social">
                <img src={instagramIcon} alt="Instagram" className="red-social-icon" />
                <span>Instagram</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contacto;

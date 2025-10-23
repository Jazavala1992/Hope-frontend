import '../styles/Alianzas.css';
import adsis from '../logos/adsis.webp'
import arcoiris from '../logos/Arcoiris.webp'
import lpgc from '../logos/LPGC.png'
import socem from '../logos/SOCEM.png'
import unslp from '../logos/UNSLP.png'
import idc from '../logos/IDC.webp'
import ssj from '../logos/SSJ.webp'
import icoc from '../logos/ICOC.webp'
import calvert from '../logos/Calvert.png'
import USembassy from '../logos/USembassy.webp'
import umsa from '../logos/UMSA.webp'

function Alianzas() {
    const alianzas = [
        // Primera fila
        [
            { nombre: "ADSIS", logo: adsis },
            { nombre: "Fundación Arco Iris", logo: arcoiris},
            { nombre: "La Paz Golf Club", logo: lpgc},
            { nombre: "SOCEM", logo: socem },
            { nombre: "UNSLP", logo: unslp},
            { nombre: "IDC", logo: idc },
            { nombre: "San José", logo: ssj }
        ],
        // Segunda fila
        [
            { nombre: "ICOC", logo: icoc },
            { nombre: "ACS Calvert", logo: calvert },
            { nombre: "US Embassy Bolivia", logo: USembassy},
            { nombre: "UMSA", logo: umsa }
        ]
    ];

    return (
        <section className="alianzas-section">
            <div className="container">
                <h2 className="alianzas-titulo">ALIANZAS CLAVE</h2>
                
                <div className="alianzas-grid">
                    {alianzas.map((fila, filaIndex) => (
                        <div key={filaIndex} className="alianzas-fila">
                            {fila.map((alianza, index) => (
                                <div key={index} className="alianza-item">
                                    <img 
                                        src={alianza.logo} 
                                        alt={alianza.nombre}
                                        className="alianza-logo"
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="alianzas-cta">
                    <button className="btn-lleva-esperanza">
                        LLEVA ESPERANZA
                    </button>
                    <h3 className="alianzas-subtitle">Únete a nuestra causa</h3>
                </div>
            </div>
        </section>
    );
}

export default Alianzas;
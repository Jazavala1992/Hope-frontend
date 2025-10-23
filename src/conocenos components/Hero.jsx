import '../styles/Hero.css';

function Hero() {
    return (
        <div className="hero-container">
            {/* Sección principal con imagen de fondo */}
            <section className="hero-section">
                <div className="hero-overlay">
                    <div className="hero-content">
                        <h1 className="hero-title">¿QUIÉNES SOMOS?</h1>
                        <p className="hero-description">
                            Somos HOPE worldwide, una organización 
                            benéfica internacional que transforma 
                            vidas a través de la compasión y el 
                            compromiso de su personal y voluntarios 
                            dedicados, brindando servicios 
                            comunitarios sostenibles y de alto 
                            impacto.
                        </p>
                    </div>
                </div>
            </section>

            {/* Sección de texto informativo */}
            <section className="info-section">
                <div className="container">
                    <div className="info-content">
                        <p className="info-paragraph">
                            <strong>Fundada en 1991</strong>, surgió como una respuesta de las International Churches of Christ al llamado central 
                            de la Biblia de servir a los pobres materiales, a los enfermos y a los que sufren en todo el mundo. Desde 
                            entonces, HOPE worldwide ha sido una organización comprometida con servir, enseñar, sanar y amar a 
                            comunidades vulnerables a causa de la pobreza, las enfermedades o los desastres. Hoy en día, HOPE 
                            worldwide atiende a cerca de 1 millón de personas al año en todos los continentes habitados.
                        </p>

                        <p className="info-paragraph">
                            <strong>HOPE worldwide Bolivia</strong> es una fundación afiliada a HOPE worldwide internacional, sin fines de lucro y 
                            con bases cristianas, que desde el año 2011 trabaja por las poblaciones en desventaja material en 
                            Bolivia, gracias a alianzas estratégicas que comparten su propósito. Después de más de una década al 
                            servicio de la ciudad de La Paz, ha identificado la educación como una necesidad crucial para 
                            promover el desarrollo de las comunidades que sufren en nuestro país. Por ello, actualmente, centra sus 
                            esfuerzos en promover la educación, la tutoría y el empoderamiento de comunidades vulnerables, con 
                            el objetivo de llevar esperanza y transformar vidas, una persona a la vez.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Hero;
import '../conocenos-styles/Valores.css'; 
import comprimiso from '../iconos/compromiso.png';
import servicio from '../iconos/servicio.png';
import bienestar from '../iconos/bienestar.png';
import fe from '../iconos/fe.png';
import compasion from '../iconos/compasion.png';
import cruz from '../iconos/cruz.png';
import colaboracion from '../iconos/colaboracion.png';

function Valores () {
  return (
    <div className="valores-container">
      <p className='valores-title' >NUESTROS VALORES</p>
      <p className='escritura-valores'> Porque tuve hambre, y ustedes me dieron de comer; tuve sed, y me dieron de beber; fui forastero, y me recibieron; estuve desnudo, y me cubrieron; estuve enfermo, y me visitaron; estuve en la cárcel, y vinieron a visitarme.
Mateo 25: 31-46</p>
        <div className="valores-cards">
            <div className="cristocentrico"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={cruz} alt="Cruz" />
                        <h3 className="valores-card-title">Cristocentrismo</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Jesús es nuestro modelo a seguir y su amor nos impulsa a servir con compasión y dedicación.</p>
                    </div>
                </div>
            </div>
            <div className="compasion"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={compasion} alt="Compasion" />
                        <h3 className="valores-card-title">Compasión</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Nos acercamos con empatía y amor a quienes más lo necesitan, reflejando el corazón de Cristo.</p>
                    </div>
                </div>
            </div>
            <div className="fe">  
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={fe} alt="Fe" />
                        <h3 className="valores-card-title">Fe en las semillas</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Creemos en el potencial de cada persona y confiamos en que pequeñas acciones generan grandes transformaciones.</p>
                    </div>
                </div>
            </div>
            <div className="bienestar"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={bienestar} alt="Bienestar" />
                        <h3 className="valores-card-title">Bienestar integral</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Promovemos el desarrollo físico, emocional, espiritual y social de las comunidades que servimos.</p>
                    </div>
                </div>
            </div>
            <div className="colaboracion"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={colaboracion} alt="Colaborax" />
                        <h3 className="valores-card-title">Colaboración transformadora</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Trabajamos junto a comunidades, instituciones y voluntarios para crear un impacto duradero y sostenible.</p>
                    </div>
                </div>
            </div>
            <div className="servicio"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={servicio} alt="Servicio" />
                        <h3 className="valores-card-title">Servicio respetuoso</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Honramos la dignidad de cada persona, escuchando sus necesidades y trabajando juntos con respeto.</p>
                    </div>
                </div>
            </div>
            <div className="compromiso"> 
                <div className="card-content">
                    <div className="card-front-simple">
                        <img src={comprimiso} alt="Compromiso" />
                        <h3 className="valores-card-title">Compromiso</h3>
                    </div>
                    <div className="card-back-simple">
                        <p className="card-description">Dedicamos nuestro tiempo, recursos y esfuerzo con responsabilidad y perseverancia en cada proyecto.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}
export default Valores;

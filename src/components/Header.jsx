import { Link } from "react-router-dom";
import img1 from "../images/img1.jpg";
import '../styles/Header.css';

function Header() {
  return (
    <div className="container-fluid header-container">
      <div className="row header-row">
        <div className="col-12 col-md-5 header-content">
          <h1 className="header-title">
            "Trayendo esperanza, cambiando vidas"
          </h1>
          <Link to="/conocenos" className="header-button">
            Conócenos
          </Link>
        </div>
        
        <div className="col-12 col-md-7 header-image-container">
          <img
            src={img1}
            alt="Imagen de la organización HOPE"
            className="img-fluid header-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillLinkedin,
  AiFillFacebook,
} from "react-icons/ai";

export default function Foter() {
  return (
    <footer className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="contenedor-foter">
        <div className="left">
          <div className="footer-data">
            <h3> Nosotros </h3>
            <div className="footer-data_item">
              <p>
                En ****** pretendemos la mejora del estado del cuerpo mediante
                el entrenamiento de los músculos. El culturismo sólo pretende
                mejorar los músculos. El fitness implica en algunos casos que se
                pierda masa corporal. El culturismo requiere que se aumente la
                masa corporal.
              </p>
            </div>
          </div>
        </div>
        <div className="center">
          {/* Contacto */}
          <div className="footer-data">
            <h3> Contacto </h3>
            <div className="footer-data_item">
              {/* <Image src={emailImg} alt="Email" /> */}
              <a>correo@gmail.com</a>
            </div>
            <div className="footer-data_item">
              {/* <Image src={movileImg} alt="Movil" /> */}
              <a>+52999********</a>
            </div>
            <div className="footer-data_item">
              {/* <Image src={locationImg} alt="Ubicacion" /> */}
              <p>
                MX - Estado / Ciudad / CP
                <br />
                Calle: *******
              </p>
            </div>
          </div>
        </div>
        <div className="right">
          {/* Redes Sociales */}
          <div className="footer-data">
            <h3> Redes sociales </h3>
            <div className="footer-data_item">
              <a className="social">
                <AiFillFacebook />
                Facebook
              </a>
            </div>
            <div className="footer-data_item">
              <a className="social">
                <AiFillInstagram />
                Instagram
              </a>
            </div>
            <div className="footer-data_item">
              <a className="social">
                <AiFillLinkedin />
                Linkedin
              </a>
            </div>
            <div className="footer-data_item">
              <a className="social">
                <AiFillTwitterCircle />
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <span className="copyright">
          © Copyright - 3DSeller | All Right Reserverd
        </span>
      </div>
    </footer>
  );
}

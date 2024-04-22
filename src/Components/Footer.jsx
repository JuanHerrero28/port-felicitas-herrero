import "./Footer.css";
import NameComponent from "../Common/NameComponent";
// Archivo CSS donde añadirás tus estilos

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="paragraphs-1">
        <p className="parrafo-1">
        ¡Me encantaría que trabajemos juntos!
        </p>
      </div>
      <div className="paragraphs">
        <p className="parrafo-2">[CONTACTO]</p>
      </div>
      <ul className="footer-list">
      <li>
          <a href="https://www.linkedin.com/in/felicitas-herrero-b7606119a/" target="_blank"><NameComponent name="linkedin"/></a>
        </li>
        <li>
          <a href="mailto:feliherrero.desing@gmail.com" target="_blank"><NameComponent name="mail"/></a>
        </li>
        <li>
          <a href="https://www.behance.net/herrerofel4c03" target="_blank"><NameComponent name="behance" /></a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

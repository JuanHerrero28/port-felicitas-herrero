import "./Footer.css"; // Archivo CSS donde añadirás tus estilos

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="paragraphs-1">
        <p className="parrafo-1">
        Me encantaría que trabajemos juntos!
        </p>
      </div>
      <div className="paragraphs">
        <p className="parrafo-2">[CONTACTO]</p>
      </div>
      <ul className="footer-list">
        <li>
          <a href="#linkedin">Linkedin</a>
        </li>
        <li>
          <a href="#mail">Mail</a>
        </li>
        <li>
          <a href="#behance">Behance</a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;

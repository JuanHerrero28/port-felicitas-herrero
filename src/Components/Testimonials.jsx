
import { useContextGlobal } from "../Utils/global.context";
import './Testimonials.css';

const testimonios = [
  {
    frase: "Qué dicen mis clientes",
    parrafo:
      "“me encantan los diseños, están muy guay!, ha sido un placer trabajar contigo, hiciste un gran trabajo, y seguiré en contacto contigo para futuros trabajos”",
    nombre: "Adrián Devés",
    profesion: "DJ - Productor",
  },
];

const Testimonials = () => {
  const { state } = useContextGlobal();
  const imagenTestimonio = "./images/star-4.png";

  
  return (
    <div className={state.theme ? "testimonials-container light-background" : "testimonials-container dark-background"}>
      <div className="testimonial">
        <img src={imagenTestimonio} alt="Imagen del testimonio" />
        {testimonios.map((testimonio, index) => (
          <div key={index}>
            <p className={state.theme ? "frase-test light-text" : "frase-test dark-text"}>{testimonio.frase}</p>
            <p className={state.theme ? "uppercase-text light-text" : "uppercase-text dark-text"}>{testimonio.parrafo}</p>
            <p className={state.theme ? "nombre-test light-text" : "nombre-test dark-text"}>{testimonio.nombre}</p>
            <p className={state.theme ? "prof-test light-text" : "prof-test dark-text"}>{testimonio.profesion}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;



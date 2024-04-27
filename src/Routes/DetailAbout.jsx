import BtnTop from "../Common/BtnTop";
import { useState, useEffect } from "react";
import Loading from "../Common/Loading";
import "./DetailAbout.css";
import Cursor from "../Common/Cursor";
import { useContextGlobal } from "../Utils/global.context";

/* const aboutData = [
  {
    id: 1,
    images: [
      { src: "/images/Ellipse-9.png", alt: "Imagen 1" },
      { src: "/images/adrian.png", alt: "Imagen 2" },
    ],
    titles: ["SOBRE MÍ", "Experiencia"],
    paragraphs: [
      "¡Hola! Soy Felicitas Herrero, diseñadora gráfica profesional en pleno crecimiento, graduada en la Universidad de Buenos Aires (FADU). Mi pasión por el diseño se fusiona con mi amor por la música, un mundo en el que he estado inmersa mientras me quiero expandir hacia nuevos conocimientos, especialmente en el diseño web, con un enfoque particular en la interfaz de usuario (UI). Nací en la ciudad de Nueve de Julio (Provincia de Buenos Aires), mi búsqueda de conocimiento y crecimiento me llevó a Buenos Aires a los 17 años para perseguir mis sueños y expandir mis habilidades en diseño. Durante tres años he estado explorando el mundo del freelance, llevando a cabo proyectos independientes que me desafían a crecer y evolucionar como profesional.",
      "Este portfolio es más que un proyecto práctico; es una manifestación de mi dedicación y pasión por el diseño.  Me divertí mucho haciéndolo y me desafié a mí misma en cada paso del camino, lo que me hizo sentir increíblemente bien. Este proyecto fue en conjunto con un amigo desarrollador, donde la dinámica de trabajar juntos fue muy fluida, he puesto todo mi foco en la creación de experiencias visuales cautivadoras y funcionales. Aquí encontrarás un vistazo a mi trabajo, desde proyectos de diseño gráfico hasta creaciones web, todos ellos creados con amor y dedicación. En mis trabajos predominan las figuras geométricas con la intersección entre formas, colores y espacios de manera experimental para expresar creatividad y originalidad.",
    ],
    numberedList: [
      "2022 Diseñadora gráfica part time - Atomic Kitchens",
      "2022 - 2024 Diseñadora gráfica independiente, clientes: Dj y productores musicales",
    ],
  },
]; */

const DetailAbout = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { state } = useContextGlobal();

  const themeStyle = state.theme ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" };

  // Simula la carga de datos o recursos
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Cuando se simula que los datos se cargan, cambia el estado de isLoading a false
    }, 1000); // Simula una carga de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Muestra el componente de carga si isLoading es true
      ) : (
        <div className="detail-about-grid" style={themeStyle}>
          <div className="title-about">
            <h2 className="title-ab-1">SOBRE MÍ</h2>
          </div>
          <div className="subtitle">
            <h2 className="subtitle-about">Experiencia</h2>
          </div>
          <div className="paragraph-1">
            <p style={themeStyle}>
              ¡Hola! Soy Felicitas Herrero, diseñadora gráfica profesional en
              pleno crecimiento, graduada en la Universidad de Buenos Aires
              (FADU). Mi pasión por el diseño se fusiona con mi amor por la
              música, un mundo en el que he estado inmersa mientras me quiero
              expandir hacia nuevos conocimientos, especialmente en el diseño
              web, con un enfoque particular en la interfaz de usuario (UI).
              Nací en la ciudad de Nueve de Julio (Provincia de Buenos Aires),
              mi búsqueda de conocimiento y crecimiento me llevó a Buenos Aires
              a los 17 años para perseguir mis sueños y expandir mis habilidades
              en diseño. Durante tres años he estado explorando el mundo del
              freelance, llevando a cabo proyectos independientes que me
              desafían a crecer y evolucionar como profesional.
            </p>
          </div>
          <ul className="numbered-list" style={themeStyle}>
            <li>
              2022 Diseñadora gráfica part time -{" "}
              <strong style={{ fontWeight: "bold" }}>Atomic Kitchens</strong>
            </li>
            <li>
              2022 - 2024 Diseñadora gráfica independiente, clientes:{" "}
              <strong style={{ fontWeight: "bold" }}>
                Dj y productores musicales
              </strong>
            </li>
          </ul>
          <div className="paragraph-2">
            <p style={themeStyle}>
              Este portfolio es más que un proyecto práctico; es una
              manifestación de mi dedicación y pasión por el diseño. Me divertí
              mucho haciéndolo y me desafié a mí misma en cada paso del camino,
              lo que me hizo sentir increíblemente bien. Este proyecto fue en
              conjunto con un amigo desarrollador, donde la dinámica de trabajar
              juntos fue muy fluida, he puesto todo mi foco en la creación de
              experiencias visuales cautivadoras y funcionales. Aquí encontrarás
              un vistazo a mi trabajo, desde proyectos de diseño gráfico hasta
              creaciones web, todos ellos creados con amor y dedicación. En mis
              trabajos predominan las figuras geométricas con la intersección
              entre formas, colores y espacios de manera experimental para
              expresar creatividad y originalidad.
            </p>
          </div>
          <div className="ctn-img1">
            <img className="image1" src="/images/star-4.png" alt="imagen1" />
          </div>
          <div className="ctn-btn">
            <button className="aboutButton">descargar cv</button>
          </div>
          <div className="ctn-img2">
            <img className="image-2" src="/images/feli.png" alt="imagen2" />
          </div>
          <div className="ctn-final">
            <p>
              ¡Gracias por visitar mi espacio creativo! Espero que disfrutes
              explorando mi trabajo tanto como yo disfruté creándolo!.
            </p>
          </div>
          <BtnTop />
          <Cursor/>
        </div>
      )}
    </>
  );
};

export default DetailAbout;


/* import { useParams } from "react-router-dom";
import "./DetailAbout.css";

const aboutData = [
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
];

const DetailAbout = () => {
  const { id } = useParams();
  const projectAbout = aboutData.find((project) => project.id === parseInt(id));

  return (
    <>
    <div className="detail-about-grid">
      <div className="title">{projectAbout.titles[0]}</div>
      <div className="paragraph">{projectAbout.paragraphs[0]}</div>
      <div className="subtitle">{projectAbout.titles[1]}</div>
      <ul className="numbered-list">
        {projectAbout.numberedList.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="paragraph">{projectAbout.paragraphs[1]}</div>
      <img className="image" src={projectAbout.images[0].src} alt={projectAbout.images[0].alt} />
      <button className="button">Tu botón aquí</button>
      <img className="image" src={projectAbout.images[1].src} alt={projectAbout.images[1].alt} />
    </div>

    </>
  );
};

export default DetailAbout; */


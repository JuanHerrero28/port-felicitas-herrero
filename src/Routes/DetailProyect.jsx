import { Link, useParams } from "react-router-dom";
import "./DetailProyect.css";
import { useState, useEffect } from "react";
import Loading from "../Common/Loading";
import BtnTop from "../Common/BtnTop";

const projectData = [
  {
    id: 1,
    images: [
      { src: "/images/Frame14.png", alt: "Imagen 1" },
      { src: "/images/adrian.png", alt: "Imagen 2" },
      { src: "/images/ad-1.png", alt: "Imagen 3" },
      { src: "/images/ad-2.png", alt: "Imagen 4" },
      { src: "/images/ad-3.png", alt: "Imagen 5" },
      { src: "/images/ad-3.png", alt: "Imagen 6" },
      { src: "/images/ad-4.png", alt: "Imagen 7" },
      { src: "imagen8.jpg", alt: "Imagen 8" },
    ],
    titles: [
      "PRESSKIT DJ",
      "CRÉDITOS",
      "PROCESO",
      "1.Investigación y Entendimiento del Cliente",
      "2.desarrollo de contenido y elementos visuales",
      "3.DISEÑO Y PRESENTACIÓN DE PROPUESTAS",
      "4.REFINAMIENTO Y ENTREGA DEL PRESSKIT",
    ],
    paragraphs: [
      "Implica crear una presentación completa y visualmente atractiva que destaque la biografía del artista, fotos de alta calidad que reflejen su imagen, muestras de música en formato de alta calidad, comunicados de prensa sobre lanzamientos recientes y eventos importantes, datos de contacto actualizados, logotipo y diseño coherente que represente su marca personal, enlaces a redes sociales y sitio web para mayor información y seguimiento. El objetivo es proporcionar a los medios de comunicación, promotores de eventos y colaboradores potenciales una visión completa y convincente de la carrera y el talento del artista.",
      "Este primer paso implica sumergirse en el mundo del cliente para comprender quién es, qué hace y qué desea lograr con el presskit. Esto significa investigar sobre su música, su estilo, su historia y su audiencia. Mantener una comunicación cercana con el cliente es crucial para entender sus necesidades y expectativas. A través de videollamadas charlamos, me mostró otros presskit y empezamos a armar un moodboard juntos. Fui anotando palabras y frases claves que me iba diciendo a lo largo de la charla. Si el cliente no tiene una idea clara de lo que quiere, es mi responsabilidad guiarlo y ayudarlo a definir sus objetivos y su identidad de marca.",
      "Una vez que tengo una comprensión sólida del cliente, comienzo a trabajar en el contenido y los elementos visuales del presskit. Esto incluye redactar una biografía que capture la esencia y la trayectoria del artista, seleccionar fotos de alta calidad que transmitan su imagen y personalidad. Cada elemento debe ser cuidadosamente seleccionado y elaborado para reflejar fielmente la identidad y los objetivos del cliente.",
      "Una vez que tengo todo el contenido listo, comienzo a diseñar el presskit. Esto implica pensar en la disposición de los elementos, el uso de colores y tipografías que se alineen con la imagen de marca del cliente, y la creación de un diseño que sea atractivo visualmente y fácil de leer. Presento al cliente la primera propuesta de diseño, explicando las razones detrás de cada decisión tomada. Es importante recibir retroalimentación del cliente en esta etapa para asegurarme de que estamos en la misma página y hacer los ajustes necesarios.",
      "Párrafo 5",
      "Párrafo 6",
      "Una vez que el cliente ha revisado y aprobado el diseño del presskit, en este caso desde la primera propuesta el cliente se sintió muy satisfecho con el diseño, procedo con el refinamiento final. Esto implica realizar ajustes finos en el diseño, corregir cualquier error o problema que pueda haber surgido y asegurarse de que todo esté listo para su entrega. Entrego el presskit final en los formatos requeridos por el cliente, en este caso el formato es digital, un PDF con sus respectivos enlaces a sus webs para poder distribuirlo fácilmente.",
    ],
    numberedList: [
      "Nombre del cliente: Adrián Devés",
      " Mi rol: diseñar su presskit",
      "Fecha de inicio: 29/02/2024",
      "Fecha de entrega: 10/03/2024",
    ],
    finalProjectUrl: "https://www.behance.net/gallery/196187545/Presskit-Adrian-Devs"
  },
  {
    id: 2,
    images: [
      { src: "/images/img-1.png", alt: "Imagen 1" },
      { src: "/images/img-2.png", alt: "Imagen 2" },
      { src: "/images/img-3.png", alt: "Imagen 3" },
      { src: "/images/img-4.png", alt: "Imagen 4" },
      { src: "/images/img-5.png", alt: "Imagen 5" },
      { src: "/images/img-6.png", alt: "Imagen 6" },
      { src: "/images/img-6.png", alt: "Imagen 7" },
      { src: "imagen8.jpg", alt: "Imagen 8" },
    ],
    titles: [
      "SISTEMAS COMPLEJOS DE IDENTIDAD",
      "CRÉDITOS",
      "PROCESO",
      "1.Investigación y Análisis",
      "2.Estrategia y Planificación",
      "3.DESARROLLO CREATIVO Y DISEÑO",
      "4.IMPLEMENTACIÓN Y EVALUACIÓN",
    ],
    paragraphs: [
      "Desarrollo de estrategia de posicionamiento, comunicación y diseño de sistema gráfico. El presente proyecto aborda la creación de un programa complejo de identidad en el ámbito del branding de ciudades/marca ciudad-país. Con el Municipio de Mercedes como comitente, este trabajo representa una colaboración entre la Universidad Pública y una organización gubernamental, fusionando la enseñanza, la extensión y la investigación en un espacio de encuentro que promueve la responsabilidad social del diseñador y del profesional universitario.",
      "En esta primera etapa, nos enfocamos en comprender a fondo la ciudad de Mercedes y su contexto. Realizamos una investigación exhaustiva sobre su historia, cultura, valores distintivos y aspiraciones. Para obtener una comprensión más profunda, realizamos un estudio de campo en la ciudad misma. Durante nuestra visita, tuvimos el privilegio de tener una charla en persona con el intendente, lo que nos permitió obtener una perspectiva directa sobre las prioridades y visiones del liderazgo local. Además, exploramos lugares emblemáticos de la ciudad, como la Plaza San Martín y la estación de tren. También llevamos a cabo entrevistas con funcionarios de la municipalidad de manera virtual, así como con ciudadanos locales, quienes compartieron sus experiencias cotidianas, valores y percepciones sobre la ciudad.",
      "Con la información recopilada en la etapa de investigación, nos dedicamos a definir una estrategia clara y coherente para el proyecto. Identificamos los objetivos específicos que queríamos lograr con el programa de identidad y definimos nuestra audiencia objetivo. Además, establecimos un plan detallado que incluía plazos, recursos necesarios y actividades específicas para cada fase del proyecto.",
      "En esta fase, nos sumergimos en el proceso creativo para dar vida a la identidad de Mercedes. Desarrollamos conceptos visuales que capturaran la esencia y los valores de la ciudad, incluyendo el diseño del logotipo, la selección de colores, tipografías y otros elementos gráficos. Nos aseguramos de que el diseño fuera versátil y adaptable a diferentes aplicaciones, desde señalética urbana hasta material promocional y presencia en línea.",
      "Párrafo 5",
      "Párrafo 6",
      "Una vez finalizado el diseño, pasamos a la fase de implementación, donde integramos la nueva identidad visual en diversos contextos y medios. Trabajamos en estrecha colaboración con el Municipio de Mercedes para garantizar una implementación efectiva y coherente del programa de identidad. Además, establecimos mecanismos de evaluación para medir el impacto y la efectividad de la nueva identidad, recopilando retroalimentación de la comunidad para realizar ajustes según fuera necesario.",
    ],
    numberedList: ["Municipio del Partido de Mercedes, provincia de Buenos Aires. Cátedra Rico, Diseño Gráfico, FADU-UBA", "Diseño de identidad ", "Fecha de inicio: 11/04/2023", "Fecha de entrega: 11/07/2023"],
    finalProjectUrl: "https://www.behance.net/gallery/178785053/Marca-ciudad-Mercedes-provincia-de-Buenos-Aires"
  },
  {
    id: 3,
    images: [
      { src: "/images/img-1p3.png", alt: "Imagen 1" },
      { src: "/images/img-2p3.png", alt: "Imagen 2" },
      { src: "/images/img-3p3.png", alt: "Imagen 3" },
      { src: "/images/img-4p3.png", alt: "Imagen 4" },
      { src: "/images/img-5p3.png", alt: "Imagen 5" },
      { src: "/images/img-6p3.png", alt: "Imagen 6" },
      { src: "/images/img-6p3.png", alt: "Imagen 7" },
      { src: "imagen8.jpg", alt: "Imagen 8" },
    ],
    titles: [
      "juan",
      "Título 2",
      "Título 3",
      "Título 4",
      "Título 5",
      "Título 6",
      "Título 7",
    ],
    paragraphs: [
      "Párrafo 1",
      "Párrafo 2",
      "Párrafo 3",
      "Párrafo 4",
      "Párrafo 5",
      "Párrafo 6",
      "Párrafo 7",
    ],
    numberedList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    finalProjectUrl: "URL_DEL_PROYECTO_EN_BEHANCE_1"
  },
  {
    id: 4,
    images: [
      { src: "imagen1.jpg", alt: "Imagen 1" },
      { src: "imagen2.jpg", alt: "Imagen 2" },
      { src: "imagen3.jpg", alt: "Imagen 3" },
      { src: "imagen4.jpg", alt: "Imagen 4" },
      { src: "imagen5.jpg", alt: "Imagen 5" },
      { src: "imagen6.jpg", alt: "Imagen 6" },
      { src: "imagen7.jpg", alt: "Imagen 7" },
      { src: "imagen8.jpg", alt: "Imagen 8" },
    ],
    titles: [
      "Título 1",
      "Título 2",
      "Título 3",
      "Título 4",
      "Título 5",
      "Título 6",
      "Título 7",
    ],
    paragraphs: [
      "Párrafo 1",
      "Párrafo 2",
      "Párrafo 3",
      "Párrafo 4",
      "Párrafo 5",
      "Párrafo 6",
      "Párrafo 7",
    ],
    numberedList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    finalProjectUrl: "https://www.behance.net/gallery/167170163/PressKit-Dj-Kalima"
  },
];

const DetailProyect = () => {
  const { id } = useParams();
  const project = projectData.find((project) => project.id === parseInt(id));

  const [isLoading, setIsLoading] = useState(true);
  const [nextProjectClicked, setNextProjectClicked] = useState(false);

  useEffect(() => {
    // Simula una carga de datos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    if (nextProjectClicked) {
      setIsLoading(true);
      setNextProjectClicked(false); // Restablece el estado de nextProjectClicked
    } // Simula un tiempo de carga de 3 segundos

    return () => clearTimeout(timer);
  }, [project, nextProjectClicked]);

  const handleNextProjectClick = () => {
    setIsLoading(true);
    window.scrollTo(0, 0); // Al hacer clic, establece isLoading en true para mostrar el componente Loading
  };

  return (
    <div className="project-detail">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <div className="grid-container-detail">
            <div className="grid-item image1">
              <img src={project.images[0].src} alt={project.images[0].alt} />
            </div>
            <div className="grid-item title1">{project.titles[0]}</div>
            <div className="grid-item title2">{project.titles[1]}</div>
            <div className="grid-item paragraph1">{project.paragraphs[0]}</div>
            <div className="grid-item list">
              <ol>
                {project.numberedList.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ol>
            </div>
            <div className="grid-item image2">
              <img src={project.images[1].src} alt={project.images[1].alt} />
            </div>
            <div className="grid-item title3">{project.titles[2]}</div>
            <div className="grid-item title4">
              <h2 className="title-4">{project.titles[3]}</h2>
              <p className="grid-item paragraph2">{project.paragraphs[1]}</p>
            </div>
            <div className="grid-item image3">
              <img src={project.images[2].src} alt={project.images[2].alt} />
            </div>
            <div className="grid-item image4">
              <img src={project.images[3].src} alt={project.images[3].alt} />
            </div>
            <div className="grid-item title5">
              <h2 className="title-5">{project.titles[4]}</h2>
              <p className="grid-item paragraph3">{project.paragraphs[2]}</p>
            </div>
            <div className="grid-item title6">
              <h2 className="title-6">{project.titles[5]}</h2>
              <p className="grid-item paragraph4">{project.paragraphs[3]}</p>
            </div>
            <div className="grid-item image5">
              <img src={project.images[4].src} alt={project.images[4].alt} />
            </div>
            <div className="grid-item image7">
              <img src={project.images[6].src} alt={project.images[6].alt} />
            </div>
            <div className="grid-item title7">
              <h2 className="title-7">{project.titles[6]}</h2>
              <p className="grid-item paragraph7">{project.paragraphs[6]}</p>
            </div>
          </div>
          <div className="content-btn">
          <a href={project.finalProjectUrl} className="toggle-button" target="_blank" rel="noopener noreferrer">VER PROYECTO FINAL</a>
          </div>
          <div className="pagination-container">
            {project.id !== 1 && (
              <Link
                to={`/detalle/${project.id - 1}`}
                className="nav-button"
                onClick={handleNextProjectClick}
              >
                <i className="material-icons icon-large">keyboard_arrow_left</i>
              </Link>
            )}
            {project.id !== 4 && (
              <Link
                to={`/detalle/${project.id + 1}`}
                className="nav-button"
                onClick={handleNextProjectClick}
              >
                <i className="material-icons icon-large">
                  keyboard_arrow_right
                </i>
              </Link>
            )}
          </div>
        </>
      )}
      <BtnTop/>
    </div>
  );
};

export default DetailProyect;

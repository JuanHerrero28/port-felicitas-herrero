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
      "DISEÑO DE SERVICIOS",
      "CRÉDITOS",
      "PROCESO",
      "1.Investigación Diagnóstica Etnográfica",
      "2.PROCESOS DE INNOVACIÓN",
      "3.PROPOSICIÓN ESTRATÉGICA",
      "4.IMPLEMENTACIÓN Y EVALUACIÓN",
    ],
    paragraphs: [
      "Consiste en desarrollar un proyecto de diseño estratégico basado en diseño de servicios para la Agencia de Recaudación de la Provincia de Buenos Aires (ARBA). El proyecto refiere a la importancia de la información y circulación de conocimiento que es gestionado en el programa. Se deberá desarrollar a partir de la investigación organizacional, con informantes claves referentes, ejercitar metodologías del diseño de servicios para hacer una propuesta de rediseño de procesos, considerando el manejo de la información/comunicación interna y externa como un «servicio» hacia los diferentes usuarios/actores de la organización.",
      "En esta etapa, nos sumergimos en el mundo de la Agencia de Recaudación de la Provincia de Buenos Aires (ARBA) para comprender a fondo sus flujos de proceso, patrones de comportamiento y necesidades, tanto de los usuarios como de la organización institucional. Utilizamos metodologías etnográficas para obtener una comprensión profunda de la situación actual. Durante este proceso, generamos varios entregables que documentaron nuestro trabajo de investigación y proporcionaron información clave para las siguientes etapas del proyecto. Estos entregables incluyeron: investigación diagnóstica etnográfica, mapa del ecosistema, mapa de arquetipos, observación participante/no participante, mapas de empatía, journey maps y service blueprin",
      "Después de identificar los problemas y áreas de mejora en ARBA, nos enfocaremos en desarrollar propuestas innovadoras utilizando metodologías de diseño de servicios. Trabajaremos con los equipos de ARBA para generar una amplia gama de ideas y soluciones que aborden los desafíos identificados. Luego, prototiparemos y probaremos estas soluciones para evaluar su viabilidad y efectividad antes de su implementación a gran escala. Obtendremos retroalimentación de los usuarios y otras partes interesadas para asegurarnos de que las soluciones aborden adecuadamente sus necesidades y expectativas. Finalmente, continuaremos iterando y mejorando las soluciones en función de los comentarios recibidos para garantizar que estén alineadas con los objetivos estratégicos y las necesidades de los usuarios.",
      "En esta fase crítica del proyecto, nos enfocaremos en la creación de una propuesta estratégica completa que servirá como hoja de ruta para la creación e implementación de un sistema gráfico/audiovisual basado en las metodologías del diseño de experiencia de usuario (UX/UI). Esta propuesta no solo delineará los pasos a seguir, sino que también identificará los recursos necesarios para llevar a cabo los cambios propuestos de manera efectiva y eficiente.",
      "Párrafo 5",
      "Párrafo 6",
      "Después de haber desarrollado la propuesta estratégica integral, es crucial seleccionar las tipologías adecuadas que se alineen con nuestros objetivos y enfoques estratégicos. En esta etapa, analizaremos detenidamente las opciones disponibles y evaluaremos cómo cada tipología contribuirá a la implementación exitosa de nuestro sistema gráfico/audiovisual basado en las metodologías del diseño UX/UI. Después de evaluar las características y beneficios de cada tipología, seleccionaremos aquellas que mejor se alineen con nuestros objetivos estratégicos y nos ayuden a cumplir con las necesidades identificadas durante la investigación y el proceso de innovación. Esta selección nos proporcionará una base sólida para la implementación efectiva de nuestro sistema gráfico en ARBA, asegurando una experiencia de usuario óptima y resultados exitosos.",
    ],
    numberedList: ["Agencia de recaudación de la provincia de Buenos Aires (ARBA). Cátedra Rico, Diseño Gráfico, FADU-UBA", "Diseño de servicio", "Fecha de inicio: 12/09/2023", "Fecha de entrega: 12/12/2023"],
    finalProjectUrl: "URL_DEL_PROYECTO_EN_BEHANCE_1"
  },
  {
    id: 4,
    images: [
      { src: "/images/img-11p4.png", alt: "Imagen 1" },
      { src: "/images/img-1p4.png", alt: "Imagen 2" },
      { src: "/images/img-2p4.png", alt: "Imagen 3" },
      { src: "/images/img-3p4.png", alt: "Imagen 4" },
      { src: "/images/img-4p4.png", alt: "Imagen 5" },
      { src: "/images/img-5p4.png", alt: "Imagen 6" },
      { src: "/images/img-6p4.png", alt: "Imagen 7" },
      { src: "imagen8.jpg", alt: "Imagen 8" },
    ],
    titles: [
      "PRESSKIT DJ",
      "CRÉDITOS",
      "PROCESO",
      "1.investigación y Entendimiento del Cliente",
      "2.desarrollo de contenido y elementos visuales",
      "3.DISEÑO Y PRESENTACIÓN DE PROPUESTAS",
      "4.REFINAMIENTO Y ENTREGA DEL PRESSKIT",
    ],
    paragraphs: [
      "En este proyecto, el cliente me brindó la libertad para explorar un enfoque más experimental, confiando en mi experiencia como diseñadora. Teniendo en cuenta que se trata de un DJ de música electrónica, cuyo repertorio abarca desde el progressive house hasta el techno, tomé decisiones estratégicas basadas en la versatilidad y el dinamismo de su estilo musical. Estas decisiones se centraron en la creación de un diseño que refleje la energía y la diversidad de su música, utilizando elementos visuales innovadores y modernos que cautiven a su audiencia y refuercen su identidad como artista en constante evolución.",
      "Investigación del cliente, cuál es su público objetivo, su estilo musical, si tiene algún color de preferencia, que tipo de imagen le gustaría mostrar.",
      "Se definió el enfoque estético de las imágenes, así como el color predominante que reflejaría la identidad del DJ y su música. Además, se seleccionó cuidadosamente la tipografía para el texto, asegurándonos de que fuera coherente con el estilo general y legible en diferentes formatos. La disposición de los títulos y la organización del contenido también fueron aspectos clave que se planificaron meticulosamente para garantizar una presentación atractiva y fácil de navegar.",
      "Esta parte es clave para recibir opiniones del cliente y tomarlas en cuenta para mejorar si es necesario algunas decisiones de diseño, el proceso fue bastante rápido ya que el cliente estuvo de acuerdo con las decisiones tomadas.  Una de las decisiones destacadas fue la inclusión de un reel animado para ser utilizado en presentaciones específicas, lo cual agregó dinamismo y profesionalismo al press kit. Además, la presentación de imágenes con recortes irregulares fue una elección coherente con el logo del DJ, que presenta muchas diagonales. Estos cortes secos no solo agregaron un toque distintivo",
      "Párrafo 5",
      "Párrafo 6",
      "Una vez finalizado el diseño, pasamos a la fase de implementación, donde integramos la nueva identidad visual en diversos contextos y medios. Trabajamos en estrecha colaboración con el Municipio de Mercedes para garantizar una implementación efectiva y coherente del programa de identidad. Además, establecimos mecanismos de evaluación para medir el impacto y la efectividad de la nueva identidad, recopilando retroalimentación de la comunidad para realizar ajustes según fuera necesario.",
    ],
    numberedList: ["Cliente: Dj Kalima", "Diseño de presskit", "Fecha de inicio: 10/07/2023", "Fecha de entrega: 20/07/2023"],
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
    }, 5000);

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

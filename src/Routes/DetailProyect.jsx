
import { Pagination } from "@mui/material";
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import './DetailProyect.css';

const projectData = [
    {
        id: 1,
        images: [
            { src: "/images/Frame14.png", alt: "Imagen 1" },
            { src: "/images/adrian.png", alt: "Imagen 2" },
            { src: "/images/mask1.png", alt: "Imagen 3" },
            { src: "/images/mask2.png", alt: "Imagen 4" },
            { src: "/images/mask3.png", alt: "Imagen 5" },
            { src: "/images/mask3.png", alt: "Imagen 6" },
            { src: "/images/mask3.png", alt: "Imagen 7" },
            { src: "imagen8.jpg", alt: "Imagen 8" },
        ],
        titles: [
            "PRESSKIT DJ",
            "CRÉDITOS",
            "PROCESO",
            "1.ELECCIÓN DE TIPOGRAFÍA",
            "2.PALETA DE COLOR",
            "3.TRATAMIENTO DE IMÁGEN",
            "4.DESPLAZAMIENTO DE ELEMENTOS"
        ],
        paragraphs: [
            "Implica crear una presentación completa y visualmente atractiva que destaque la biografía del artista, fotos de alta calidad que reflejen su imagen, muestras de música en formato de alta calidad, comunicados de prensa sobre lanzamientos recientes y eventos importantes, datos de contacto actualizados, logotipo y diseño coherente que represente su marca personal, enlaces a redes sociales y sitio web para mayor información y seguimiento. El objetivo es proporcionar a los medios de comunicación, promotores de eventos y colaboradores potenciales una visión completa y convincente de la carrera y el talento del artista.",
            "La elección de la tipografía para este proyecto se hizo a través de una comprensión profunda de las necesidades y preferencias del cliente después de varias charlas. Esto implica establecer una comunicación clara y efectiva para entender la personalidad de él y cómo se quería presentar como marca, el tono del mensaje y la audiencia objetivo.Se presentan distintas opciones al cliente, junto con justificaciones y ejemplos visuales que respalden las selecciones propuestas. El proceso culmina con la aprobación final del cliente, asegurando que la tipografía elegida refleje fielmente la visión y los objetivos del proyecto.",
            "Junto con el cliente realizamos juntos un moodboard donde en la mayoría de las imágenes había una repetición clara de estos colores. Mi trabajo como diseñadora fue observar y detectar estos colores y presentárselos al cliente como una posibilidad, me lo confirmó de inmediato y seguimos adelante con el proyecto.",
            "El cliente se encargó de pasarme varias imágenes crudas, decidí utilizar el tratamiento de color como una técnica que agrega profundidad y coherencia visual a las imágenes sin distraer o abrumar al espectador.El degradado se aplica de manera gradual y suave, lo que permite que algunas áreas de la imagen se vean más claras mientras que otras pueden ser menos evidentes, manteniendo así una sensación de equilibrio y cohesión.",
            "Párrafo 5",
            "Párrafo 6",
            "Luego de iterar y de mandar propuestas al cliente, comencé con el desplazamiento de los elementos como las imágenes, logo, tipografía, misceláneas, cajas de texto, realizando una estructura clara y eficaz para el lector."
        ],
        numberedList: ["Nombre del cliente: Adrián Devés", " Mi rol: diseñar su presskit", "Fecha de inicio: 29/02/2024", "Fecha de entrega: 10/03/2024"],
    },
    {
        id: 2,
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
            "Título 7"
        ],
        paragraphs: [
            "Párrafo 1",
            "Párrafo 2",
            "Párrafo 3",
            "Párrafo 4",
            "Párrafo 5",
            "Párrafo 6",
            "Párrafo 7"
        ],
        numberedList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
    {
        id: 3,
        images: [
            { src: "/images/Frame14.png", alt: "Imagen 1" },
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
            "Título 7"
        ],
        paragraphs: [
            "Párrafo 1",
            "Párrafo 2",
            "Párrafo 3",
            "Párrafo 4",
            "Párrafo 5",
            "Párrafo 6",
            "Párrafo 7"
        ],
        numberedList: ["Item 1", "Item 2", "Item 3", "Item 4"],
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
            "Título 7"
        ],
        paragraphs: [
            "Párrafo 1",
            "Párrafo 2",
            "Párrafo 3",
            "Párrafo 4",
            "Párrafo 5",
            "Párrafo 6",
            "Párrafo 7"
        ],
        numberedList: ["Item 1", "Item 2", "Item 3", "Item 4"],
    },
];

const DetailProyect = () => {
    const { id } = useParams();
    const project = projectData.find(project => project.id === parseInt(id));

    const [showContent, setShowContent] = useState(false);

    const [page, setPage] = useState(1); // Estado para el número de página actual

    const handleChange = (event, value) => {
        setPage(value); // Actualiza el estado de la página cuando cambia
    };

    const toggleContent = () => {
        setShowContent(!showContent);
    };

    return (
        <div className="project-detail">
            <div className="grid-container-detail">
                <div className="grid-item image1">
                    <img src={project.images[0].src} alt={project.images[0].alt} />
                </div>
                <div className="grid-item title1">
                    {project.titles[0]}
                </div>
                <div className="grid-item title2">
                    {project.titles[1]}
                </div>
                <div className="grid-item paragraph1">
                    {project.paragraphs[0]}
                </div>
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
                <div className="grid-item title3">
                    {project.titles[2]}
                </div>
                <div className="grid-item title4">
                    <h2 className="title-4">
                    {project.titles[3]}                        
                    </h2>
                    <p className="grid-item paragraph2">{project.paragraphs[1]}</p>
                </div>
                <div className="grid-item image3">
                    <img src={project.images[2].src} alt={project.images[2].alt} />
                </div>
                <div className="grid-item image4">
                    <img src={project.images[3].src} alt={project.images[3].alt} />
                </div>
                <div className="grid-item title5">
                    <h2 className="title-5">
                    {project.titles[4]}
                    </h2>
                    <p className="grid-item paragraph3">{project.paragraphs[2]}</p>
                </div>
                <div className="grid-item title6">
                    <h2 className="title-6">
                    {project.titles[5]}
                    </h2>
                    <p className="grid-item paragraph4">{project.paragraphs[3]}</p>
                </div>
                <div className="grid-item image5">
                    <img src={project.images[4].src} alt={project.images[4].alt} />
                </div>
                <div className="grid-item image7">
                    <img src={project.images[6].src} alt={project.images[6].alt} />
                </div>
                <div className="grid-item title7">
                    <h2 className="title-7">
                    {project.titles[6]}
                    </h2>
                    <p className="grid-item paragraph7">{project.paragraphs[6]}</p>
                </div>
            </div>
            <div className="content-btn">
            <button onClick={toggleContent} className="toggle-button">
                VER PROYECTO FINAL {showContent ? '\u25B2' : '\u25BC'}
            </button>

            </div>
            {showContent && (
                <div className="additional-content">
                    {/* Aquí puedes agregar el contenido adicional */}
                </div>
            )}
            <div className="pagination-container">
                <Pagination count={10} page={page} onChange={handleChange} />
            </div>
        </div>
        
    );
};

export default DetailProyect;



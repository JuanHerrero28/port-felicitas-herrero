
import './Process.css';

const Process = () => {
  // Datos para las tarjetas
  const cardData = [
    {
      number: 1,
      title: "DESCUBRIMIENTO DE MARCA",
      images: [
        { src: "/images/Ellipse-7.png", width: "150px", height: "150px" },
        { src: "/images/Ellipse-8.png", width: "100px", height: "100px" },
        { src: "/images/Ellipse-9.png", width: "70px", height: "70px" }
      ],
      description: "Conoce tu marca y producto."
    },
    {
      number: 2,
      title: "CONCEPTO DE MARCA",
      images: [
        { src: "/images/Ellipse-7.png", width: "150px", height: "150px" },
        { src: "/images/Ellipse-8.png", width: "100px", height: "100px", position: {top: "50%", left: "50%", transform: "translate(-140%, -0.5%)"} },
        { src: "/images/Ellipse-9.png", width: "70px", height: "70px", position: {top: "50%", left: "50%", transform: "translate(-170%, -0.5%)"} }
      ],
      description: "Generar conceptos visuales a través de la exploración visual."
    },
    {
      number: 3,
      title: "ITERAR Y FINALIZAR",
      images: [
        { src: "/images/Ellipse-7.png", width: "150px", height: "150px" },
        { src: "/images/Ellipse-8.png", width: "100px", height: "100px", position: {top: "50%", left: "50%", transform: "translate(-140%, -0.5%)"} },
        { src: "/images/Ellipse-9.png", width: "70px", height: "70px", position: {top: "50%", left: "50%", transform: "translate(-341%, -0.5%)"} },
        
      ],
      description: "Refinar el diseño y preparar los activos de producción."
    }
  ];

  return (
    <div className="root">
      <img src="./images/img6.png" alt="Imagen Principal" style={{ width: '100%' }} />
      <h4 className="title">MI PROCESO</h4>
      <div className="cardContainer">
        {cardData.map((item, index) => (
          <div key={index} className="card">
            <div className="cardContent">
              <h6>{item.number}</h6>
              <h5>{item.title}</h5>
              <div className="cardImageContainer">
                {item.images.map((imageData, imageIndex) => (
                  <img
                    key={imageIndex}
                    src={imageData.src}
                    className="cardImage"
                    style={{ width: imageData.width, height: imageData.height, ...imageData.position}}
                    alt={`Image ${imageIndex}`}
                  />
                ))}
              </div>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Process;





import { Grid } from "@mui/material";
import "./HeroSection.css";

const HeroSection = () => {
  const heroData = {
    title: "Graphic designer",
    images: ["estrella.png", "IMG4.png"],
    paragraph:
      "¡Hola! Soy diseñadora gráfica, Argentina. En mis trabajos predominan las figuras geométricas con la intersección entre formas, colores y espacios de manera experimental para expresar creatividad y originalidad.",
    title2: "FELICITAS HERRERO",
  };

  return (
    <Grid container>
      {/* Primera fila: Imagen */}
      <Grid item xs={12}>
        <img
          src={`images/${heroData.images[1]}`}
          alt="Imagen 1"
          style={{ width: "100%", height: "100%" }}
        />
      </Grid>
      {/* Segunda fila: Título e Imágenes */}
      <Grid item xs={12}>
        <Grid container>
          {/* Columna del título */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "black",
            }}
          >
            <h2 className="title-hero-section" style={{ color: "white" }}>
              {heroData.title}
            </h2>
          </Grid>

          {/* Columna de las imágenes */}
          <Grid
            item
            xs={12}
            md={6}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px",
              backgroundColor: "black",
            }}
          >
            <img
              src={`images/${heroData.images[0]}`}
              alt="Imagen 3"
              style={{ width: "250px", height: "250px" }}
            />
          </Grid>
        </Grid>
      </Grid>
      {/* Tercera fila: Párrafo */}
      <Grid
        style={{
          backgroundColor: "black",
        }}
        item
        xs={12}
        md={6}
      ></Grid>
      <Grid item md={6} xs={12}>
        <p className="paragraph-hero">{heroData.paragraph}</p>
      </Grid>
      {/* Marquesina */}
      <Grid item xs={12}>
        <div className="marquee-container">
          {[...Array(5)].map((_, index) => (
            <p key={index} className="marquee">
              {heroData.title2}
            </p>
          ))}
        </div>
      </Grid>
    </Grid>
  );
};

export default HeroSection;

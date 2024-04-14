import { Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect   } from "react";
import "./HeroSection.css";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  const heroData = {
    title: "Graphic designer",
    images: ["estrella.png", "IMG4.png"],
    paragraph:
      "¡Hola! Soy diseñadora gráfica, Argentina. En mis trabajos predominan las figuras geométricas con la intersección entre formas, colores y espacios de manera experimental para expresar creatividad y originalidad.",
    title2: "FELICITAS HERRERO",
  };

  useEffect(() => {
    const handleScroll = () => {
      const titleElement = document.querySelector(".title-hero-section");
      if (titleElement) {
        const bounding = titleElement.getBoundingClientRect();
        const windowHeight = window.innerHeight || document.documentElement.clientHeight;
        if (bounding.top >= 0 && bounding.bottom <= windowHeight) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Define las variantes de animación
  const titleVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } }, // Estado visible con transición escalonada
  };

  // Define las variantes de animación para cada letra
  const letterVariants = {
    hidden: { opacity: 0, y: 20 }, // Estado inicial
    visible: { opacity: 1, y: 0 }, // Estado visible
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
            {/* Usa motion.div para animar el título */}
            <motion.div
              className="title-hero-section"
              style={{ color: "white" }}
              variants={titleVariants} // Aplica las variantes de animación
              initial="hidden" // Estado inicial
              animate={isVisible ? "visible" : "hidden"}
            >
              {/* Mapea cada letra del título y aplica las variantes de animación */}
              {heroData.title.split("").map((letter, index) => (
                <motion.span key={index} variants={letterVariants} style={{ fontFamily: "NeueKaine-Bold" }}>
                  {letter}
                </motion.span>
              ))}
            </motion.div>
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


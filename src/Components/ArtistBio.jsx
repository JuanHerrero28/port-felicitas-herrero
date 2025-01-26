import { Grid, Button } from "@mui/material";
import "./ArtistBio.css"; // Importa el archivo de estilos CSS
import { Link } from "react-router-dom";
import { useContextGlobal } from "../Utils/global.context";

const ArtistBio = () => {
  const { state } = useContextGlobal();

  const themeStyle = state.theme ? { backgroundColor: "white", color: "black" } : { backgroundColor: "black", color: "white" };
   
  const handleLinkClick = () => {
    window.scrollTo(0, 0); // Lleva al usuario al principio de la página
  };


  return (
    <Grid container style={{...themeStyle}}>
      <Grid item xs={12} md={12}>
        <div id="artist-bio-section" className="bioText">
          <p className="parrafo-artist-bio" style={{...themeStyle}}>
          Diseñadora gráfica con experiencia en proyectos freelance y corporativos, especializada en crear identidades visuales modernas y efectivas. Combino creatividad, funcionalidad y tendencias actuales para desarrollar diseños que conectan con audiencias y refuerzan marcas.
          </p>
        </div>
      </Grid>
      <Grid item xs={12} >
        <div className="cont-art-bio">
          <Link to="/about" onClick={handleLinkClick}>
            <Button variant="contained" className="bioButton">
              Leer más
            </Button>
          </Link>
        </div>
      </Grid>
    </Grid>
  );
};

export default ArtistBio;

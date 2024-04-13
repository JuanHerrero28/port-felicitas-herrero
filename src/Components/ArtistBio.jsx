import { Grid, Button } from "@mui/material";
import "./ArtistBio.css"; // Importa el archivo de estilos CSS

const ArtistBio = () => {
  return (
    <Grid container>
      <Grid item xs={12} md={12}>
        <div className="bioText">
          <p className="parrafo-artist-bio">
            Con más de tres años de experiencia como diseñadora gráfica independiente, quiero expandir mis conocimientos hacia el mundo del diseño web.
          </p>
        </div>
      </Grid>
      <Grid item xs={12}>
        <div className="cont-art-bio">
          <Button variant="contained" className="bioButton">
            Leer más
          </Button>
        </div>
      </Grid>
    </Grid>
  );
};

export default ArtistBio;

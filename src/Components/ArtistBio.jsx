

import { Grid, Typography, Button } from '@mui/material';

const ArtistBio = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="body1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed dapibus quam eget nunc blandit, a feugiat
          ipsum ultricies. Phasellus eu ex justo. Integer hendrerit aliquet justo nec efficitur.
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Button variant="contained" color="primary">
          Leer más
        </Button>
      </Grid>
    </Grid>
  );
}

export default ArtistBio;

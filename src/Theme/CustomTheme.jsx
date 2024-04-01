import { createTheme } from '@mui/material/styles';

const CustomTheme = createTheme({
  palette: {
    primary: {
      main: '#004FFF', // Color primario
    },
    secondary: {
      main: '#FF6BDE', // Color secundario
    },
    // Puedes definir más colores según sea necesario
    // Por ejemplo: tertiary, success, error, warning, etc.
    background: {
      default: '#FFFFFF', // Color de fondo predeterminado
    },
    // Texto será blanco en el tema oscuro y negro en el tema claro
    text: {
        primary: '#FFFFFF',
        secondary: '#000000'
    },
  },
});

export default CustomTheme;

import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import {
  Switch,
  Grid,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { useContextGlobal } from "../Utils/global.context";
import "./NavBar.css";

const NavBar = () => {
  const { state, dispatch } = useContextGlobal();
  const [checked, setChecked] = useState(state.theme);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm")); // Verifica si es una pantalla de tamaño móvil

  const toggleTheme = () => {
    const newTheme = !checked;
    setChecked(newTheme);
    dispatch({ type: "CHANGE_MODE" });
  };

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        padding={"3.5rem"}
        className={state.theme ? "light-background" : "dark-background"}
      >
        <Grid item>
          <Link className="link-nav" to="/">
            <Typography
              variant="subtitle1"
              sx={{
                fontSize: isMobile ? "15px" : "24px",
              }}
            >
              Felicitas Herrero
            </Typography>
          </Link>
        </Grid>
        <Grid item>
          <Grid container direction="row" alignItems="center">
            <Grid item>
              <Link className="link-nav" to="/contacto">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: isMobile ? "15px" : "24px",
                    marginRight: "1.2rem",
                  }}
                >
                  Work
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Link className="link-nav" to="/favs">
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontSize: isMobile ? "15px" : "24px",
                    marginRight: "0.8rem",
                  }}
                >
                  About
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Switch
                color="warning"
                checked={checked}
                onChange={toggleTheme}
                sx={{
                  "& .MuiSwitch-thumb": {
                    backgroundColor: "#FF6BDE", // Color del switch en estado activo
                  },
                  "& .MuiSwitch-track": {
                    backgroundColor: "#FF6BDE", // Color del switch en estado inactivo
                  },
                }}
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Outlet />
    </>
  );
};

export default NavBar;

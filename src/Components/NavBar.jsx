import { useState, useEffect } from "react";
import { Link, Outlet, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
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
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation(); // Obtener la ubicación actual
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToWorkSamples = () => {
    const workSamplesSection = document.getElementById('work-samples-section');
    if (workSamplesSection) {
      workSamplesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToBioSamples = () => {
    const artistBioSection = document.getElementById('artist-bio-section');
    if (artistBioSection) {
      artistBioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, [scrollY]);

  const toggleTheme = () => {
    const newTheme = !checked;
    setChecked(newTheme);
    dispatch({ type: "CHANGE_MODE" });
  };

  // Condición para deshabilitar los enlaces en las páginas DetailProyect y DetailAbout
  const isDetailPage = location.pathname.includes("/detalle/");

  return (
    <>
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolled ? -100 : 0 }}
        transition={{ duration: 0.5 }}
        style={{ position: "fixed", width: "100%", zIndex: 999 }}
      >
        <Grid
          container
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          padding={"2rem"}
          className={state.theme ? "light-background" : "dark-background"}
        >
          <Grid item>
            <Link className="link-nav" to="/">
              <Typography
                variant="subtitle1"
                sx={{
                  fontSize: isMobile ? "12px" : "24px",
                }}
              >
                Felicitas Herrero
              </Typography>
            </Link>
          </Grid>
          <Grid item>
            <Grid container direction="row" alignItems="center">
              <Grid item>
                <Link
                  className={`link-nav ${isDetailPage ? "disabled" : ""}`}
                  onClick={scrollToWorkSamples}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: isMobile ? "12px" : "24px",
                      marginRight: "1.2rem",
                    }}
                  >
                    Work
                  </Typography>
                </Link>
              </Grid>
              <Grid item>
                <Link
                  className={`link-nav ${isDetailPage ? "disabled" : ""}`}
                  onClick={scrollToBioSamples}
                >
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontSize: isMobile ? "12px" : "24px",
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
                      backgroundColor: "#FF6BDE",
                    },
                    "& .MuiSwitch-track": {
                      backgroundColor: "#FF6BDE",
                    },
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </motion.div>
      <Outlet />
    </>
  );
};

export default NavBar;











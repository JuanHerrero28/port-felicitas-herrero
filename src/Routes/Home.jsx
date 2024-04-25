import BtnTop from "../Common/BtnTop";
import ArtistBio from "../Components/ArtistBio";
import HeroSection from "../Components/HeroSection";
import Process from "../Components/Process";
import Testimonials from "../Components/Testimonials";
import WorkSamples from "../Components/WorkSamples";
import { useState, useEffect } from "react";
import Loading from "../Common/Loading";
import Cursor from "../Common/Cursor";

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); // Cuando se simula que los datos se cargan, cambia el estado de isLoading a false
    }, 1000); // Simula una carga de 2 segundos
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> // Muestra el componente de carga si isLoading es true
      ) : (
        <div>
          <HeroSection />
          <WorkSamples />
          <ArtistBio />
          <Process />
          <Testimonials />
          <BtnTop />
          <Cursor/>
        </div>
      )}
    </>
  );
};

export default Home;

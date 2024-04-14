
import BtnTop from "../Common/BtnTop";
import ArtistBio from "../Components/ArtistBio";
import HeroSection from "../Components/HeroSection"
import Process from "../Components/Process";
import Testimonials from "../Components/Testimonials";
import WorkSamples from "../Components/WorkSamples";

const Home = () => {
    return (
      <div>
        <HeroSection />
        <WorkSamples/>
        <ArtistBio/>
        <Process/>
        <Testimonials/>
        <BtnTop/>
      </div>
    );
  };

  export default Home;
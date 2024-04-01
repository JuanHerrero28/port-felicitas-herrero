
import ArtistBio from "../Components/ArtistBio";
import HeroSection from "../Components/HeroSection"
import WorkSamples from "../Components/WorkSamples";

const Home = () => {
    return (
      <div>
        <HeroSection />
        <WorkSamples/>
        <ArtistBio/>
      </div>
    );
  };

  export default Home;
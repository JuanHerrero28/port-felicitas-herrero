import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";
import Home from "./Routes/Home";
import { ContextProvider } from "./Utils/global.context";
import DetailProyect from "./Routes/DetailProyect";
import DetailAbout from "./Routes/DetailAbout";
/* import Cursor from "./Common/Cursor"; */



function App() {
  return (
    <BrowserRouter>
      <ContextProvider>
        <Routes>
          <Route
            element={
              <div>
                <NavBar/>
                <Footer />
                {/* <Cursor/> */}
              </div>
            }
          >
            <Route path="/" element={<Home />} />
            <Route path="/detalle/:id" element={<DetailProyect/>} />
            <Route path="/about" element={<DetailAbout />} />
            <Route path="/detalle/about" element={<DetailAbout />} />

          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

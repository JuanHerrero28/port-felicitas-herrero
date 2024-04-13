import { BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Components/Footer";
import NavBar from "./Components/NavBar";

/* import Contact from "./Routes/Contact"; */
import Home from "./Routes/Home";
/* import Favs from "./Routes/Favs"; */
import { ContextProvider } from "./Utils/global.context";
import DetailProyect from "./Routes/DetailProyect";
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
            {/* <Route path="/contacto" element={<Contact />} /> */}
            <Route path="/detalle/:id" element={<DetailProyect/>} />
            {/* <Route path="/favs" element={<Favs />} /> */}
          </Route>
        </Routes>
      </ContextProvider>
    </BrowserRouter>
  );
}

export default App;

import "./App.css";
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import {Home} from "./pages/Home/Home";
import Mockman from "mockman-js";


function MockAPI(){
  return (
    <div className="MockAPI">
      < Mockman />
    </div>
  );
}


function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
      < Routes >

        < Route path="/" element={ <Home />} />

        < Route path="mock-man" element={<Mockman />} />

      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;

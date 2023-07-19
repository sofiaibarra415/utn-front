
//import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";

import InicioPage from "./pages/InicioPage";
import RecetasPage from "./pages/RecetasPage";
import ContactoPage from "./pages/ContactoPage";
import NovedadesPage from "./pages/NovedadesPage";
import SugerenciasPage from "./pages/SugerenciasPage";
import TipsPage from "./pages/TipsPage";

function App() {
  return (
    <div className="App">
      <Header/>

      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<InicioPage/>}/>
        <Route path="recetas" element={<RecetasPage/>}/>
        <Route path="contacto" element={<ContactoPage/>}/>
        <Route path="novedades" element={<NovedadesPage/>}/>
        <Route path="sugerencias" element={<SugerenciasPage/>}/>
        <Route path="tips" element={<TipsPage/>}/>
      </Routes>
      </BrowserRouter>
      <Footer/>
      
    </div>
  );
}

export default App;

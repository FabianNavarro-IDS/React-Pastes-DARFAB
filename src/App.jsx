import './CSS/Style.css'
import './JS/Index'
import './JS/Main'



import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './Paginas/Index/Index';
import Acercade from './Paginas/Acercade/Acercade';
import Ubicacion from './Paginas/Ubicacion/Ubicacion';
import Catalogo from './Paginas/Catalogo/Catalogo';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={ <Index /> } />
          <Route path="/Acercade" element={ <Acercade /> } />
          <Route path="/Ubicacion" element={ <Ubicacion /> } />
          <Route path="/Catalogo" element={ <Catalogo  /> } />
          <Route path="/Carrito" element={ <Ubicacion /> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

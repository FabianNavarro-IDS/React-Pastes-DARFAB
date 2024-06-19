import './CSS/Style.css'

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Index from './Paginas/Index/Index';
import Acercade from './Paginas/Acercade/Acercade';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        
        <Routes>
          <Route path="/" element={ <Index /> } />
          <Route path="/Acercade" element={ <Acercade /> } />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;

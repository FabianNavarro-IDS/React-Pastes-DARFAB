import './CSS/Style.css'

import BestSeller from './Paginas/Index/BestSeller';
import Carrousel from './Paginas/Index/Carrousel';
import Header from './Paginas/Header';
import { NavBar } from './Paginas/Index/NavBar';
import NavbarFirebase from "./Paginas/Index/NavbarFirebase";
import Promociones from './Paginas/Index/Promociones';
import Suscribirse from './Paginas/Index/Suscribirse';
import Footer from './Paginas/Footer';

function App() {
  return (
    <div className="App">
      <NavbarFirebase />
      <Header />
      <NavBar />
      <Carrousel />
      <Promociones />

      <h2 className="title-section">Los mas vendidos</h2>
      
      <BestSeller />
      <Suscribirse />
      <Footer />
    </div>
  );
}

export default App;

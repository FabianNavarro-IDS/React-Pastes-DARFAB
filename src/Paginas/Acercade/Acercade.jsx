import { Footer } from "../Footer";
import Header from "../Header";
import { NavBar } from "../NavBar";

const Acercade = () => {
  return (
    <div>
      <Header />

      <NavBar />

      <section id="conte">
        <article>
          <h2>Historia</h2>
          <p>
            DarFab nacio primero como una idea, 2 jovenes estudiantes con ganas
            de ser emprendedores, con ganas de salir adelante en la vida,
            gracias al esfuerzo, dedicacion y planeacion minusioza de este
            emprendimiento es como nacio DarFab la mejor tienda de Pastes en
            GDL
          </p>
        </article>
        <article>
          <h2>Preparacion</h2>
          <p>
            La principal característica del paste, es la cocción de sus
            ingredientes y la naturaleza de su relleno,​ Los ingredientes del
            paste tradicional o paste minero, deben estar crudos al momento de
            ser envueltos en la masa.
          </p>
        </article>
      </section>

      <Footer />
    </div>
  );
};

export default Acercade;
import BestSeller from './CompoIndex/BestSeller';
import Carrousel from './CompoIndex/Carrousel';
import { Footer } from '../Footer';
import Header from '../Header';
import { NavBar } from '../NavBar';
import Promociones from './CompoIndex/Promociones';
import Suscribirse from './CompoIndex/Suscribirse';

const Index = () => {
    return (
        <div>
            <Header />
            <NavBar />
            <Carrousel />
            <Promociones />
            <BestSeller />
            <Suscribirse />
            <Footer />
        </div>
    );
}

export default Index;

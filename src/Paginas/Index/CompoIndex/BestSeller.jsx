import React, { useEffect, useState } from 'react';
import Arroz from '../../../Imagenes/Arroz.png';
import Carne from '../../../Imagenes/Carne.png';
import Hawaiiano from '../../../Imagenes/Hawaiiano.png';
import initCarousel from '../../../JS/Index';

const BestSeller = () => {
  const [carousel, setCarousel] = useState(null); // Estado para almacenar la instancia del carrusel
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual del carrusel

  useEffect(() => {
    // Inicializar el carrusel al montar el componente
    const newCarousel = initCarousel('best-sellers');
    setCarousel(newCarousel);

    // Limpiar el carrusel cuando el componente se desmonte
    return () => {
      if (carousel) {
        carousel.stop(); // Llamar al método stop solo si carousel está definido
      }
    };
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez al montar el componente

  useEffect(() => {
    // Función para avanzar al siguiente elemento en el carrusel cada 3 segundos
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Asumiendo que hay 3 elementos en el carrusel
    }, 3000);

    // Limpiar el intervalo cuando el componente se desmonte o el índice cambie
    return () => clearInterval(intervalId);
  }, []); // El segundo argumento [] asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <div className="best-sellers" id="best-sellers">
      <div className="best-seller-item" style={{ display: currentIndex === 0 ? 'block' : 'none' }}>
        <img src={Arroz} alt="Paste 1" />
        <h3>Paste de Arroz con leche</h3>
        <p>Delicioso paste con Leche, arroz y canela..</p>
        <p>Precio: $299.00</p>
      </div>
      <div className="best-seller-item" style={{ display: currentIndex === 1 ? 'block' : 'none' }}>
        <img src={Carne} alt="Paste 2" />
        <h3>Paste de Papa con Carne</h3>
        <p>Delicioso paste con Papa, carne de res, cebolla, perejil y chile..</p>
        <p>Precio: $259.00</p>
      </div>
      <div className="best-seller-item" style={{ display: currentIndex === 2 ? 'block' : 'none' }}>
        <img src={Hawaiiano} alt="Paste 3" />
        <h3>Paste Hawaiiano</h3>
        <p>Delicioso paste de Jamón, queso oaxaca, queso cotija, piña y salsa italiana..</p>
        <p>Precio: $349.00</p>
      </div>
    </div>
  );
};

export default BestSeller;

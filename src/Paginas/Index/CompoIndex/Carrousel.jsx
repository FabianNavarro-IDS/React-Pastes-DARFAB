// Carrousel.jsx

import React, { useEffect } from 'react';
import paste1 from '../../../Imagenes/paste1.jpg';
import paste from '../../../Imagenes/paste.jpg';
import paste3 from '../../../Imagenes/paste3.jpg';
import initCarousel from '../../../JS/Index';

const Carrousel = () => {
  useEffect(() => {
    const carousel = initCarousel('image-carousel');
    return () => carousel.stop(); // Clean up: stop carousel when component unmounts
  }, []);

  return (
    <div id="carousel-container">
      <div id="image-carousel">
        <img className="carousel-image" src={paste} alt="Pastes" />
        <img className="carousel-image" src={paste3} alt="Pastes Salados" />
        <img className="carousel-image" src={paste1} alt="Pastes Dulces" />
      </div>
    </div>
  );
};

export default Carrousel;

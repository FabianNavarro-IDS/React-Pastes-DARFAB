import React from 'react'
import paste1 from '../../Imagenes/paste1.jpg'
import paste from '../../Imagenes/paste.jpg'
import paste3 from '../../Imagenes/paste3.jpg'

const Carrousel = () => {
  return (
    <div id="carousel-container">
        <div id="image-carousel">
            <img class="carousel-image" src={paste1} alt="Pastes Dulces"/>
            <img class="carousel-image" src={paste} alt="Pastes"/>
            <img class="carousel-image" src={paste3} alt="Pastes Salados"/>
        </div>
    </div>
  )
}

export default Carrousel
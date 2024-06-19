import React from 'react'

import Piña from '../../Imagenes/Piña.png'
import Zarzamora from '../../Imagenes/Zarzamora.png'
import Champiñon from '../../Imagenes/Champiñon.png'
import Salchicha from '../../Imagenes/Salchicha.png'

const Promociones = () => {
  return (
    <div class="promo-section">
        <h2>Promociones del Mes</h2>
        <div class="promo-card">
            <img src={Piña} alt="Promoción 1"/>
            <h3>Paste de Piña</h3>
            <p>Paste relleno de Mermelada de piña 100% natural.</p>
        </div>
        <div class="promo-card">
            <img src={Zarzamora} alt="Promoción 3"/>
            <h3>Paste de Philadelphia con Zarzamora</h3>
            <p>Paste relleno de Mermelada de zarzamora y queso crema.</p>
        </div>
        <div class="promo-card">
            <img src={Champiñon} alt="Promoción 5"/>
            <h3>Paste de Champiñon</h3>
            <p>Paste relleno de Elote, champiñones, rajas poblanas y queso oaxaca.</p>
        </div>
        <div class="promo-card">
            <img src={Salchicha} alt="Promoción 6"/>
            <h3>Paste de Salchicha</h3>
            <p>Paste relleno de Salchicha, catsup, mayonesa, mostaza y queso americano.</p>
        </div>
    </div>
  )
}

export default Promociones
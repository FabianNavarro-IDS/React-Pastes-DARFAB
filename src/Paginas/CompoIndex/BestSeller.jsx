import React from 'react'

import Arroz from '../../Imagenes/Arroz.png'
import Carne from '../../Imagenes/Carne.png'
import Hawaiiano from '../../Imagenes/Hawaiiano.png'

const BestSeller = () => {
  return (
    <div class="best-sellers">
        

        <div class="best-seller-item">
            <img src={Arroz} alt="Paste 1"/>
            <h3>Paste de Arroz con leche</h3>
            <p>Delicioso paste con Leche, arroz y canela..</p>
            <p>Precio: $299.00</p>
        </div>
        <div class="best-seller-item">
            <img src={Carne} alt="Paste 2"/>
            <h3>Paste de Papa con Carne</h3>
            <p>Delicioso paste con Papa, carne de res, cebolla, perejil y chile..</p>
            <p>Precio: $259.00</p>
        </div>
        <div class="best-seller-item">
            <img src={Hawaiiano} alt="Paste 3"/>
            <h3>Paste Hawaiiano</h3>
            <p>Delicioso paste de Jamón, queso oaxaca, queso cotija, piña y salsa italiana..</p>
            <p>Precio: $349.00</p>
        </div>
    </div>
  )
}

export default BestSeller
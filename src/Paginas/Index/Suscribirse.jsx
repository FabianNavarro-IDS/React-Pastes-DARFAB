import React from 'react'

const Suscribirse = () => {
  return (
    <div class="subscribe">
        <h2>Suscríbete para recibir noticias y ofertas</h2>
        <form>
            <div class="subscribe-input">
                <input type="email" id="correo" name="email" placeholder="Tu correo electrónico" required/>
                <button type="submit">Suscribirse</button>
            </div>
        </form>
        </div>
  )
}

export default Suscribirse
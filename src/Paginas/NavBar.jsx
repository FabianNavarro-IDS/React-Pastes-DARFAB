import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="#">Ubicacion</Link></li>
            <li><Link to="#">Catálogo</Link></li>
            <li><Link to="/Acercade">Acerca de</Link></li>
            <li><Link to="#" id="Carrito">Carrito</Link></li>
        </ul>
    </nav>
  )
}

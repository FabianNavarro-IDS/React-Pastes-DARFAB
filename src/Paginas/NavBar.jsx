import React from 'react'
import { Link } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav>
        <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Ubicacion">Ubicacion</Link></li>
            <li><Link to="/Catalogo">Catálogo</Link></li>
            <li><Link to="/Acercade">Acerca de</Link></li>
            <li><Link to="/Carrito" id="Carrito">Carrito</Link></li>
        </ul>
    </nav>
  )
}

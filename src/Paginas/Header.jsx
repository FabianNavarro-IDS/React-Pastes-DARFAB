import React from 'react'

import Logo from '../Imagenes/Logo/Pastes.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
        <div className="logo">
            <Link to='/'> <img src={Logo} width="350" alt="paste" /> </Link> 
        </div>
        <h1>Bienvenidos a Pastes Darfab</h1>
    </header>
  )
}

export default Header
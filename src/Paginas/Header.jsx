import React from 'react'

import Logo from '../Imagenes/Logo/Pastes.png'

const Header = () => {
  return (
    <header>
        <div class="logo">
            <img src={Logo} width="350" alt="paste" />
        </div>
        <h1>Bienvenidos a Pastes Darfab</h1>
    </header>
  )
}

export default Header
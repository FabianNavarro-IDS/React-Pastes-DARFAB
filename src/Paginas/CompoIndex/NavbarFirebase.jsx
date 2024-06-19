import React from 'react'

const NavbarFirebase = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-ligth">
        <div class="container">
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link loggedout" href="#" data-bs-toggle="modal" data-bs-target="#loginModal">Inicia Sesion</a>
              </li>
              <li class="nav-item">
                <a class="nav-link loggedout" href="#" data-bs-toggle="modal" data-bs-target="#RegisterModal">Registrate</a>
              </li>
              <li class="nav-item">
                <a class="nav-link loggedin" href="#" id="salirCuenta">Salir</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  )
}

export default NavbarFirebase
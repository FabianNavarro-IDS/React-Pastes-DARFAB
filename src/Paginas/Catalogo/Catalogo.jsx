import React from 'react'
import Header from '../Header'
import { NavBar } from '../NavBar'
import { Footer } from '../Footer'


const Catalogo = () => {
  return (
    <div>
        <Header />

        <NavBar />

            <section id="catalogo">
                <h2 id="cat">Nuestro Catálogo</h2>

                <section id="pastes">
                    <article id="Dulces">
                        <h2>Sabor Dulces</h2>
                        <p> 
                            <ol>Piña</ol>
                            <ol>Manzana</ol>
                            <ol>Arroz con leche</ol> 
                            <ol>Crema de leche</ol>
                            <ol>Platano c/lechera</ol>
                            <ol>Fresa</ol>
                            <ol>Philadelphia con Zarzamora</ol>
                            <ol>Cajeta</ol>
                        </p>
                    </article>

                    <article id="Salados">
                        <h2>Sabores Salados</h2>
                        <p>
                        <ol>Papa con carne</ol>
                        <ol>champiñones con queso</ol> 
                        <ol>Mole rojo</ol> 
                        <ol>Mole verde</ol>
                        <ol>Salchicha</ol>
                        <ol>Hawaiiana</ol> 
                        <ol>Frijol con Chorizo</ol> 
                        <ol>Atun </ol>
                        </p>
                </article>
                </section>

                <div className="catalog-container">
                    <div className="cake-card">
                        <img src="./imagenes/3Lblanco.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" />
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/3Lcerezanuez.png" alt="Pastel 1" />
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/3Ldurazno.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/3Lrompope.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Aleman.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Almendra.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Arcoiris.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/ChocoAvellana.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Chocolate.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/DobleChocolate.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Durazno.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Fresa.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Moka.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Nuez.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Oreo.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/pastel-tres-leches_nuez.jpg" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/RedVelvet.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Tiramisu.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
                    <div className="cake-card hidden">
                        <img src="./imagenes/Zanahoria.png" alt="Pastel 1"/>
                        <h3>Pastel de Chocolate</h3>
                        <p>Delicioso pastel de chocolate con relleno cremoso.</p>
                        <p>Precio: $20.99</p>
                        <button className="add-to-cart">Agregar</button>
                    </div>
          
                </div>
                <div className="centrar">
                    <button id="load-more" className="floating-btn">+</button>
                </div>
            </section>

    <Footer />
    </div>
  )
}

export default Catalogo
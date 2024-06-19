import React, { useEffect } from 'react';

import Header from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';

import catalogoScript from '../../JS/Catalogo.js';

const Catalogo = () => {
  useEffect(() => {
    catalogoScript();
  }, []);

  return (
    <div>
      <Header />

      <NavBar />

      <section id="catalogo" style={{ marginBottom: '40px' }}>
        <h2 id="cat">Nuestro Catálogo</h2>

        <section id="pastes">
          <article id="Dulces">
            <h2>Sabor Dulces</h2>
            <ul>
              <ol>Piña</ol>
              <ol>Manzana</ol>
              <ol>Arroz con leche</ol>
              <ol>Crema de leche</ol>
              <ol>Platano c/lechera</ol>
              <ol>Fresa</ol>
              <ol>Philadelphia con Zarzamora</ol>
              <ol>Cajeta</ol>
            </ul>
          </article>

          <article id="Salados">
            <h2>Sabores Salados</h2>
            <ul>
              <ol>Papa con carne</ol>
              <ol>champiñones con queso</ol>
              <ol>Mole rojo</ol>
              <ol>Mole verde</ol>
              <ol>Salchicha</ol>
              <ol>Hawaiiana</ol>
              <ol>Frijol con Chorizo</ol>
              <ol>Atun</ol>
            </ul>
          </article>
        </section>

        <div className="catalog-container">
          <div className="cake-card">
            <img src="./imagenes/3Lblanco.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Chocolate</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card">
            <img src="./imagenes/3Lblanco.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Chocolate</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card">
            <img src="./imagenes/3Lblanco.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Chocolate</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>

          {/* Replicar este bloque div para cada pastel, asegurándose de ajustar los detalles específicos */}
          
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          
          {/* Agregar más pasteles aquí */}

          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
            <p>Delicioso pastel de chocolate con relleno cremoso.</p>
            <p>Precio: $20.99</p>
            <button className="add-to-cart">Agregar</button>
          </div>
          <div className="cake-card hidden">
            <img src="./imagenes/3Lcajeta.png" alt="Pastel 1" style={{ width: '50%' }} />
            <h3>Pastel de Fresa</h3>
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
  );
};

export default Catalogo;

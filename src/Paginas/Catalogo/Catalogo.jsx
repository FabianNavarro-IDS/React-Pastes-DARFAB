// Catalogo.jsx
import React, { useEffect, useState, useRef } from 'react';
import Header from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { db } from '../../JS/Firebase/FireBase'; // Importa la referencia a Firestore
import { collection, getDocs } from 'firebase/firestore'; // Importa las funciones necesarias de Firestore

const Catalogo = ({ agregarAlCarrito }) => {
  const [productos, setProductos] = useState([]); // Estado para almacenar los productos
  const [showMore, setShowMore] = useState(false); // Estado para controlar la visibilidad de más cards
  const loadMoreButtonRef = useRef(null); // Referencia al botón "load-more"

  useEffect(() => {
    // Función para obtener los productos de Firestore
    const obtenerProductos = async () => {
      const productosRef = collection(db, 'Pasteles'); // Referencia a la colección 'productos'
      const snapshot = await getDocs(productosRef); // Obtiene los documentos de la colección
      const productosData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(), // Combina el ID del documento con los datos
      }));
      setProductos(productosData); // Actualiza el estado con los productos
    };

    obtenerProductos(); // Ejecuta la función para obtener los productos
  }, []);

  // Función para manejar el clic en el botón "load-more"
  const handleLoadMore = () => {
    setShowMore(true); // Muestra las cards ocultas
  };

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
              <li>Piña</li>
              <li>Manzana</li>
              <li>Arroz con leche</li>
              <li>Crema de leche</li>
              <li>Platano c/lechera</li>
              <li>Fresa</li>
              <li>Philadelphia con Zarzamora</li>
              <li>Cajeta</li>
            </ul>
          </article>

          <article id="Salados">
            <h2>Sabores Salados</h2>
            <ul>
              <li>Papa con carne</li>
              <li>champiñones con queso</li>
              <li>Mole rojo</li>
              <li>Mole verde</li>
              <li>Salchicha</li>
              <li>Hawaiiana</li>
              <li>Frijol con Chorizo</li>
              <li>Atun</li>
            </ul>
          </article>
        </section>

        <div className="catalog-container">
          {productos.map((producto, index) => (
            <div 
              className="cake-card" 
              key={producto.id}
              style={{ display: index < 3 || showMore ? 'block' : 'none' }} // Oculta las cards hasta que se haga clic en "load-more"
            >
              <img src={producto.imagen} alt={producto.nombre} style={{ width: '50%' }} />
              <h3>{producto.nombre}</h3>
              <p>{producto.descripcion}</p>
              <p>Precio: ${producto.precio}</p>
              <button className="add-to-cart" onClick={() => agregarAlCarrito(producto)}>Agregar</button>
            </div>
          ))}
        </div>

        <div className="centrar">
          <button 
            id="load-more" 
            className="floating-btn"
            ref={loadMoreButtonRef} 
            onClick={handleLoadMore}
          >
            +
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Catalogo;
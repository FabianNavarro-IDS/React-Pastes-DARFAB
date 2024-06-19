// Carrito.jsx
import React from 'react';
import Header from '../Header';
import { NavBar } from '../NavBar';
import { Footer } from '../Footer';
import { db } from '../../JS/Firebase/FireBase';
import { collection, addDoc } from 'firebase/firestore';

const Carrito = ({ productos, eliminarDelCarrito, actualizarCantidad }) => {
  // Calcular el total de la compra
  const totalCompra = productos.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);

  const realizarCompra = async () => {
    try {
      const docRef = await addDoc(collection(db, "Pedidos"), {
        productos: productos,
        total: totalCompra,
        fecha: new Date()
      });
      console.log("Compra realizada con ID: ", docRef.id);
      alert("Compra realizada exitosamente");
    } catch (e) {
      console.error("Error al realizar la compra: ", e);
      alert("Hubo un error al realizar la compra");
    }
  };

  return (
    <div>
      <Header />
      <NavBar />
      <h2>Carrito de Compras</h2>
      {productos.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <div>
          <ul>
            {productos.map((producto, index) => (
              <li key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
                <img src={producto.imagen} alt={producto.nombre} style={{ width: '50px', marginRight: '10px' }} />
                <div style={{ flex: 1 }}>
                  <p>{producto.nombre} - ${producto.precio} x {producto.cantidad}</p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <button onClick={() => actualizarCantidad(producto.nombre, producto.cantidad - 1)}>-</button>
                  <button onClick={() => actualizarCantidad(producto.nombre, producto.cantidad + 1)}>+</button>
                  <button onClick={() => eliminarDelCarrito(producto.nombre)} style={{ marginLeft: '10px' }}> Eliminar </button>
                </div>
              </li>
            ))}
          </ul>
          <h3>Total: ${totalCompra.toFixed(2)}</h3>
          <button onClick={realizarCompra} style={{ marginTop: '10px', padding: '10px', fontSize: '25px' }}>
            Comprar
          </button>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Carrito;

// App.jsx
import React, { useState } from 'react';
import './CSS/Style.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Index from './Paginas/Index/Index';
import Acercade from './Paginas/Acercade/Acercade';
import Ubicacion from './Paginas/Ubicacion/Ubicacion';
import Catalogo from './Paginas/Catalogo/Catalogo';
import Carrito from './Paginas/Carrito/Carrito';

function App() {
  const [carrito, setCarrito] = useState([]);

  // Función para agregar productos al carrito con agrupamiento
  const agregarAlCarrito = (producto) => {
    setCarrito((prevCarrito) => {
      // Verificar si el producto ya está en el carrito
      const productoExistente = prevCarrito.find(item => item.nombre === producto.nombre);
      if (productoExistente) {
        // Incrementar la cantidad del producto existente
        return prevCarrito.map(item => 
          item.nombre === producto.nombre 
            ? { ...item, cantidad: item.cantidad + 1 } 
            : item
        );
      } else {
        // Agregar un nuevo producto con cantidad inicial de 1
        return [...prevCarrito, { ...producto, cantidad: 1 }];
      }
    });
  };

  // Función para eliminar productos del carrito
  const eliminarDelCarrito = (nombre) => {
    setCarrito((prevCarrito) => prevCarrito.filter(producto => producto.nombre !== nombre));
  };

  // Función para actualizar la cantidad de un producto en el carrito
  const actualizarCantidad = (nombre, cantidad) => {
    setCarrito((prevCarrito) => 
      prevCarrito.map(producto => 
        producto.nombre === nombre 
          ? { ...producto, cantidad: Math.max(cantidad, 0) } 
          : producto
      ).filter(producto => producto.cantidad > 0)
    );
  };

  // Función para realizar la compra (simulación)
  const realizarCompra = () => {
    const total = carrito.reduce((total, producto) => total + producto.precio * producto.cantidad, 0);
    alert(`Compra realizada por un total de $${total.toFixed(2)}`);
    setCarrito([]); // Vaciar el carrito después de la compra
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/Acercade" element={<Acercade />} />
          <Route path="/Ubicacion" element={<Ubicacion />} />
          <Route 
            path="/Catalogo" 
            element={<Catalogo agregarAlCarrito={agregarAlCarrito} />} 
          />
          <Route 
            path="/Carrito" 
            element={
              <Carrito 
                productos={carrito} 
                eliminarDelCarrito={eliminarDelCarrito} 
                actualizarCantidad={actualizarCantidad} 
                realizarCompra={realizarCompra} 
              />
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

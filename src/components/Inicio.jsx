import React, { useState } from "react";

export const Home = () => {

  const [productoId, setProductoId] = useState("");
  const [ventaId, setVentaId] = useState("");
  const [message, setMessage] = useState("");



  const handleProductoIdChange = (event) => {
    setProductoId(event.target.value);
  };

  const handleVentaIdChange = (event) => {
    setVentaId(event.target.value);
  };

  

  const eliminarProducto = (id) => {
    const productosData = localStorage.getItem("productos");
    console.log("productosData: ", productosData);
    if (productosData) {
      let productos = JSON.parse(productosData);
      console.log("productos antes del filtro: ", productos); 
      const initialLength = productos.length;
      productos = productos.filter((producto) => producto.id !== id);
	  console.log("productos después del filtro: ", productos); 
      if (productos.length === initialLength) {
        setMessage(`Producto con ID ${id} no encontrado.`);
      } else {
        localStorage.setItem("productos", JSON.stringify(productos));
        setMessage(`Producto con ID ${id} eliminado.`);
      }
    } else {
      setMessage("No hay productos para eliminar.");
    }
  };

  const eliminarVenta = (id) => {
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      let ventas = JSON.parse(ventasData);
      const initialLength = ventas.length;
      ventas = ventas.filter((venta) => venta.id !== id);
      if (ventas.length === initialLength) {
        setMessage(`Venta con ID ${id} no encontrada.`);
      } else {
        localStorage.setItem("ventas", JSON.stringify(ventas));
        setMessage(`Venta con ID ${id} eliminada.`);
      }
    } else {
      setMessage("No hay ventas para eliminar.");
    }
  };


  const handleProductoSubmit = (event) => {
    event.preventDefault();
    eliminarProducto(productoId);
    setProductoId("");
  };

  const handleVentaSubmit = (event) => {
    event.preventDefault();
    eliminarVenta(ventaId);
    setVentaId("");
  };

  return (
    <div className="w3-container">
      <h2>Formato de Eliminaciones</h2>

      
      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-green w3-margin">
        <h3>Eliminar Producto</h3>
        <label htmlFor="productoId" className="w3-label">ID del producto:</label>
        <input
          id="productoId"
          type="text"
          value={productoId}
          onChange={handleProductoIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-green w3-margin-top">Eliminar</button>
      </form>

      <form onSubmit={handleVentaSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-red w3-margin">
        <h3>Eliminar Venta</h3>
        <label htmlFor="ventaId" className="w3-label">ID de la venta:</label>
        <input
          id="ventaId"
          type="text"
          value={ventaId}
          onChange={handleVentaIdChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-red w3-margin-top">Eliminar</button>
      </form>

      {message && <p className="w3-panel w3-pale-yellow w3-leftbar w3-border-yellow w3-margin-top">{message}</p>}
    </div>
  );
};
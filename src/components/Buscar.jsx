import React, { useState } from "react";
import DistribuidoresTable from "./DistribuidoresTable";
import ProductosTable from "./ProductosTable";
import VentasTable from "./VentasTable";

export const Buscar = ({ distribuidores }) => {

  const [productoQuery, setProductoQuery] = useState("");
  const [ventaQuery, setVentaQuery] = useState("");
  const [result, setResult] = useState(null);
  const [queryType, setQueryType] = useState("");



  const handleProductoQueryChange = (event) => {
    setProductoQuery(event.target.value);
  };

  const handleVentaQueryChange = (event) => {
    setVentaQuery(event.target.value);
  };



  const handleProductoSubmit = (event) => {
    event.preventDefault();
    const producto = buscarProducto(productoQuery);
    setQueryType("producto");
    setResult(producto);
  };

  const handleVentaSubmit = (event) => {
    event.preventDefault();
    const venta = buscarVenta(ventaQuery);
    setQueryType("venta");
    setResult(venta);
  };

  

  const buscarProducto = (id) => {
    const productosData = localStorage.getItem("productos");
    console.log("productosData: ", productosData); // Debugging line
    if (productosData) {
      const productos = JSON.parse(productosData);
      const productoEncontrado = productos.find((producto) => producto.id === id);
      console.log("productoEncontrado: ", productoEncontrado); // Debugging line
      return productoEncontrado || null;
    } else {
      return null;
    }
  };

  const buscarVenta = (id) => {
    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      const ventas = JSON.parse(ventasData);
      const ventaEncontrada = ventas.find((venta) => venta.id === id);
      return ventaEncontrada || null;
    } else {
      return null;
    }
  };

  return (
    <div className="w3-container">
      <h2>Buscar</h2>


      <form onSubmit={handleProductoSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-green w3-margin">
        <h3>Buscar Producto</h3>
        <label htmlFor="productoQuery" className="w3-label">ID del producto:</label>
        <input
          id="productoQuery"
          type="text"
          value={productoQuery}
          onChange={handleProductoQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-green w3-margin-top">Buscar</button>
      </form>

      <form onSubmit={handleVentaSubmit} className="w3-container w3-card-4 w3-light-grey w3-text-red w3-margin">
        <h3>Buscar Venta</h3>
        <label htmlFor="ventaQuery" className="w3-label">ID de la venta:</label>
        <input
          id="ventaQuery"
          type="text"
          value={ventaQuery}
          onChange={handleVentaQueryChange}
          className="w3-input w3-border"
        />
        <button type="submit" className="w3-btn w3-red w3-margin-top">Buscar</button>
      </form>

      {result && (
        <div>

          {queryType === "producto" && (
            <ProductosTable productos={[result]} />
          )}
          {queryType === "venta" && <VentasTable ventas={[result]} />}
        </div>
      )}

      {!result && (
        <div>
          {queryType === "producto" && <p>No se encontró el producto.</p>}
          {queryType === "venta" && <p>No se encontró la venta.</p>}
        </div>
      )}
    </div>
  );
};
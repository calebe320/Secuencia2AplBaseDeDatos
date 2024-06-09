import React from "react";

const ProductosTable = ({ productos }) => {
  if (!productos || productos.length === 0) {
    return <p>No se encontraron productos.</p>;
  }

  return (
    <div>
    <h2>Tabla de Productos</h2>
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Stock</th>
          <th>Precio</th>
        </tr>
      </thead>
      <tbody>
        {productos.map((producto) => (
          <tr key={producto.id}>
            <td>{producto.id}</td>
            <td>{producto.nombre}</td>
            <td>{producto.descripcion}</td>
            <td>{producto.stock}</td>
            <td>{producto.precio}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ProductosTable;
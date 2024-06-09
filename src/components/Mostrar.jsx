import React, { useState, useEffect } from "react";
import DistribuidoresTable from "./DistribuidoresTable";
import ProductosTable from "./TablaPorductos";
import VentasTable from "./TablaVentas";

export const Mostrar = () => {
  

    const productosData = localStorage.getItem("productos");
    if (productosData) {
      setProductos(JSON.parse(productosData));
    }


    const ventasData = localStorage.getItem("ventas");
    if (ventasData) {
      setVentas(JSON.parse(ventasData));
    }
  }, []);

  return (

      <div className="w3-container w3-margin">
        <h2 className="w3-text-green">Productos</h2>
        <ProductosTable productos={productos} />
      </div>
      <div className="w3-container w3-margin">
        <h2 className="w3-text-red">Ventas</h2>
        <VentasTable ventas={ventas} />
      </div>
    </div>
  );
};
// ProductDetails.jsx
import React from 'react';
import { useParams } from 'react-router-dom';


const ProductDetails = () => {
  const { code } = useParams();

  // Obtén los detalles del producto utilizando el código como clave en el objeto de contents
  const productDetails = contents.find(content => content.code === code);

  if (!productDetails) {
    // Manejar el caso en el que el código del producto no sea válido
    return <div>Producto no encontrado</div>;
  }

  return (
    <div>
      <h2>{productDetails.name}</h2>
      <p>Precio: Q{productDetails.price}</p>
      <p>{productDetails.description}</p>
      {/* Otros detalles del producto... */}
    </div>
  );
};

export default ProductDetails;

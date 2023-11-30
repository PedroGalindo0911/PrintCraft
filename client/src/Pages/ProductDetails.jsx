import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import contents from '../content';
import MyNavbar from '../Components/MyNavbar';
import '../Pages/Product.css';

const ProductDetails = () => {
  const { code } = useParams();
  const productDetails = contents.find(content => content.code === code);


  if (!productDetails) {
    return (
      <div>
        <MyNavbar />
        <div className="container mt-4">
          <div className="alert alert-danger" role="alert">
            {`Producto no encontrado para el código: ${code}`}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <MyNavbar />
      <div className="arrow">
        <Link to="/">
          <FontAwesomeIcon icon={faArrowLeft} style={{ color: '#ffffff', fontSize: '24px', cursor: 'pointer' }} />
        </Link>
      </div>

      <div className="container mt-4">
        <div className="row producto">
          <div className="col-md-6 d-flex justify-content-center align-items-center animation">
            <img
              src={productDetails.image}
              alt="product-img"
              className="img-fluid rounded"
              style={{ maxHeight: '370px', maxWidth: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="col-md-6 producttext animation">
            <h2 className="mb-3">{productDetails.name}</h2>
            <p className="lead mb-2">Precio: Q{productDetails.price}</p>
            <p className="mb-2">Dimensiones: {productDetails.dimensions}</p>
            <p className="mb-2">Peso: {productDetails.weight} kg</p>
            <p>{productDetails.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

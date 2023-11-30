import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import './CatalogueStyles.css';

const MyCatalogue = (props) => {
  const [isInCart, setInCart] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleCartClick = () => {
    setInCart(!isInCart);
  };

  const handleHover = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShouldAnimate(true);
    }, props.index * 200);

    return () => clearTimeout(timeout);
  }, [props.index]);

  return (
    <div className='productList'>
      <div
        key={props.id}
        className={`productCard ${shouldAnimate ? 'fadeIn' : ''}`}
        onMouseEnter={handleHover}
        onMouseLeave={handleMouseLeave}
      >
        <img src={props.image} alt="product-img" className='productImage' />
        <div className='productCard__content'>
          <h3 className='productName'>{props.name}</h3>
          <div className='displayStack__1'>
            <div className='productPrice'>Precio de Impresión Q{props.price}</div>
          </div>
          {isHovered && (
            <Link to={`/${props.code}`}>
              <button className='detailsButton'>Ver Detalles</button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyCatalogue;

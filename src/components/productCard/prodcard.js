// src/components/ProductCard.js

import React from 'react';

const ProductCard = ({ product, addToCart, viewMore }) => {
  return (
    <div className="product-card">
      <h3>{product.title}</h3>
      <p>Price: ${product.price}</p>
      <button onClick={() => addToCart(product)}>Add to Cart</button>
      <button onClick={() => viewMore(product)}>View More</button>
    </div>
  );
};

export default ProductCard;

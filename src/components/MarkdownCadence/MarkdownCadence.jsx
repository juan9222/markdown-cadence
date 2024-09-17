import React from 'react';
import './MarkdownCadence.css';

const MarkdownCadence = ({ products }) => {
  return (
    <div className="marketplace">
      <h1>Clothing Marketplace</h1>
      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img src={`https://via.placeholder.com/150?text=${product.name}`} alt={product.name} />
            <h3>{product.name}</h3>
            <p>Original Price: ${product.price}</p>
            <p>Discounted Price: ${product.discountedPrice}</p>
            <p>Days in Store: {product.daysInStore}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MarkdownCadence;

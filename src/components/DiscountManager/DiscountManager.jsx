import React, { useState } from 'react';
import './DiscountManager.css';

const DiscountManager = ({ products, setProducts }) => {
  const [cadence, setCadence] = useState({ days10: 10, days30: 30 });
  const [discount, setDiscount] = useState({ discount10: 0.9, discount30: 0.8 });
  const [selectedProduct, setSelectedProduct] = useState(null);

  const applyMarkdown = () => {
    const updatedProducts = products.map((product) => {
      if (product.id === selectedProduct) {
        if (product.daysInStore >= cadence.days30) {
          return { ...product, discountedPrice: product.price * discount.discount30 };
        } else if (product.daysInStore >= cadence.days10) {
          return { ...product, discountedPrice: product.price * discount.discount10 };
        }
      }
      return product;
    });
    setProducts(updatedProducts);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    applyMarkdown();
  };

  return (
    <div className="discount-manager">
      <h1>Discount Manager</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Cadence</label>
          <input
            type="number"
            value={cadence.days10}
            onChange={(e) => setCadence({ ...cadence, days10: parseInt(e.target.value) })}
          />
        </div>
        <div>
          <label>Discount</label>
          <input
            type="number"
            value={discount.discount10}
            onChange={(e) => setDiscount({ ...discount, discount10: parseFloat(e.target.value) })}
            step="0.01"
          />
        </div>
        <div>
          <label>Categories</label>
          <select onChange={(e) => setSelectedProduct(parseInt(e.target.value))}>
            <option value="">Select a category</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Brands to exclude</label>
          <select onChange={(e) => setSelectedProduct(parseInt(e.target.value))}>
            <option value="">Select a brand</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Select Product:</label>
          <select onChange={(e) => setSelectedProduct(parseInt(e.target.value))}>
            <option value="">Select a product</option>
            {products.map((product) => (
              <option key={product.id} value={product.id}>
                {product.name}
              </option>
            ))}
          </select>
        </div>
        <button type="submit">Apply Discount</button>
      </form>

      <div>
        <h1>Discount Products</h1>
      </div>
    </div>
  );
};

export default DiscountManager;

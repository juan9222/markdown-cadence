import React, { useState } from 'react';
import './App.css';
import MarkdownCadence from './components/MarkdownCadence/MarkdownCadence';
import DiscountManager from './components/DiscountManager/DiscountManager';

function App() {
  const [activeTab, setActiveTab] = useState('markdown'); 
  const [products, setProducts] = useState([
    { id: 1, name: 'T-shirt', price: 20, daysInStore: 5, discountedPrice: 20 },
    { id: 2, name: 'Jeans', price: 40, daysInStore: 15, discountedPrice: 40 },
    { id: 3, name: 'Dress', price: 60, daysInStore: 35, discountedPrice: 60 },
    { id: 4, name: 'Jacket', price: 100, daysInStore: 12, discountedPrice: 100 },
    { id: 5, name: 'Shoes', price: 50, daysInStore: 25, discountedPrice: 50 },
  ]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const applyDiscount = (updatedProducts) => {
    setProducts(updatedProducts);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Product Discount System</h1>
        <div className="tabs">
          <button
            className={`tab ${activeTab === 'markdown' ? 'active' : ''}`}
            onClick={() => handleTabClick('markdown')}
          >
            Markdown Cadence
          </button>
          <button
            className={`tab ${activeTab === 'discount' ? 'active' : ''}`}
            onClick={() => handleTabClick('discount')}
          >
            Discount Manager
          </button>
        </div>
      </header>

      <div className="tab-content">
        {activeTab === 'markdown' && <MarkdownCadence products={products} />}
        {activeTab === 'discount' && <DiscountManager products={products} setProducts={applyDiscount} />}
      </div>
    </div>
  );
}

export default App;

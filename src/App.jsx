import React, { useState } from 'react';
import ProductCard from './ProductCard';
import './App.css';

const products = [
  {
    id: 1,
    title: 'Laptop',
    category: 'Electronics',
    price: '$999',
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
  },
  {
    id: 2,
    title: 'Coffee Maker',
    category: 'Home Appliances',
    price: '$49',
    image: 'https://images.unsplash.com/photo-1509460913899-35e0b0c27a9d',
  },
  {
    id: 3,
    title: 'Headphones',
    category: 'Electronics',
    price: '$199',
    image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167',
  },
];

function App() {
  //store state of category filter
  const [filter, setFilter] = useState('');

  const categories = ['All', 'Electronics', 'Home Appliances'];

  //filter products based on selected category
  const filteredProducts =
    filter && filter !== 'All'
      ? products.filter((product) => product.category === filter)
      : products;

  return (
    <div className="app-container">
      <h1 className="app-title">ShopEase Product Catalog</h1>

      {/* render category filter buttons */}
      <div className="filter-buttons">
        {categories.map((category) => (
          <button
            key={category}
            //highlight active filter button
            className={filter === category || (category === 'All' && !filter) ? 'active' : ''}
            //update filter state on button click
            onClick={() => setFilter(category === 'All' ? '' : category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* render filtered product list */}
      <div className="product-list">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;
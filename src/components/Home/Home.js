import React, { useEffect, useState } from 'react';
import './Home.css';

function Home({ currentUser }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data));

    const userCart = JSON.parse(localStorage.getItem(`${currentUser}_cart`)) || [];
    setCart(userCart);
  }, [currentUser]);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    localStorage.setItem(`${currentUser}_cart`, JSON.stringify(updatedCart));
  };

  return (
    <div className="home-container">
      <div className="product-list">
        {products.map(product => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.title} className="product-image" />
            <div className="product-details">
              <h3 className="product-title">{product.title}</h3>
              <p className="product-price">${product.price}</p>
              <button onClick={() => addToCart(product)} className="add-to-cart-button">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;

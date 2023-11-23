// App.js

import React, { useState } from 'react';
import Bidding from './components/Bidding';
import BidList from './components/BidList';
import ProductAddition from './components/ProductAddition'; // Import the ProductAddition component
import './App.css'; 
import './components/ProductAddition.css'; // Import the CSS file for ProductAddition component
import './components/Bidding.css'; // Import the CSS file for styling


const App = () => {
  const [bidAmount, setBidAmount] = useState(0);
  const [bids, setBids] = useState([]);
  const [products, setProducts] = useState([]);

  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleBidChange = (bid) => {
    setBidAmount(bid);
  };

  const handlePlaceBid = (bid) => {
    setBids([...bids, bid]);
  };

  const handleAddProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <h1>Auction Bidding App</h1>
      
      <ProductAddition onAddProduct={handleAddProduct} />
      {products.map((product, index) => (
        <div key={index}>
          <h3>{product.productName}</h3>
          <p>Initial Bid: ${product.initialBid}</p>
          {product.image && <img src={product.image} alt={product.productName} style={{ maxWidth: '200px' }} />}
          <br></br>
          <button
          onClick={() => setSelectedProduct(product)}
          style={{
            backgroundColor: '#4caf50',
            color: '#fff',
            padding: '10px',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '4px',
            marginTop: '10px',
            transition: 'background-color 0.3s', // Add a smooth transition effect
          }}
        >
          Bid on this product
        </button>
        </div>
      ))}
      {selectedProduct && (
        <Bidding
          product={selectedProduct}
          bidAmount={bidAmount}
          onBidChange={handleBidChange}
          onPlaceBid={handlePlaceBid}
        />
      )}
      <BidList bids={bids} />
    </div>
  );
};

export default App;



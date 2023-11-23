// Bidding.js

import React, { useState } from 'react';

const Bidding = ({ product, onBidChange, onPlaceBid }) => {
  const [bidAmount, setBidAmount] = useState(0);

  const handleBidChange = (e) => {
    setBidAmount(Number(e.target.value));
    onBidChange(e.target.value); // Pass bid amount back to the parent component if needed
  };

  const handlePlaceBid = () => {
    if (bidAmount <= 0) {
      alert('Bid amount must be greater than 0');
    } else if (bidAmount < product.initialBid) {
      alert('Bid amount must be equal to or greater than the initial bid');
    } else {
      onPlaceBid(bidAmount);
      setBidAmount(0);
    }
  };

  return (
    <div>
      <h2>Bidding for {product.productName}</h2>
      <label>Enter Your Bid:</label>
      <input type="number" value={bidAmount} onChange={handleBidChange} />
      <button onClick={handlePlaceBid}>Place Bid</button>
    </div>
  );
};

export default Bidding;

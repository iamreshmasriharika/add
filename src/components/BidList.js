// BidList.js

import React from 'react';

const BidList = ({ bids }) => {
  return (
    <div>
      <h2>Current Bids</h2>
      <ul>
        {bids.map((bid, index) => (
          <li key={index}>Bidder {index + 1} : ${bid}</li>
          
        ))}
      </ul>
      
    </div>
  );
};

export default BidList;


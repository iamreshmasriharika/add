// ProductAddition.js

import React, { useState } from 'react';

const ProductAddition = ({ onAddProduct }) => {
  const [productName, setProductName] = useState('');
  const [initialBid, setInitialBid] = useState(0);
  const [image, setImage] = useState(null);
  const [endDate, setEndDate] = useState('');
  const [endTime, setEndTime] = useState('');
  const [ampm, setAmPm] = useState('AM'); // Default to AM
  const [isTimeFrozen, setIsTimeFrozen] = useState(false);

  const handleProductNameChange = (e) => {
    setProductName(e.target.value);
  };

  const handleInitialBidChange = (e) => {
    setInitialBid(Number(e.target.value));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleEndTimeChange = (e) => {
    setEndTime(e.target.value);
  };

  const handleAmPmChange = (e) => {
    setAmPm(e.target.value);
  };

  const handleAddProduct = () => {
    const productEndDateTime = new Date(`${endDate}T${endTime} ${ampm}`);
    const currentDate = new Date();

    // Convert to Indian Standard Time (IST)
    productEndDateTime.setHours(productEndDateTime.getHours() + 5);
    productEndDateTime.setMinutes(productEndDateTime.getMinutes() + 30);

    if (
      productName.trim() === '' ||
      initialBid <= 0 ||
      !image ||
      currentDate >= productEndDateTime ||
      isTimeFrozen
    ) {
      alert('Please enter valid product details, ensure the end date and time are in the future, and the time is not frozen.');
    } else {
      onAddProduct({ productName, initialBid, image, endDate: productEndDateTime });
      setProductName('');
      setInitialBid(0);
      setImage(null);
      setEndDate('');
      setEndTime('');
      setAmPm('AM');
      setIsTimeFrozen(true);
    }
  };

  return (
    <div className="product-addition">
      <h2>Add Product for Bidding</h2>
      <label>Product Name:</label>
      <input type="text" value={productName} onChange={handleProductNameChange} />

      <label>Initial Bid:</label>
      <input type="number" value={initialBid} onChange={handleInitialBidChange} />

      <label>Upload Image:</label>
      <input type="file" accept="image/*" onChange={handleImageChange} />

      <label>End Date:</label>
      <input type="date" value={endDate} onChange={handleEndDateChange} />

      <label>End Time:</label>
      <input type="time" value={endTime} onChange={handleEndTimeChange} />
      
      <label>AM/PM:</label>
      <select value={ampm} onChange={handleAmPmChange}>
        <option value="AM">AM</option>
        <option value="PM">PM</option>
      </select>

      <button onClick={handleAddProduct}>Add Product</button>
    </div>
  );
};

export default ProductAddition;

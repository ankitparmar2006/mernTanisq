import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    image: '',
    secimg: '',
    rating: '',
    sold: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/products', product);
    navigate('/admin');
  };

  return (
    <div>
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" onChange={handleChange} required />
        <input name="type" placeholder="Type" onChange={handleChange} required />
        <input name="price" placeholder="Price" type="number" onChange={handleChange} required />
        <input name="image" placeholder="Image URL" onChange={handleChange} />
        <input name="secimg" placeholder="Secondary Image URL" onChange={handleChange} />
        <input name="rating" placeholder="Rating" type="number" onChange={handleChange} />
        <input name="sold" placeholder="Sold" type="number" onChange={handleChange} />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;

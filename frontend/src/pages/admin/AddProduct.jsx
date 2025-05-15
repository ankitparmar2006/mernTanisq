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
    <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "100vh", background: "#f7f7f7" }}>
      <div className="p-5 shadow rounded" style={{ background: "white", width: "100%", maxWidth: "500px" }}>
        <h3 className="text-center mb-4" style={{ fontWeight: "bold", color: "#333" }}>Add New Product</h3>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            name="name"
            placeholder="Product Name"
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="type"
            placeholder="Product Type"
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="price"
            placeholder="Price"
            type="number"
            onChange={handleChange}
            required
          />
          <input
            className="form-control mb-3"
            name="image"
            placeholder="Main Image URL"
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            name="secimg"
            placeholder="Secondary Image URL"
            onChange={handleChange}
          />
          <input
            className="form-control mb-3"
            name="rating"
            placeholder="Rating (e.g., 8.5)"
            type="number"
            step="0.1"
            onChange={handleChange}
          />
          <input
            className="form-control mb-4"
            name="sold"
            placeholder="Items Sold"
            type="number"
            onChange={handleChange}
          />
          <button
            type="submit"
            className="btn btn-primary w-100"
            style={{ backgroundColor: "rgb(116, 114, 7)", border: "none" }}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;

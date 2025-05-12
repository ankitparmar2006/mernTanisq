import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = () => {
  const [product, setProduct] = useState({
    name: '',
    type: '',
    price: '',
    image: '',
    secimg: '',
    rating: '',
    sold: '',
  });

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/api/products`).then((res) => {
      const prod = res.data.find((p) => p._id === id);
      setProduct(prod);
    });
  }, [id]);

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/products/${id}`, product);
      navigate('/admin');
    } catch (err) {
      console.error(err);
      alert("Error updating product");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {Object.keys(product).map((key) => (
          <div className="mb-3" key={key}>
            <label className="form-label">{key}</label>
            <input
              type="text"
              className="form-control"
              name={key}
              value={product[key] || ''}
              onChange={handleChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="btn btn-warning">Update Product</button>
      </form>
    </div>
  );
};

export default EditProduct;

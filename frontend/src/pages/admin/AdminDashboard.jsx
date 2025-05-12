import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Button, Table } from 'react-bootstrap';
import { toast } from 'react-toastify';
import AOS from 'aos';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [stats, setStats] = useState({ totalSales: 0, totalEarnings: 0 });

  useEffect(() => {
    fetchProducts();
    fetchStats();
    AOS.init();
  }, []);

  const fetchProducts = async () => {
    const res = await axios.get('http://localhost:5000/api/products');
    setProducts(res.data);
  };

  const fetchStats = async () => {
    const res = await axios.get('http://localhost:5000/api/products/stats');
    setStats(res.data);
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`);
      toast.success('Product deleted successfully!');
      fetchProducts();
      fetchStats();
    } catch (error) {
      toast.error('Error deleting product!');
    }
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">Admin Dashboard</h1>
      <div className="stats mb-4">
        <div className="d-flex justify-content-between">
          <div>
            <h4>Total Sales: {stats.totalSales}</h4>
          </div>
          <div>
            <h4>Total Earnings: ₹{stats.totalEarnings}</h4>
          </div>
        </div>
      </div>

      <Link to="/admin/add">
        <Button variant="success" className="mb-3">
          Add New Product
        </Button>
      </Link>

      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th> {/* Added Image Column */}
            <th>Name</th>
            <th>Type</th>
            <th>Price</th>
            <th>Sold</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((prod) => (
            <tr key={prod._id} data-aos="fade-up">
              <td>
                <img 
                  src={prod.image || 'default_image_path.jpg'} 
                  alt={prod.name} 
                  style={{ width: '50px', height: '50px', objectFit: 'cover' }} 
                />
              </td>
              <td>{prod.name}</td>
              <td>{prod.type}</td>
              <td>₹{prod.price}</td>
              <td>{prod.sold}</td>
              <td>
                <Link to={`/admin/edit/${prod._id}`}>
                  <Button variant="primary" className="mr-2">
                    Edit
                  </Button>
                </Link>
                <Button
                  variant="danger"
                  onClick={() => deleteProduct(prod._id)} style={{ marginLeft: "20px" }}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
};

export default AdminDashboard;

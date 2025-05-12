import React from "react";
import { NavLink } from "react-router-dom";
import "../../admin/admin.css";

const Sidebar = () => {
  return (
    <div className="admin-sidebar">
      <h2>Admin Panel</h2>
      <nav>
        <ul>
          <li><NavLink to="/admin/dashboard">Dashboard</NavLink></li>
          <li><NavLink to="/admin/add-product">Add Product</NavLink></li>
          <li><NavLink to="/admin/products">All Products</NavLink></li>
          <li><NavLink to="/admin/users">Users</NavLink></li>
          <li><NavLink to="/admin/orders">Orders</NavLink></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

import React, { useEffect, useState } from "react";
import axios from "axios";
import "./admin.css";

const DashboardHome = () => {
  const [stats, setStats] = useState({
    totalSales: 0,
    totalEarnings: 0,
    totalOrders: 0,
    totalUsers: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const ordersRes = await axios.get("/api/orders");
        const usersRes = await axios.get("/api/users");

        const totalSales = ordersRes.data.length;
        const totalEarnings = ordersRes.data.reduce(
          (sum, order) => sum + order.totalPrice,
          0
        );
        const totalUsers = usersRes.data.length;

        setStats({
          totalSales,
          totalEarnings,
          totalOrders: totalSales,
          totalUsers,
        });
      } catch (error) {
        console.error("Failed to fetch dashboard stats:", error);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="dashboard-home">
      <h2>Welcome, Admin</h2>
      <div className="stats-grid">
        <div className="stat-card gold">
          <h3>Total Sales</h3>
          <p>{stats.totalSales}</p>
        </div>
        <div className="stat-card green">
          <h3>Total Earnings</h3>
          <p>₹{stats.totalEarnings.toFixed(2)}</p>
        </div>
        <div className="stat-card orange">
          <h3>Total Orders</h3>
          <p>{stats.totalOrders}</p>
        </div>
        <div className="stat-card purple">
          <h3>Total Users</h3>
          <p>{stats.totalUsers}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;

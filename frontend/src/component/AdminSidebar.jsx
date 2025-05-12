import { Link, Outlet } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <div style={{ display: "flex", height: "100vh" }}>
      <aside style={{ width: "200px", background: "#333", color: "#fff", padding: "1rem" }}>
        <h2>Admin</h2>
        <nav>
          <Link to="/admin" style={{ display: "block", color: "#fff" }}>Dashboard</Link>
          <Link to="/admin/products" style={{ display: "block", color: "#fff" }}>Products</Link>
          <Link to="/admin/add-product" style={{ display: "block", color: "#fff" }}>Add Product</Link>
        </nav>
      </aside>
      <main style={{ flex: 1, padding: "2rem" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminSidebar;

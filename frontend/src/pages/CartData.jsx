import Table from 'react-bootstrap/Table';
import { FaRupeeSign, FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { useDispatch, useSelector } from 'react-redux';
import { qntyIncrese, qntyDecrease, dataRemove } from '../cartSlice';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartData = () => {
  const proData = useSelector(state => state.mycart.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let netAmount = 0;

  const handleQtyChange = (type, id) => {
    if (type === "inc") dispatch(qntyIncrese({ id }));
    else dispatch(qntyDecrease({ id }));
  };

  const handleRemove = (id) => {
    dispatch(dataRemove({ id }));
    toast.info("Item removed from cart.");
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial, sans-serif" }}>
      <center><h2 style={{ marginBottom: "30px", fontWeight: "700", color: "#4B0082" }}>🛒 My Cart</h2></center>

      <Table striped bordered hover responsive style={{ borderRadius: "10px", overflow: "hidden", boxShadow: "0 6px 20px rgba(0,0,0,0.1)" }}>
        <thead style={{ backgroundColor: "#f0f0f0", fontWeight: "bold" }}>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>Product Name</th>
            <th>Category</th>
            <th>Price <FaRupeeSign /></th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {proData.map((item, index) => {
            const total = item.price * item.qnty;
            netAmount += total;
            return (
              <tr key={item.id}>
                <td>{index + 1}</td>
                <td><img src={item.image} width="90" height="90" style={{ borderRadius: "10px", objectFit: "cover" }} alt={item.name} /></td>
                <td style={{ fontWeight: "600" }}>{item.name}</td>
                <td>{item.category}</td>
                <td>₹{item.price}</td>
                <td style={{ fontSize: "18px", textAlign: "center" }}>
                  <Button variant="light" onClick={() => handleQtyChange("dec", item.id)} style={{ border: "none", color: "#d35400" }}>
                    <FaCircleMinus />
                  </Button>
                  <span style={{ margin: "0 10px" }}>{item.qnty}</span>
                  <Button variant="light" onClick={() => handleQtyChange("inc", item.id)} style={{ border: "none", color: "#27ae60" }}>
                    <FaPlusCircle />
                  </Button>
                </td>
                <td>₹{total}</td>
                <td>
                  <Button variant="danger" size="sm" onClick={() => handleRemove(item.id)}>Remove</Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div style={{ display: "flex", justifyContent: "flex-end", marginTop: "30px" }}>
        <div style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "15px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          minWidth: "300px",
          textAlign: "right"
        }}>
          <h4>Total Amount: <FaRupeeSign /> {netAmount}</h4>
          <Button
            variant="success"
            onClick={() => navigate("/checkout")}
            style={{ marginTop: "10px", width: "100%", fontWeight: "bold" }}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>

      <br /><br />
    </div>
  );
};

export default CartData;

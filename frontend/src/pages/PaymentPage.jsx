import axios from "axios";
import { useState } from "react";

function PaymentPage() {
  const [product, setProduct] = useState({
    name: "Gold Necklace",
    creator: "Tanisq",
    img: "https://your-product-image-url.jpg",
    price: 1500,
  });

  const initPay = (data) => {
    const options = {
      key: "rzp_test_pzkHWxo3sRdVQW", // your test key
      amount: data.amount,
      currency: data.currency,
      name: product.name,
      description: "Payment for Jewellery",
      image: product.img,
      order_id: data.id,
      handler: async (response) => {
        try {
          const verifyURL = "http://localhost:5000/api/payment/verify";
          const res = await axios.post(verifyURL, response);
          console.log("Verified:", res.data);
          alert("Payment Successful!");
        } catch (error) {
          console.log(error);
        }
      },
      theme: {
        color: "#d4af37", // gold shade
      },
    };
    const rzp1 = new window.Razorpay(options);
    rzp1.open();
  };

  const handlePay = async () => {
    try {
      const orderURL = "http://localhost:5000/api/payment/orders";
      const { data } = await axios.post(orderURL, { amount: product.price });
      console.log(data);
      initPay(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container mt-5 text-center">
      <h2>Buy Product with Razorpay</h2>
      <img src={product.img} alt="Product" style={{ width: "200px" }} />
      <h4>{product.name}</h4>
      <p>By {product.creator}</p>
      <h5>Price: ₹{product.price}</h5>
      <button onClick={handlePay} className="btn btn-primary mt-3">
        Pay Now
      </button>
    </div>
  );
}

export default PaymentPage;

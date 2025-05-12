import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState, useEffect, useContext } from 'react';
import axios from "axios";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { addtoCart } from '../cartSlice';
import { useDispatch } from 'react-redux';
import { IoStarHalfOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ type }) => {
  const [myData, setMyData] = useState([]); // Data ko store karne ka state
  const [hoverIndex, setHoverIndex] = useState(null); // Hover index track karne ka state

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  // Load data from both JSON server and MongoDB
  const loadData = async () => {
    try {
      const jsonRes = await axios.get("http://localhost:3000/Jewellery"); // JSON server ka data
      const mongoRes = await axios.get("http://localhost:5000/api/products"); // MongoDB ka data

      // Merge both data
      const mergedData = [...jsonRes.data, ...mongoRes.data];
      setMyData(mergedData); // Combine and set in state
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData(); // Load data on component mount
  }, []);

  const ProDisplay = (id) => {
    navigate(`/productdisplay/${id}`); // Navigate to product display page
  };

  const handleBuy = (product) => {
    if (!user) {
      toast.warning("Please login to buy");
      navigate('/login');
      return;
    }

    // If logged in, proceed to buy
    console.log('Buying product:', product.name);
    toast.success(`Proceeding to buy: ${product.name}`);
    // TODO: Add further buy logic (maybe redirect to checkout)
  };

  // Filter data based on the type (if provided)
  const filteredData = type
    ? myData.filter(item => item.type === type)
    : myData;

  const ans = filteredData.map((key, index) => {
    return (
      <Card style={{ width: '330px' }} key={key._id || key.id} data-aos="zoom-in">
        <div
          onMouseEnter={() => setHoverIndex(index)}
          onMouseLeave={() => setHoverIndex(null)}
        >
          <a href="#" onClick={() => ProDisplay(key._id || key.id)}>
            <Card.Img
              variant="top"
              src={hoverIndex === index ? key.secimg : key.image}
              style={{ height: "280px" }}
            />
          </a>
        </div>

        <Card.Body>
          <Card.Title>{key.name}</Card.Title>
          <Card.Text>
            <h5> Price: <FaIndianRupeeSign /> {key.price}</h5>
            Category: {key.type} <br /><br />
            <div style={{ display: 'flex', textAlign: "center" }}>
              <h6><IoStarHalfOutline /> Rating</h6>
              <h6 style={{
                backgroundColor: key.rating >= 8.5 ? "rgba(116, 114, 7, 0.788)" : "Orange",
                width: "40px",
                height: "25px",
                paddingTop: "2px",
                borderRadius: "50%",
                color: "white",
                textAlign: "center"
              }}>
                {key.rating}
              </h6>
            </div>
          </Card.Text>

          <Button
            variant="primary"
            onClick={() => {
              dispatch(addtoCart({
                id: key._id || key.id,
                name: key.name,
                category: key.category,
                type: key.type,
                price: key.price,
                image: key.image,
                secimg: key.secimg,
                rating: key.rating,
                qnty: 1
              }));
            }}
            style={{ backgroundColor: "rgb(116, 114, 7)" }}
          >
            Add to Cart
          </Button>

          <Button
            style={{ marginLeft: "90px" }}
            id='buy-buy-btn'
            onClick={() => handleBuy(key)}
          >
            Buy Now
          </Button>
        </Card.Body>
      </Card>
    );
  });

  return (
    <div id='jewellery-data'>
      {ans}
    </div>
  );
};

export default Cart;

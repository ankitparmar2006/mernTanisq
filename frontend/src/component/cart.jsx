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
import { addToWishlist } from '../component/wishlistSlice'; // import karo
import '../css/Cart.css'; // custom styles if needed

const Cart = ({ type }) => {
  const [myData, setMyData] = useState([]);
  const [hoverIndex, setHoverIndex] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const loadData = async () => {
    try {
      const jsonRes = await axios.get("http://localhost:3000/Jewellery");
      const mongoRes = await axios.get("http://localhost:5000/api/products");
      const mergedData = [...jsonRes.data, ...mongoRes.data];
      setMyData(mergedData);
    } catch (error) {
      console.error("Error loading data:", error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const ProDisplay = (id) => {
    navigate(`/productdisplay/${id}`);
  };

  const handleBuy = (product) => {
    if (!user) {
      toast.warning("Please login to buy");
      navigate('/login');
      return;
    }
    toast.success(`Proceeding to buy: ${product.name}`);
    // TODO: checkout logic
  };

  const filteredData = type ? myData.filter(item => item.type === type) : myData;

  return (
    <div id='jewellery-data' style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', padding: '30px' }}>
      {filteredData.map((key, index) => {
        const isHovering = hoverIndex === index;
        return (
          <Card
            key={key._id || key.id}
            style={{
              width: '300px',
              border: 'none',
              borderRadius: '15px',
              boxShadow: '0 8px 25px rgba(0,0,0,0.1)',
              transition: 'transform 0.3s ease',
              overflow: 'hidden',
              cursor: 'pointer'
            }}
            className="hover-card"
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            data-aos="zoom-in"
          >
            <div onClick={() => ProDisplay(key._id || key.id)} style={{ overflow: 'hidden' }}>
              <Card.Img
                variant="top"
                src={isHovering ? key.secimg : key.image}
                style={{ height: "280px", objectFit: "cover", transition: "transform 0.4s ease" }}
                className="card-img"
              />
            </div>
            <Card.Body style={{ padding: '15px 20px' }}>
              <Card.Title style={{ fontWeight: "600", fontSize: "20px", color: "#333" }}>{key.name}</Card.Title>
              <Card.Text style={{ color: "#555" }}>
                <h5 style={{ color: "#222" }}>Price: <FaIndianRupeeSign /> {key.price}</h5>
                Category: {key.type}
                <div style={{ display: 'flex', alignItems: 'center', marginTop: "10px" }}>
                  <IoStarHalfOutline style={{ marginRight: "5px" }} />
                  <span style={{
                    backgroundColor: key.rating >= 8.5 ? "#bb9f04" : "#f0a500",
                    color: "white",
                    padding: "5px 10px",
                    borderRadius: "20px",
                    fontSize: "14px"
                  }}>{key.rating}</span>
                </div>
              </Card.Text>

              <div style={{ display: "flex", justifyContent: "space-between", margin: "15px 0" }}>
                <Button
                  onClick={() => {
                    const item = {
                      id: key._id || key.id,
                      name: key.name,
                      category: key.category,
                      type: key.type,
                      price: key.price,
                      image: key.image,
                      secimg: key.secimg,
                      rating: key.rating,
                    };
                    dispatch(addToWishlist(item));
                    toast.success("Added to Wishlist!");
                  }}
                  style={{
                    backgroundColor: "#e91e63",
                    border: "none",
                    padding: "6px 12px",
                    fontSize: "14px",
                    borderRadius: "30px"
                  }}
                >
                  ❤️ Fav
                </Button>

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
                   // toast.success("Added to Cart!");
                  }}
                  style={{
                    backgroundColor: "#795548",
                    border: "none",
                    fontSize: "14px",
                    padding: "6px 12px",
                    borderRadius: "30px"
                  }}
                >
                  Add to Cart
                </Button>
              </div>

              <Button
                onClick={() => handleBuy(key)}
                style={{
                  backgroundColor: "#4CAF50",
                  border: "none",
                  width: "100%",
                  padding: "10px",
                  fontSize: "16px",
                  borderRadius: "30px"
                }}
              >
                Buy Now
              </Button>
            </Card.Body>
          </Card>
        );
      })}
    </div>
  );
};

export default Cart;

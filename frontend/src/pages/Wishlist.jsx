import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { FaIndianRupeeSign, FaRegHeart } from 'react-icons/fa6';
import { IoStarHalfOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';
import { removeFromWishlist } from '../component/wishlistSlice';
import 'react-toastify/dist/ReactToastify.css';
import CustomLineDesign from './LineImage';
import Footer from '../component/Footer';

const Wishlist = () => {
  const wishlistItems = useSelector(state => state.wishlist.wishlist);
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromWishlist(id));
    let existingWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    existingWishlist = existingWishlist.filter(item => item.id !== id);
    localStorage.setItem("wishlist", JSON.stringify(existingWishlist));
    toast.info("Removed from Wishlist!");
  };

  return (
    <>
      <CustomLineDesign />
      <div className="container my-5">
        <h2 className="text-center mb-5" style={{ fontWeight: 'bold', color: '#444', borderBottom: '3px solid gold', display: 'inline-block' }}>
          <FaRegHeart style={{ marginRight: '8px', color: 'crimson' }} />
          Your Wishlist
        </h2>

        {wishlistItems.length === 0 ? (
          <div className="text-center text-muted">
            <h4><FaRegHeart style={{ fontSize: '25px' }} /> No items in wishlist</h4>
          </div>
        ) : (
          wishlistItems.map(item => (
            <div key={item.id} className="wishlist-item shadow-sm p-3 mb-4 rounded d-flex align-items-center justify-content-between" style={{ backgroundColor: "#f9f9f9", border: "1px solid #ddd" }}>
              <div className="d-flex align-items-center" style={{ width: "70%" }}>
                <img src={item.image} alt={item.name} className="img-fluid rounded" style={{ width: '120px', height: '120px', objectFit: 'cover', marginRight: '20px' }} />
                <div>
                  <h5 style={{ fontWeight: '600' }}>{item.name}</h5>
                  <p className="mb-1">Price: <FaIndianRupeeSign /> {item.price}</p>
                  <p className="mb-1 d-flex align-items-center">
                    <IoStarHalfOutline />
                    <span style={{
                      backgroundColor: item.rating >= 8.5 ? 'green' : 'orange',
                      color: 'white',
                      padding: '2px 10px',
                      borderRadius: '12px',
                      marginLeft: '10px',
                      fontSize: '14px'
                    }}>
                      {item.rating}
                    </span>
                  </p>
                </div>
              </div>

              <div className="text-end">
                <Button
                  variant="success"
                  onClick={() => toast.success("Added to Cart!")}
                  style={{ borderRadius: "8px", marginBottom: "10px", width: "130px" }}
                >
                  Add to Cart
                </Button>
                <br />
                <Button
                  variant="danger"
                  onClick={() => handleRemove(item.id)}
                  style={{ borderRadius: "8px", width: "130px" }}
                >
                  Remove
                </Button>
              </div>
            </div>
          ))
        )}
      </div>

      <CustomLineDesign />
      <Footer />
    </>
  );
};

export default Wishlist;

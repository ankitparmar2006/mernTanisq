import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import CustomLineDesign from "./LineImage";
const Search = () => {
  const [text, setText] = useState("");
  const [result, setResult] = useState([]);
  const proData = useSelector((state) => state.mycart.cart);  // Redux

  const handleSearch = async () => {
    let finalResults = [];

    const localFiltered = proData.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );

    finalResults = [...localFiltered];

    try {
      const res = await axios.get(`http://localhost:5000/api/search?query=${text}`);
      const backendResults = res.data;

      const uniqueBackend = backendResults.filter(
        (item) => !finalResults.some((local) => local.name === item.name)
      );

      finalResults = [...finalResults, ...uniqueBackend];
    } catch (err) {
      console.log("Search Error:", err);
    }

    setResult(finalResults);
  };

  const inputStyle = {
    padding: "12px 20px",
    fontSize: "16px",
    width: "300px",
    borderRadius: "30px",
    border: "1px solid #b89b5e",
    outline: "none",
    marginRight: "10px",
    backgroundColor: "#fff8e7",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)"
  };

  const buttonStyle = {
    padding: "12px 25px",
    backgroundColor: "rgb(116, 114, 7)",
    color: "white",
    border: "none",
    borderRadius: "30px",
    cursor: "pointer",
    fontWeight: "600",
    fontSize: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    transition: "0.3s",
  };

  const handleHover = (e, hover) => {
    e.target.style.backgroundColor = hover
      ? "rgb(136, 134, 10)"
      : "rgb(116, 114, 7)";
  };

  const containerStyle = {
    textAlign: "center",
    padding: "40px 20px",
    backgroundColor: "#fffef5",
    minHeight: "100vh",
  };

  const cardStyle = {
    display: "inline-block",
    background: "#fff",
    border: "1px solid #e6d8b9",
    borderRadius: "20px",
    padding: "15px",
    margin: "15px",
    width: "220px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    transition: "transform 0.3s",
  };

  const imageStyle = {
    borderRadius: "12px",
    objectFit: "cover",
    width: "100%",
    height: "150px",
    marginBottom: "10px"
  };

  const headingStyle = {
    fontSize: "28px",
    fontWeight: "700",
    color: "#5c4407",
    marginBottom: "30px",
    fontFamily: "serif"
  };

  return (

<>
<CustomLineDesign/>


<div style={containerStyle}>
      <h1 style={headingStyle}>Find Your Perfect Jewellery ✨</h1>
      <div>
        <input
          type="search"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Search Product..."
          style={inputStyle}
        />
        <button
          onClick={handleSearch}
          style={buttonStyle}
          onMouseOver={(e) => handleHover(e, true)}
          onMouseOut={(e) => handleHover(e, false)}
        >
          🔍 Search
        </button>
      </div>

      <div style={{ marginTop: "40px" }}>
        {result.length > 0 ? (
          result.map((item, index) => (
            <div
              key={index}
              style={cardStyle}
              onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
            >
              <img src={item.image} alt="product" style={imageStyle} />
              <p style={{ fontWeight: "bold", fontSize: "17px" }}>{item.name}</p>
              <p style={{ color: "#777" }}>{item.category || item.type}</p>
              <p style={{ color: "#b68b1b", fontWeight: "600", fontSize: "16px" }}>₹{item.price}</p>
            </div>
          ))
        ) : (
          <p style={{ marginTop: "30px", color: "#999" }}>No result found</p>
        )}
      </div>
    </div>
    <CustomLineDesign/>

    </>

  );
};

export default Search;

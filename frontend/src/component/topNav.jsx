
//============================== top navbar icons ===========================


import { IoDiamondOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
const TopNav=()=>{
    

    const Product =useSelector(state=>state.mycart.cart);
    console.log(Product);
    const proLength=Product.length;
    const navigate=useNavigate();

      const buttonStyle = {
    width: '250px',
    padding: '12px 20px',
    color: 'white',
    fontSize: '16px',
    fontWeight: '600',
    border: 'none',
    borderRadius: '30px',
    boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    cursor: 'pointer',
    letterSpacing: '0.5px',
      backgroundColor: " rgb(116, 114, 7) " 

  };

  const handleMouseOver = (e) => {
    e.target.style.backgroundColor = 'rgb(136, 134, 10)'; // slight lighter hover
    e.target.style.transform = 'translateY(-2px)';
    e.target.style.boxShadow = '0 12px 20px rgba(0, 0, 0, 0.25)';
  };

  const handleMouseOut = (e) => {
    e.target.style.backgroundColor = 'rgb(116, 114, 7)';
    e.target.style.transform = 'none';
    e.target.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.15)';
  };

  const handleMouseDown = (e) => {
    e.target.style.transform = 'scale(0.98)';
  };

  const handleMouseUp = (e) => {
    e.target.style.transform = 'translateY(-2px)';
  };

    const handleClick = () => {
    navigate('/search'); // 👈 Redirect to /search
  };
    return(
        <>
        


        
<Navbar data-bs-theme="dark" id='top-header'>
        <Container>
          {/* ----------------------------------------------------- Tanishq Log ------------------- */}
          <Navbar.Brand href="#home" id="tanisq-logo">
                 <img  src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQuODMgNzQuNzkiPjxkZWZzPjxzdHlsZT4uYntmaWxsOiM4MzI3Mjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNMzguNzksNy41NWMtLjYyLTIuOTEsMS4zMi01LjU2LDQuMTUtNS41Nmg3Ljk1YzIuMTIsLjA5LDQuNzctMS41OSw0Ljc3LTEuNTlWMTMuNzNjMCwxMy41MS03LjQyLDE5LjI0LTEwLjg2LDE5Ljc3LS42MiwuMjctMS4wNiwuMDktLjI2LS41Myw0LjY4LTMsNy40Mi0xMC4xNSw3LjY4LTE2LjI0VjQuNTVjLS45NywuNjItMi44MiwuNzEtMi44MiwuNzFoLTYuOTdjLTEuODUsMC0yLjgyLC42Mi0zLjYyLDIuMjltMzUuNTgsMGMuNjItMi45MS0xLjI0LTUuNTYtNC4xNS01LjU2aC03Ljk1Yy0yLjAzLC4wOS00Ljc3LTEuNTktNC43Ny0xLjU5VjEzLjczYzAsMTMuNTEsNy40MiwxOS4yNCwxMC44NiwxOS43NywuNjIsLjI3LDEuMDYsLjA5LC4yNy0uNTMtNC42OC0zLTcuNDItMTAuMTUtNy42OC0xNi4yNFY0LjU1Yy45NywuNjIsMi44MiwuNzEsMi44MiwuNzFoNy4wNmMxLjg1LDAsMi44MywuNjIsMy41MywyLjI5aDBaTTIwLjI2LDYyLjk5Yy0uNzEtMS43Ny0uMTgtMy43MSwuMjYtNC40MWg4LjAzdjQuNDFoMi4wM3YtMTkuNTFzLS42Mi0uMDktMS4wNiwuNjJjLTMsNC43Ny01LjMsNi04LjY1LDkuMzYtMi44MywyLjgyLTQuOTQsNi0zLjg5LDkuNTNoMy4yN1ptLjg4LTUuNzRoNy40MnYtOC4zOWMtMS44NSwzLjQ0LTYuMjcsNS4zLTcuNDIsOC4zOVptODQuOTMtMTUuOGMtMi41NiwyLjAzLTQuNjgsMy44LTUuODMsNi40NC0xLjI0LDIuNjUtMS41OSw2LjQ0LDAsOS43MSwxLjc3LDMuNjIsMy44LDUuNTYsNi4xOCw3Ljk0LDEuNjgsMS44NSw0Ljg2LDUuNTYsMy44LDguODMsLjc5LDAsMS44NS0xLjk0LDIuMDMtMi42NSwuNDQtMi4yOSwuMTgtMy40NC0uNzktNS4xMi0uNjItMS4xNS0xLjk0LTIuMjktMi45MS0zLjQ0LDEuNDEtMS4xNSwyLjkxLTIuODMsNC4xNS00LjUsMS41OS0yLjIxLDIuNTYtNS45MSwuNTMtOS41My0xLjg1LTMuNDQtNy4wNi02LjYyLTcuMTUtNy42OGgwWm0xLjA2LDIwLjM5Yy0yLjAzLTEuNjgtMy4yNy0zLjA5LTQuNS01LjgzLTEuMjQtMi40Ny0xLjMyLTUuMzktLjc5LTcuNDIsLjYyLTIuMjEsMi4xMi0zLjgsMy41My00Ljk0LDEuNTksMS4xNSwzLjI3LDIuNTYsNC41LDQuNTksMi4wMywzLjQ0LDIuMDMsNS45MSwuNzEsOS4yNy0uNzksMS45NC0xLjY4LDMuMDktMy40NCw0LjMzaDBaTS41Nyw0NS4wN2MtLjM1LS43MSwuMTgtMi41NiwyLjMtMi4zOEgxMy4yOGMxLjMyLC4wOSwyLjEyLS44OCwzLjgtLjcxLTIuMzgsMS45NC0yLjY1LDIuOTEtMy4wOSw0Ljc3bC0xLjY4LDEzLjY4Yy0uNDQsNS41NiwxLjE1LDEwLjE1LDUuMywxMy45NS0yLjU2LC4zNS04LjEyLTMuNzEtOC4zLTExLjEyLS4xOC0zLjcxLC44OC0xNS41NCwuODgtMTUuNTQsLjI2LTEuOTQsMS41LTMuMzUsMS41LTMuMzVIMS44Yy0uNjIsLjA5LS45NywuMDktMS4yNCwuNzFILjU3Wm04MS44NCwxNy4zOWgyLjU2di01LjIxaDYuOTd2NS40N2gyLjY1di0xOC44OWgtMi42NXYxMS45MmgtNi45N3YtMTEuOTJoLTIuNTZ2MTguNjNoMFptLTcuMTUtMTQuMjFjLS42MiwuMTgtMS4yNC0uMDktMS44NS0uNjItLjg4LS43OS0xLjI0LTEuNTktMi4zOC0yLjI5LTEuMjQtLjYyLTMtLjcxLTQuMDYsLjA5LS45NywuNzEtLjk3LDIuMywuMDksMy4xOCwyLjAzLDEuNTksNC4yNCwyLjQ3LDYuOCwzLjgsNC42OCwyLjQ3LDUuNDcsNi44LDIuMjEsOS0yLjc0LDEuODUtNi4xOCwyLjAzLTkuMjcsLjg4LTIuMzgtLjk3LTQuMjQtMi45MS00LjUtNS4zLDEuNTksMCwyLjEyLC43MSwyLjc0LDEuNjgsLjk3LDEuMzIsMS41OSwxLjg1LDMsMi40NywyLjAzLC43OSw0LjMzLC41Myw1LjY1LS4yNiwxLjk0LTEuMjQsMS42OC0zLjI3LC4yNi00LjU5LTIuOTEtMi43NC02LjUzLTMuNTMtOC41Ni01LjU2LTEuNzctMS43Ny0yLjM4LTMuNzEtLjUzLTUuNzQsMS41OS0xLjY4LDUuODMtMi4yMSw4LjMtLjA5LDEuMDYsLjk3LDEuODUsMi4xMiwyLjEyLDMuMzVoMFptLTIxLjEtMTAuMDZjMC0xLjQxLDEuMDYtMi40NywyLjQ3LTIuNDcsMS4yNCwwLDIuMzgsMS4wNiwyLjM4LDIuNDcsMCwxLjMyLTEuMTUsMi40Ny0yLjM4LDIuNDctMS40MSwwLTIuNDctMS4xNS0yLjQ3LTIuNDdabTEuMTUsNS42NWgyLjQ3djE5LjE2aC0yLjQ3di0xOS4xNlptLTE5LjI1LDE5LjE2aDEuNzd2LTEzLjE1Yy44OCwyLjU2LDUuMjEsNS45Miw1LjIxLDUuOTIsMCwwLDMuMzUsMi44Myw0Ljk0LDYuNzFsMS4wNiwuNTN2LTE5LjE2aC0xLjc3djEzLjQyYy0uOTctMi41Ni00Ljc3LTUuNTYtNC43Ny01LjU2LTIuOTEtMi41Ni00Ljg2LTYuMDktNS4zLTcuNzdsLTEuMTUtLjM1djE5LjQyaDBaIi8+PC9zdmc+"
                    width="80px" alt="image" className="logo-img d-inline-block " style={{marginLeft:"-80px"}} data-aos="zoom-in" ></img>

          </Navbar.Brand>



<div id="search-btn">
  <button 
      style={buttonStyle}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onClick={handleClick}

   >
      Search  🔍
    </button>
 
 


  
</div>


          <Nav id='top-icons'>
            <Nav.Link id='nav-font' href="#home"><IoDiamondOutline id='diamond'/> <br />  <span id="top-nav-store"> DIAMOND </span></Nav.Link>
            <Nav.Link  id='nav-font' as={Link} to="payment"><FaStore id='store'/> <br /> <span id="top-nav-store" > STORE</span> </Nav.Link>
            <Nav.Link id='nav-font' as={Link} to="profile">< MdAccountCircle id='account'/> <br /> ACCOUNT </Nav.Link>
            <Nav.Link id='nav-font' href="wishlist"><FaRegHeart id='heart' /> <br /> WISHLIST </Nav.Link>
            <Nav.Link id='nav-font' >    <a href="#" onClick={()=>{navigate("/cartdata")}} style={{textDecoration:"none"}}>



<BsCartDash id='cart'/>  <span style={{ color:"white"}}> {proLength} </span> 
<br /> <span id='nav-font' > CART </span>
</a> 
 </Nav.Link>


         
          
          </Nav>
        </Container>
      </Navbar>
      <br />
        </>
    )
}

export default TopNav;
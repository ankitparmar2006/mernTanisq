import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



//==================================  React swiper imports ====================================================
import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../src/css/styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import { Link ,Outlet } from 'react-router-dom';

//==================================  React Home slider videoss ====================================================


import v1 from "./video/jewelleryvdo1.mp4"
import v2 from "./video/jewelleryvdo2.mp4"
import v3 from "./video/jewelleryvdo3.mp4"
import v4 from "./video/jewelleryved4.mp4"
import v5 from "./video/jewelleryvdo5.mp4"
import v6 from "./video/jewelleryvdo6.mp4"
//============================== react search and other icons ===========================
import { FaSearch } from "react-icons/fa";
import { FaMicrophoneAlt } from "react-icons/fa";
import { MdCameraAlt } from "react-icons/md";

//============================== top navbar icons ===========================


import { IoDiamondOutline } from "react-icons/io5";
import { FaStore } from "react-icons/fa";
import { MdAccountCircle } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { BsCartDash } from "react-icons/bs";

const Layout=()=>{

  
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    const Product =useSelector(state=>state.mycart.cart);
    console.log(Product);
    const proLength=Product.length;
    const navigate=useNavigate();
    return(
      <>



<Navbar data-bs-theme="dark" id='top-header'>
        <Container>
          {/* ----------------------------------------------------- Tanishq Log ------------------- */}
          <Navbar.Brand href="#home">
                 <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIGlkPSJhIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxMTQuODMgNzQuNzkiPjxkZWZzPjxzdHlsZT4uYntmaWxsOiM4MzI3Mjk7ZmlsbC1ydWxlOmV2ZW5vZGQ7fTwvc3R5bGU+PC9kZWZzPjxwYXRoIGNsYXNzPSJiIiBkPSJNMzguNzksNy41NWMtLjYyLTIuOTEsMS4zMi01LjU2LDQuMTUtNS41Nmg3Ljk1YzIuMTIsLjA5LDQuNzctMS41OSw0Ljc3LTEuNTlWMTMuNzNjMCwxMy41MS03LjQyLDE5LjI0LTEwLjg2LDE5Ljc3LS42MiwuMjctMS4wNiwuMDktLjI2LS41Myw0LjY4LTMsNy40Mi0xMC4xNSw3LjY4LTE2LjI0VjQuNTVjLS45NywuNjItMi44MiwuNzEtMi44MiwuNzFoLTYuOTdjLTEuODUsMC0yLjgyLC42Mi0zLjYyLDIuMjltMzUuNTgsMGMuNjItMi45MS0xLjI0LTUuNTYtNC4xNS01LjU2aC03Ljk1Yy0yLjAzLC4wOS00Ljc3LTEuNTktNC43Ny0xLjU5VjEzLjczYzAsMTMuNTEsNy40MiwxOS4yNCwxMC44NiwxOS43NywuNjIsLjI3LDEuMDYsLjA5LC4yNy0uNTMtNC42OC0zLTcuNDItMTAuMTUtNy42OC0xNi4yNFY0LjU1Yy45NywuNjIsMi44MiwuNzEsMi44MiwuNzFoNy4wNmMxLjg1LDAsMi44MywuNjIsMy41MywyLjI5aDBaTTIwLjI2LDYyLjk5Yy0uNzEtMS43Ny0uMTgtMy43MSwuMjYtNC40MWg4LjAzdjQuNDFoMi4wM3YtMTkuNTFzLS42Mi0uMDktMS4wNiwuNjJjLTMsNC43Ny01LjMsNi04LjY1LDkuMzYtMi44MywyLjgyLTQuOTQsNi0zLjg5LDkuNTNoMy4yN1ptLjg4LTUuNzRoNy40MnYtOC4zOWMtMS44NSwzLjQ0LTYuMjcsNS4zLTcuNDIsOC4zOVptODQuOTMtMTUuOGMtMi41NiwyLjAzLTQuNjgsMy44LTUuODMsNi40NC0xLjI0LDIuNjUtMS41OSw2LjQ0LDAsOS43MSwxLjc3LDMuNjIsMy44LDUuNTYsNi4xOCw3Ljk0LDEuNjgsMS44NSw0Ljg2LDUuNTYsMy44LDguODMsLjc5LDAsMS44NS0xLjk0LDIuMDMtMi42NSwuNDQtMi4yOSwuMTgtMy40NC0uNzktNS4xMi0uNjItMS4xNS0xLjk0LTIuMjktMi45MS0zLjQ0LDEuNDEtMS4xNSwyLjkxLTIuODMsNC4xNS00LjUsMS41OS0yLjIxLDIuNTYtNS45MSwuNTMtOS41My0xLjg1LTMuNDQtNy4wNi02LjYyLTcuMTUtNy42OGgwWm0xLjA2LDIwLjM5Yy0yLjAzLTEuNjgtMy4yNy0zLjA5LTQuNS01LjgzLTEuMjQtMi40Ny0xLjMyLTUuMzktLjc5LTcuNDIsLjYyLTIuMjEsMi4xMi0zLjgsMy41My00Ljk0LDEuNTksMS4xNSwzLjI3LDIuNTYsNC41LDQuNTksMi4wMywzLjQ0LDIuMDMsNS45MSwuNzEsOS4yNy0uNzksMS45NC0xLjY4LDMuMDktMy40NCw0LjMzaDBaTS41Nyw0NS4wN2MtLjM1LS43MSwuMTgtMi41NiwyLjMtMi4zOEgxMy4yOGMxLjMyLC4wOSwyLjEyLS44OCwzLjgtLjcxLTIuMzgsMS45NC0yLjY1LDIuOTEtMy4wOSw0Ljc3bC0xLjY4LDEzLjY4Yy0uNDQsNS41NiwxLjE1LDEwLjE1LDUuMywxMy45NS0yLjU2LC4zNS04LjEyLTMuNzEtOC4zLTExLjEyLS4xOC0zLjcxLC44OC0xNS41NCwuODgtMTUuNTQsLjI2LTEuOTQsMS41LTMuMzUsMS41LTMuMzVIMS44Yy0uNjIsLjA5LS45NywuMDktMS4yNCwuNzFILjU3Wm04MS44NCwxNy4zOWgyLjU2di01LjIxaDYuOTd2NS40N2gyLjY1di0xOC44OWgtMi42NXYxMS45MmgtNi45N3YtMTEuOTJoLTIuNTZ2MTguNjNoMFptLTcuMTUtMTQuMjFjLS42MiwuMTgtMS4yNC0uMDktMS44NS0uNjItLjg4LS43OS0xLjI0LTEuNTktMi4zOC0yLjI5LTEuMjQtLjYyLTMtLjcxLTQuMDYsLjA5LS45NywuNzEtLjk3LDIuMywuMDksMy4xOCwyLjAzLDEuNTksNC4yNCwyLjQ3LDYuOCwzLjgsNC42OCwyLjQ3LDUuNDcsNi44LDIuMjEsOS0yLjc0LDEuODUtNi4xOCwyLjAzLTkuMjcsLjg4LTIuMzgtLjk3LTQuMjQtMi45MS00LjUtNS4zLDEuNTksMCwyLjEyLC43MSwyLjc0LDEuNjgsLjk3LDEuMzIsMS41OSwxLjg1LDMsMi40NywyLjAzLC43OSw0LjMzLC41Myw1LjY1LS4yNiwxLjk0LTEuMjQsMS42OC0zLjI3LC4yNi00LjU5LTIuOTEtMi43NC02LjUzLTMuNTMtOC41Ni01LjU2LTEuNzctMS43Ny0yLjM4LTMuNzEtLjUzLTUuNzQsMS41OS0xLjY4LDUuODMtMi4yMSw4LjMtLjA5LDEuMDYsLjk3LDEuODUsMi4xMiwyLjEyLDMuMzVoMFptLTIxLjEtMTAuMDZjMC0xLjQxLDEuMDYtMi40NywyLjQ3LTIuNDcsMS4yNCwwLDIuMzgsMS4wNiwyLjM4LDIuNDcsMCwxLjMyLTEuMTUsMi40Ny0yLjM4LDIuNDctMS40MSwwLTIuNDctMS4xNS0yLjQ3LTIuNDdabTEuMTUsNS42NWgyLjQ3djE5LjE2aC0yLjQ3di0xOS4xNlptLTE5LjI1LDE5LjE2aDEuNzd2LTEzLjE1Yy44OCwyLjU2LDUuMjEsNS45Miw1LjIxLDUuOTIsMCwwLDMuMzUsMi44Myw0Ljk0LDYuNzFsMS4wNiwuNTN2LTE5LjE2aC0xLjc3djEzLjQyYy0uOTctMi41Ni00Ljc3LTUuNTYtNC43Ny01LjU2LTIuOTEtMi41Ni00Ljg2LTYuMDktNS4zLTcuNzdsLTEuMTUtLjM1djE5LjQyaDBaIi8+PC9zdmc+"
                    width="80px" alt="image" className="logo-img d-inline-block " style={{marginLeft:"-80px"}}  ></img>

          </Navbar.Brand>



<div>
  <input type="search" placeholder="Search Gold Jewellery, Diamond Jewellery and more..." className="nav-search-btn" />
 
 
  <FaMicrophoneAlt id='mic' />
  <MdCameraAlt id='camera'/>
  <Button variant="primary" id='search-btn' style={{height:"41px" , marginBottom:"5px" , width:"66px" , borderTopRightRadius:"10px" ,borderBottomRightRadius:"10px" , backgroundColor:" rgb(139, 137, 12)"}} >  <FaSearch id='search'/>
  </Button>

  
</div>


          <Nav id='top-icons'>
            <Nav.Link id='nav-font' href="#home"><IoDiamondOutline id='diamond'/> <br /> DIAMOND</Nav.Link>
            <Nav.Link  id='nav-font' href="#features"><FaStore id='store'/> <br /> STORE </Nav.Link>
            <Nav.Link id='nav-font' href="#pricing">< MdAccountCircle id='account'/> <br /> ACCOUNT </Nav.Link>
            <Nav.Link id='nav-font' href="#pricing"><FaRegHeart id='heart' /> <br /> WISHLIST </Nav.Link>
            <Nav.Link id='nav-font' >    <a href="#" onClick={()=>{navigate("/cartdata")}}>



<BsCartDash id='cart'/>

</a> {proLength}
<br /> CART </Nav.Link>


         
          
          </Nav>
        </Container>
      </Navbar>
      <br />

          {/* ----------------------------------------------------- Tanishq Log ------------------- */}
<Navbar  id='main-navbar'  >
      <Container fluid >
        <Navbar.Brand href="#">STLYE</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll"  />
        <Navbar.Collapse id="navbarScroll" >
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' , color:"white" , gap:"40px"  }}
            navbarScroll
          >
            <Nav.Link id='main-nav-font' as={Link} to="home">HOME</Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="home">ABOUT</Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="home">ALL JEWELLERY</Nav.Link>

            <Nav.Link id='main-nav-font' as={Link} to="goldearring">EARRINGS</Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="goldring">RINGS</Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="goldnackless">NACkLESS</Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="goldbangle">BANGLES</Nav.Link>

            <NavDropdown title="CATEGORY" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
            
            <Nav.Link id='main-nav-font' as={Link} to="home"> <Button>LOGIN</Button></Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="home"> <Button>SIGNIN</Button></Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>








{/* //==================================  React Home slider videoss ==================================================== */}

      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide > <video src={v1} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v2} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v5} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v3} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v4} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v6} controls muted autoPlay width="100%"></video></SwiperSlide>

    
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>



<Outlet/>


      </>
    )
  }
  export default Layout;
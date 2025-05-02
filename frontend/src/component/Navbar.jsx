import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Link  } from 'react-router-dom';

const Navbarmain=()=>{
    

  const Product =useSelector(state=>state.mycart.cart);
  console.log(Product);
  const proLength=Product.length;
  const navigate=useNavigate();
    return(
        <>

        
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
            <Nav.Link id='main-nav-font' as={Link} to="goldnackless">NACKLESS</Nav.Link>
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
            
            <Nav.Link id='main-nav-font' as={Link} to="home" > <Button id='login-btn'>LOG IN</Button></Nav.Link>
            <Nav.Link id='main-nav-font' as={Link} to="signin"> <Button id='signin-btn'>SIGN IN</Button></Nav.Link>

          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>

        
        </>
    )
}
export default Navbarmain;
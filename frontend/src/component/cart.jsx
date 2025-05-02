import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState ,useEffect } from 'react';
import axios from "axios";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { addtoCart } from '../cartSlice'; 
import 'react-toastify/dist/ReactToastify.css';

import {useDispatch} from 'react-redux'; 

import { IoStarHalfOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';



const Cart =({type})=>{

    const [myData , setMyData]=useState([]);
    const [hoverIndex ,setHoverIndex]=useState(null);

    const dispatch=useDispatch();
    const navigate=useNavigate();
 

    const loardData=async()=>{
      let api="http://localhost:3000/Jewellery";
      const res=await axios.get(api);
      console.log(res.data);
      setMyData(res.data);
    }

    useEffect(()=>{
      loardData();
      },[])


      
 const ProDisplay=(id)=>{


  navigate(`/productdisplay/${id}`);
  }
  
    
  const filteredData=type ? myData.filter(item=>
item.type=== type)
:myData;
    const ans=filteredData.map((key,index)=>{
      return(

        <Card style={{ width: '330px' }} key={key.id} data-aos="zoom-in">

          <div onMouseEnter={()=>setHoverIndex(index)} 
                onMouseLeave={()=>setHover(null)}
            >
        <a href="#" onClick={()=>{ProDisplay(key.id)}}>

          <Card.Img variant="top" src={ hoverIndex === index ? key.secimg : key.image} style={{  height:"280px"}} />
          </a>
          </div>

          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
            <h5> Price :  <FaIndianRupeeSign/> {key.price}</h5> 
              Category : {key.type} <br />             <br />

            <div style={{display:'flex', textAlign:"center" }}  >


          <h6> <IoStarHalfOutline/>  Rating   </h6>   <h6 style={{
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

            <Button variant="primary"  onClick={()=>{ dispatch(addtoCart({id:key.id,name:key.name,category:key.category,type:key.type,price:key.price,image:key.image ,secimg:key.secimg ,rating:key.rating,qnty:1})
)}} style={{backgroundColor:"  rgb(116, 114, 7) "}} >Add to Cart            
 </Button>
            


            <a href="#" onClick={()=>{ProDisplay(key.id)}}>
            <Button style={{marginLeft:"90px"}} id='buy-buy-btn' >Buy Now</Button>
            </a>
          </Card.Body>
        </Card>
    
      )
    }) 
    
return(
    <>

<div id='jewellery-data'>
    {ans}
    
</div>



    </>
)
}
export default Cart;
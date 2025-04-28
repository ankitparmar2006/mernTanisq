import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState ,useEffect } from 'react';
import axios from "axios";
import { FaIndianRupeeSign } from "react-icons/fa6";

const Cart =()=>{

    const [myData , setMyData]=useState([]);
    const [hoverIndex ,setHoverIndex]=useState(null);


  
    const loardData=async()=>{
      let api="http://localhost:3000/Jewellery";
      const res=await axios.get(api);
      console.log(res.data);
      setMyData(res.data);
    }
    useEffect(()=>{
    loardData();
    },[])
    
    
    const ans=myData.map((key,index)=>{


      return(
        <>
        
        <Card style={{ width: '20rem' }} key={key.id}>

          <div onMouseEnter={()=>setHoverIndex(index)} 
                onMouseLeave={()=>setHover(null)}
            >


          <Card.Img variant="top" src={ hoverIndex === index ? key.secimg : key.image} />

          </div>

          <Card.Body>
            <Card.Title>{key.name}</Card.Title>
            <Card.Text>
              Category {key.category}
              <h4> <FaIndianRupeeSign/> {key.price}</h4>
            </Card.Text>
            <Button variant="primary">Add to Cart</Button>
          </Card.Body>
        </Card>
    
        </>
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
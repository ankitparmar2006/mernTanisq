import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState ,useEffect } from 'react';
import axios from "axios";
import { FaIndianRupeeSign } from "react-icons/fa6";
import { addtoCart } from '../cartSlice'; 

import {useDispatch} from 'react-redux'; 


const Cart =({type})=>{

    const [myData , setMyData]=useState([]);
    const [hoverIndex ,setHoverIndex]=useState(null);

    const dispatch=useDispatch(); 

    const loardData=async()=>{
      let api="http://localhost:3000/Jewellery";
      const res=await axios.get(api);
      console.log(res.data);
      setMyData(res.data);
    }

    useEffect(()=>{
      loardData();
      },[])

    
  const filteredData=type ? myData.filter(item=>
item.type=== type)
:myData;
    const ans=filteredData.map((key,index)=>{
      return(

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
            <span>   <FaIndianRupeeSign/> {key.price}</span> 
            <span>type : {key.type}</span>
            </Card.Text>
            <Button variant="primary"  onClick={()=>{dispatch(addtoCart({id:key.id,name:key.name,category:key.category,type:key.type,price:key.price,image:key.image ,secimg:key.secimg ,qnty:1}))}}>Add to Cart</Button>
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
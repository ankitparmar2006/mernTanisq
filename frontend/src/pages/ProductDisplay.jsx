import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import {useDispatch} from 'react-redux';
import { IoStarHalfOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

import CustomLineDesign from "./LineImage";
import Footer from "../component/Footer";

const ProductDisplay =()=>{

    const {id}=useParams();

    const [Product , setProduct ]=useState({});

    const dispatch=useDispatch();


    const loardData=async()=>{
        let api=`http://localhost:3000/Jewellery/${id}`;
        const res=await axios.get(api);   
        console.log(res.data);
        setProduct(res.data);
    }

useEffect(()=>{
    loardData();
},[])



    return(
        <>
<div>
<CustomLineDesign/>
</div> 


        <center>

       




        <div id="user1" style={{   width: "80%",  height: "400px",   border:" 1px solid  rgba(116, 114, 7, 0.788) ", marginLeft: "-40px" ,  borderRadius: "20px", backgroundColor:" rgba(218, 215, 29, 0.616)"}}>

<span  id="buy1">

        <div id="buy1-earrings-main">


        </div>
        <div id="buy1-earring-div1" >
            <div id="buy1-earrings-box1"  className="productImg">
                <p id="buy-p" style={{position:"absolute"}}> BEST SELLERS</p>
                
                <img src={Product.image} width="100%" height="100%" style={{borderTopLeftRadius:"25px" , borderBottomRightRadius:"25px"
}} />

        </div>
        
    
        <span style={{  display:"grid", justifyItems:"center"}}    >
            
            <h2 style={{marginLeft: "20px " ,color:  "rgba(116, 114, 7, 0.788)" , fontSize: "30px",  marginBottom: "40px", marginTop: "8px"}} id="category"> Category : {Product.type}</h2>
           <h1 style={{ fontSize: "24px" }}  id="productName">Jewellery Name : {Product.name}   </h1>
             <h2 id="productPrice"   style={{marginLeft:"-160px"}}>Price : <FaIndianRupeeSign/> {Product.price} </h2>
            <p style={{width: "220px",marginLeft:"-60px" }}  >MRP Incl. of all taxes</p>
            <p style={{width: "250px" }}> Upto 20% off on Cart Value: Use Code FLAT20 *TCA</p>
            <h5  style={{width: "350px" , marginLeft:"-70px" }}  >Rating : <IoStarHalfOutline/> {Product.rating}  </h5>
               

               <span>


            <Button variant="primary"
                     onClick={()=>{dispatch(addtoCart({id:Product.id,name:Product.name,category:Product.category,price:Product.price,image:Product.image ,qnty:1}))}}style={{backgroundColor:"  rgb(116, 114, 7) "}} >Add to Cart</Button>
       <button   id="buy-earring-buy-btn" > CONFIRM BUY </button>

               </span>

           
            </span>
    </div>
    
</span>

</div>

        </center>

        <div>
<CustomLineDesign/>
</div> 

<Footer/>

        </>
    )
}

export default ProductDisplay;
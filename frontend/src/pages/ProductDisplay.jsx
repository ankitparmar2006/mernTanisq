import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../cartSlice';
import {useDispatch} from 'react-redux';
import { IoStarHalfOutline } from "react-icons/io5";
import { FaIndianRupeeSign } from "react-icons/fa6";

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

        <center>

       
        <h1>Jewellery Details</h1>

        <div id="prodata" style={{width:"80%"}}>

            <div id="proimage"> 
                <img src={Product.image} width="300" height="300"  />
            </div>

            <div id="prodetail">
            <h3>Jewellery Name :  {Product.name} </h3>
            <h5 style={{color:"golden"}}>  Category : {Product.type}</h5>
            <h3>Price : <FaIndianRupeeSign/> {Product.price}</h3>

<h6>Rating : <IoStarHalfOutline/> {Product.rating}  </h6>

                    <Button variant="primary"
                     onClick={()=>{dispatch(addtoCart({id:Product.id,name:Product.name,category:Product.category,price:Product.price,image:Product.image ,qnty:1}))}}>Add to Cart</Button>


            </div>
        </div>
        </center>
        </>
    )
}

export default ProductDisplay;
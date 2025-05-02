import Table from 'react-bootstrap/Table';
import { FaRupeeSign } from "react-icons/fa";
import { FaPlusCircle } from "react-icons/fa";
import { FaCircleMinus } from "react-icons/fa6";
import { useDispatch } from 'react-redux';
import { qntyIncrese ,qntyDecrease ,dataRemove} from '../cartSlice';
import Button from 'react-bootstrap/esm/Button';
import { useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
const CartData=()=>{

    const proData=useSelector(state=>state.mycart.cart);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    let sno=0;

    let netAmount=0;
    const ans=proData.map((key)=>{
      netAmount+=key.price *key.qnty;
        sno++;
        return(
            <>
<tr>
    <td>{sno}</td>
    <td><img src={key.image} width="100" height="100"/></td>

    <td>{key.name}</td>
    <td>{key.category}</td>
    <td>{key.price}</td>
    <td style={{fontSize:"20px", paddingLeft:"30px"}}>

    <a href="#" onClick={(e)=>{  e.preventDefault(); dispatch(qntyDecrease({id:key.id}))  }}>
    
    <span style={{ color:"rgba(116, 114, 7, 0.788)"}}> 

    <FaCircleMinus />

</span>
    </a>
    {key.qnty}
  
  <a href="#" onClick={(e)=>{  e.preventDefault(); dispatch(qntyIncrese({id:key.id}))}}>

<span style={{ color:"rgba(116, 114, 7, 0.788)"}}> 

  <FaPlusCircle />
</span>
  </a>

    </td>
    <td>{key.price*key.qnty}</td>
    <td>

      <Button onClick={()=>{dispatch(dataRemove({id:key.id}))}}>Remove</Button>
    </td>

</tr>

            </>
        )
    })
    return(
        <>
        <center>

        <h1>MY CART </h1>
        </center>

<h1>Total Amount  <FaRupeeSign />
{netAmount}</h1>

        <Table striped bordered hover>
      <thead>
        <tr>
          <th>S.NO</th>
          <th></th>
          <th>Product Name</th>
          <th>Category</th>
          <th>Price</th>
          <td>Quantity</td>
          <td>Total Amount</td>
          <th></th>
        </tr>
      </thead>
      <tbody>
   {ans}
      </tbody>
    </Table>

<div style={{display:"flex" , justifyContent:"right",
  paddingRight:"50px"}}>

    <Button onClick={()=>{navigate("/checkout")}} >Checkout</Button>
  </div>

    <br /> <br />
        </>
    )
}

export default CartData;
const BuyForm=()=>{

    return(


        
                <>



<div id="user1" style={{   width: "80%",  height: "400px",   border:" 1px solid  rgba(116, 114, 7, 0.788) ", marginLeft: "120px" ,  borderRadius: "20px", backgroundColor:" rgba(218, 215, 29, 0.616)"}}>

<span  id="buy1">

        <div id="buy1-earrings-main">


        </div>
        <div id="buy1-earring-div1" >
            <div id="buy1-earrings-box1"  className="productImg">
                <p id="buy-p"> <i id="fa-regular fa-star"></i> BEST SELLERS</p>
                
            
        </div>
        
    
        <span style={{  display:"grid", justifyItems:"center"}}    >
            
            <h2 style={{marginLeft: "20px " ,color:  "rgba(116, 114, 7, 0.788)" , fontSize: "30px",  marginBottom: "40px", marginTop: "8px"}} id="category"> GOLD EARRINGS JEWELLERY</h2>
           <h1 style={{ fontSize: "24px" }}  id="productName"> The Jyotsana Earrings</h1>
             <h2 id="productPrice"   style={{marginLeft:"-160px"}}>Rs. 30,993</h2>
            <p style={{width: "250px" }}  >MRP Incl. of all taxes</p>
            <p style={{width: "250px" }}> Upto 20% off on Cart Value: Use Code FLAT20 *TCA</p>
            <p  style={{width: "350px" , marginLeft:"100px" }}  >Diamond Earrings In 18Kt Yellow <br /> Gold (1.603 gram) with Diamonds (0.1370 Ct)</p>
               
       <button onclick="userInput()"   id="buy-earring-buy-btn"> CONFIRM BUY </button>

           
            </span>
    </div>
    
</span>

</div>
                </>
            

    )
}
export default BuyForm;
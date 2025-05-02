import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import GoldEarring from "./pages/Gold/GoldEarring";
import GoldRing from "./pages/Gold/GoldRings";
import GoldNackless from "./pages/Gold/GoldNackless";
import GoldBangles from "./pages/Gold/GoldBangles";
import CartData from "./pages/CartData";
import Checkout from "./pages/Checkout";
import ProductDisplay from "./pages/ProductDisplay";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const App=()=>{

    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,

        })
    },[])
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
<Route path="goldearring" element={<GoldEarring/>}/>
<Route path="goldring" element={<GoldRing/>}/>
<Route path="goldnackless" element={<GoldNackless/>}/>
<Route path="goldbangle" element={<GoldBangles/>}/>
<Route path="cartdata" element={<CartData/>}/>
<Route path="checkout" element={<Checkout/>}/>
<Route path="productdisplay/:id" element={<ProductDisplay/>}/>

<Route path="signin" element={<Checkout/>}/>



            </Route>
        </Routes>
        </BrowserRouter>
        <ToastContainer />
        </>
    )
}

export default App;
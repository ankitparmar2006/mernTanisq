import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import GoldEarring from "./pages/Gold/GoldEarring";
import GoldRing from "./pages/Gold/GoldRings";
import GoldNackless from "./pages/Gold/GoldNackless";
import GoldBangles from "./pages/Gold/GoldBangles";
import CartData from "./pages/CartData";
import Checkout from "./pages/Checkout";
const App=()=>{
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




            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App;
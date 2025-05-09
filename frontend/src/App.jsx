// App.js
import { BrowserRouter, Route, Routes } from "react-router-dom";
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
import { AuthProvider } from './context/AuthContext'; // Import AuthProvider
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import AccountMenu from "./component/Profile";
import Profile from "./component/Profile";


const App = () => {

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);

    return (
        <>
            <AuthProvider> {/* Wrap your app in AuthProvider */}
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="home" element={<Home />} />
                            <Route path="goldearring" element={<GoldEarring />} />
                            <Route path="goldring" element={<GoldRing />} />
                            <Route path="goldnackless" element={<GoldNackless />} />
                            <Route path="goldbangle" element={<GoldBangles />} />
                            <Route path="cartdata" element={<CartData />} />
                            <Route path="checkout" element={<Checkout />} />
                            <Route path="productdisplay/:id" element={<ProductDisplay />} />
                            <Route path="login" element={<Login />} />
                            <Route path="signin" element={<Signup />} />


<Route path="profile" element={<Profile />} />

                        </Route>
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
            <ToastContainer />
        </>
    );
};

export default App;

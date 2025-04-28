import { BrowserRouter,Route ,Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import GoldEarring from "./pages/Gold/GoldEarring";
const App=()=>{
    return(
        <>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="home" element={<Home/>}/>
<Route path="goldearring" element={<GoldEarring/>}/>
            </Route>
        </Routes>
        </BrowserRouter>
        
        </>
    )
}

export default App;
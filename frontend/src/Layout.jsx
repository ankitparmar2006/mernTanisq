
import TopNav from './component/topNav';


import { Outlet } from 'react-router-dom';

import Navbarmain from './component/Navbar';


const Layout=()=>{

  
    return(
      <>

<TopNav/>
<Navbarmain/>
<Outlet/>


      </>
    )
  }
  export default Layout;
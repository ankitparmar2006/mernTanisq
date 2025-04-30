import React, { useRef } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../css/styles.css';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';


import v1 from "../video/jewelleryvdo1.mp4"
import v2 from "../video/jewelleryvdo2.mp4"
import v3 from "../video/jewelleryvdo3.mp4"
import v4 from "../video/jewelleryved4.mp4"
import v5 from "../video/jewelleryvdo5.mp4"
import v6 from "../video/jewelleryvdo6.mp4"




import CustomLineDesign from "./LineImage";
import Cart from "../component/cart";
const Home=()=>{
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };

    return(
      <>
      

{/* //==================================  React Home slider videoss ==================================================== */}

<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper"
      >
        <SwiperSlide > <video src={v1} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v2} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v5} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v3} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v4} controls muted autoPlay width="100%"></video></SwiperSlide>
        <SwiperSlide > <video src={v6} controls muted autoPlay width="100%"></video></SwiperSlide>

    
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>




      <div>
    <CustomLineDesign/>
</div> 


      <h2 id="h2-top-heading"> GOLD EARRINGS JEWELLERY</h2>



<Cart type="Earring" />


<div>
    <CustomLineDesign/>
</div> 



<h2 id="h2-top-heading"> GOLD RINGS JEWELLERY</h2>


<Cart type="Rings" />


<div>
    <CustomLineDesign/>
</div> 


<h2 id="h2-top-heading"> GOLD BANGLES JEWELLERY</h2>


<Cart type="Bangles" />

<div>
    <CustomLineDesign/>
</div> 


<h2 id="h2-top-heading"> GOLD NACKLESS JEWELLERY</h2>


<Cart type="Nackless" />


<div>
    <CustomLineDesign/>
</div> 

      </>
    )
  }
  export default Home;
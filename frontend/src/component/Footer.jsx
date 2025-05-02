import { IoLogoInstagram } from "react-icons/io5";
import { FaFacebook } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io5";
import { FaTelegram } from "react-icons/fa6";



const Footer = () => {
    return (
      <>
        {/* ==================== FOOTER WORK ==================== */}
        <footer id="footer">
          <section>
            <div className="footer-div">
              <ul>
                <h2
                  className="footer-jewellery"
                  data-aos="fade-down"
                  data-aos-duration="3000"
                >
                  TANISHQ<span>JEWELLERY</span>
                </h2>
                <p>
                  Far far away, behind the word mountains,
                  <br /> far from the countries Vokalia and Consonantia,
                  <br /> there live the blind texts...
                </p>
                <br />
                <p>Follow Us On...</p>
                <br />


                <a href="https://www.instagram.com/accounts/login">
                  <IoLogoInstagram data-aos="fade-right" id="footer-icon" />
                </a>
                <a href="https://www.facebook.com/">
              <FaFacebook   
               className="fa-brands fa-facebook"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" id="footer-icon" />
                </a>
                <a href="https://web.telegram.org/index.html">
                <FaTelegram    className="fa-brands fa-telegram"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000" id="footer-icon" />
                </a>
                <a href="https://x.com/i/flow/login">
                   <IoLogoTwitter  className="fa-brands fa-square-twitter"
                  data-aos="fade-left" id="footer-icon" />
                </a>
              </ul>
  
              <ul>
                <h2>Information</h2>
                <div className="footer-a">
                  <a href="./index.html">All jewellery</a>
                  <a href="allearrings.html">Earrings</a>
                  <a href="allrings.html">Rings</a>
                  <a href="allnackless.html">Nackless</a>
                  <a href="allbangles.html">Bangles</a>
                </div>
              </ul>
  
              <ul>
                <h2>Customer Support</h2>
                <div className="footer-a">
                  <a href="">FAQ</a>
                  <a href="">Payment Option</a>
                  <a href="">Booking Tips</a>
                  <a href="">How it works</a>
                  <a href="">Contact Us</a>
                </div>
              </ul>
  
              <ul>
                <h2>Have a Questions?</h2>
                <div className="footer-a">
                  <a href="">
                    203 Fake St. Mountain View, <br /> San Francisco, California,
                    USA
                  </a>
                  <a href="">+2 392 3929 210</a>
                  <a href="">Tanishqjewellery@gmail.com</a>
                </div>
              </ul>
            </div>
          </section>
        </footer>
        {/* ==================== FOOTER END ==================== */}
      </>
    );
  };
  
  export default Footer;
  
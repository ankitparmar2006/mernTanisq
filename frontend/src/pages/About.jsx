

import Footer from '../component/Footer';

const About = () => {
  const containerStyle = {
    backgroundColor: "#fffdf5",
    padding: "60px 20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: "#333",
  };

  const headerStyle = {
    textAlign: "center",
    fontSize: "36px",
    fontWeight: "700",
    color: "#5a420d",
    marginBottom: "20px",
    fontFamily: "serif",
  };

  const subheadingStyle = {
    textAlign: "center",
    fontSize: "20px",
    color: "#a88b2a",
    marginBottom: "50px",
    fontStyle: "italic",
  };

  const sectionStyle = {
    maxWidth: "900px",
    margin: "0 auto",
    lineHeight: "1.8",
    fontSize: "17px",
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "20px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  };

  const highlightStyle = {
    backgroundColor: "#fff6dc",
    borderLeft: "5px solid #c2a542",
    padding: "20px",
    marginTop: "30px",
    borderRadius: "10px",
    fontStyle: "italic",
  };

  const testimonialStyle = {
    marginTop: "50px",
    padding: "20px",
    backgroundColor: "#fef7e5",
    borderLeft: "5px solid #d1b25e",
    fontSize: "16px",
    borderRadius: "12px",
  };

  return (
    <>
    <div style={containerStyle}>
      <h1 style={headerStyle}>About Tanisq Elegance</h1>
      <p style={subheadingStyle}>Where Timeless Craft Meets Modern Glamour</p>

      <div style={sectionStyle}>
        <p>
          At <strong>Tanisq Elegance</strong>, we believe jewellery isn't just an accessory —
          it's a legacy. Our journey began with a passion to blend traditional
          craftsmanship with modern design, offering you pieces that radiate beauty,
          grace, and heritage.
        </p>

        <p>
          Every necklace, ring, bracelet, and earring is handcrafted using the finest
          materials — be it 22K gold, sparkling diamonds, or vibrant gemstones. Our artisans
          pour decades of expertise into every piece, ensuring you wear not just jewellery,
          but emotion.
        </p>

        <div style={highlightStyle}>
          "Inspired by royal heritage, built for the modern queen."
        </div>

        <p>
          Whether it's your wedding, a gift for your loved ones, or a personal
          celebration — we ensure that your moments shine brighter with our exclusive
          collections. From minimal elegance to majestic bridal sets, we’ve got it all
          under one golden roof.
        </p>

        <div style={testimonialStyle}>
          ⭐ "The craftsmanship is divine and the packaging itself feels luxurious. I felt
          like a queen on my wedding day!" <br />
          — <strong>Roshni Mehta</strong>, Delhi
        </div>
      </div>
    </div>
<Footer/>

</>
  );
};

export default About;

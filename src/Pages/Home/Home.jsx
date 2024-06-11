import React from "react";
import Slidres from "../../Components/Sliders/Slidres";
import Banner from "../../Components/Banner/Banner";
import Banner2 from "../../Components/Banner/Banner2";
import Banner3 from "../../Components/Banner/Banner3";
import Banner4 from "../../Components/Banner/Banner4";
import Banner5 from "../../Components/Banner/Banner5";
import Banner6 from "../../Components/Banner/Banner6";
import Footer1 from "../../Components/Fotter/Footer1";
import Box from "../../Components/Box/Box";
import Footter from "../../Components/Footter/Footter";

const Home = () => {
  return (
    <div className="bg-[#151515]">
      <Slidres />
      <Banner />
      <Banner2/>
      <Banner3/>
      <Banner4/>
      <Banner5/>
      <Banner6/>
     <Footer1/>
     <Box/>
     <Footter/>
    </div>
  );
};

export default Home;

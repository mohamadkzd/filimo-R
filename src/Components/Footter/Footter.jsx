import React from "react";
import logo from "./images/logo.webp";
const Footter = () => {
  return (
    <div className="w-full bg-[#0E1712] text-white ">
      <div className="w-full flex-col flex justify-center items-center gap-y-4 flex-wrap pt-[40px] pb-[20px]">
        <div className="pb-[30px]">
          <img src={logo} alt="" />
        </div>
        <div className="md:flex-row xs:flex xs:flex-col justify-center items-center gap-x-7 gap-y-5 md:w-[80%] xs:w-full">
          <div>
            <p>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</p>
          </div>
          <div>
            <p>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</p>
          </div>
          <div>
            <p>هزاران فیلم و سریال خارجی (دوبله و زیرنویس)</p>
          </div>
        </div>
        <div className="w-full text-center pt-[20px] ">
          <button style={{fontWeight:"bold"}} className="text-[17px] bg-[#1cb561] px-[55px] py-[17px] rounded-[15px] hover:bg-[#17924e] transition-all ease-linear">خرید اشتراک و تماشا</button>
        </div>
      </div>
    </div>
  );
};

export default Footter;

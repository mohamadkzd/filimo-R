import React from "react";
import baner1 from "./images/baner-1.webp";
import baner2 from "./images/baner-2.webp";
import baner3 from "./images/baner-3.webp";
import baner4 from "./images/baner-4.webp";
import baner5 from "./images/baner-5.webp";
const Banner = () => {
  return (
    <div className="w-full  text-white mt-[60px] md:px-[80px]">
      <div className="flex justify-start items-center gap-x-3 mb-[30px]">
        <h1 style={{ fontWeight: "bold" }} className="text-[20px]">
          محبوب ترین های فیلیمو
        </h1>
        <div className="flex justify-center items-center gap-5 border-[1px] border-gray-400 rounded-[20px] ">
          <button
            style={{ fontWeight: "bold" }}
            className="border-[1px] border-gray-400 rounded-[20px] px-[7px] bg-[#3a3a3a]"
          >
            سریال
          </button>
          <button className=" pl-4">فیلم</button>
        </div>
      </div>

      <div className="flex justify-center items-center gap-3 w-full flex-wrap">
        <div className="lg:w-[18%] md:w-[25%] xs:w-[30%] text-center rounded-[10px] relative p-1 border-[1px] border-[white] ">
          <a href="">
            <img className="w-[700px]" src={baner1} alt="" />
          </a>
          <h2 style={{transform:"translateX(-50%)" }} className="absolute bottom-0 left-[50%] w-full">اختصاصی فیلیمو</h2>
        </div>
        <div className="lg:w-[18%] md:w-[25%] xs:w-[30%] text-center rounded-[10px] relative p-1 ">
          <a href="">
            <img className="w-[700px]" src={baner2} alt="" />
          </a>
          <h2 style={{transform:"translateX(-50%)" }} className="absolute bottom-0 left-[50%] w-full">اختصاصی فیلیمو</h2>
        </div>
        <div className="lg:w-[18%] md:w-[25%] xs:w-[30%] text-center rounded-[10px] relative p-1 ">
          <a href="">
            <img className="w-[700px]" src={baner3} alt="" />
          </a>
          <h2 style={{transform:"translateX(-50%)" }} className="absolute bottom-0 left-[50%] w-full">اختصاصی فیلیمو</h2>
        </div>
        <div className="lg:w-[18%] md:w-[25%] xs:w-[30%] text-center rounded-[10px] relative p-1 ">
          <a href="">
            <img className="w-[700px]" src={baner4} alt="" />
          </a>
          <h2 style={{transform:"translateX(-50%)" }} className="absolute bottom-0 left-[50%] w-full">اختصاصی فیلیمو</h2>
        </div>
        <div className="lg:w-[18%] md:w-[25%] xs:w-[30%] text-center rounded-[10px] relative p-1 ">
          <a href="">
            <img className="w-[700px]" src={baner5} alt="" />
          </a>
          <h2 style={{transform:"translateX(-50%)" }} className="absolute bottom-0 left-[50%] w-full">اختصاصی فیلیمو</h2>
        </div>
      </div>
    </div>
  );
};

export default Banner;

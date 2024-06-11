import React from "react";

import baner41 from "./images/4baner-1.webp"
import baner42 from "./images/4baner-2.webp"
import baner43 from "./images/4baner-3.webp"
import baner44 from "./images/4baner-4.webp"
import baner45 from "./images/4baner-5.webp"
import baner46 from "./images/4baner-6.webp"
const Banner4 = () => {
  return (
    <div className="w-full text-white mt-[20px] mb-[50px]">
      <div style={{fontWeight:"bold"}} className="px-[100px] text-[20px] mb-[20px]">
        <h1>محتواهای رایگان</h1>
      </div>

     <div className="w-full flex justify-center items-center gap-4 flex-wrap opacity-[0.65] rounded-[20px]">
       <div>
        <img className="rounded-[18px]" src={baner41} alt="" />
        <p>ویرانگر</p>
       </div>
       <div>
        <img className="rounded-[18px]" src={baner42} alt="" />
        <p>ویرانگر</p>
       </div>
       <div>
        <img className="rounded-[18px]" src={baner43} alt="" />
        <p>ویرانگر</p>
       </div>
       <div>
        <img className="rounded-[18px]" src={baner44} alt="" />
        <p>ویرانگر</p>
       </div>
       <div>
        <img className="rounded-[18px]" src={baner45} alt="" />
        <p>ویرانگر</p>
       </div>
       <div>
        <img className="rounded-[18px]" src={baner46} alt="" />
        <p>ویرانگر</p>
       </div>
     </div>

    </div>
  );
};

export default Banner4;

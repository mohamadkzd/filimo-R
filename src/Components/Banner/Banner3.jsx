import React from "react";
import baner3 from "./images/3baner.webp";
import icon1 from "./images/icon1.webp";
import icon2 from "./images/icon2.webp";

const Banner3 = () => {
  return (
    <div className="w-full md:flex justify-center items-end gap-3 text-white mt-[60px]  lg:px-[100px]">
      <div className="md:w-[50%] flex flex-col md:items-start  justify-center gap-3 lg:pb-[35px] md:pb-[10px] xs:pb-0 xs:px-4">
        <h1 style={{ fontWeight: "bold" }} className="text-[18px]">
          چطور با تلویزیون، فیلیمو تماشا کنم؟
        </h1>
        <p className="text-[15px] mb-2">
          ما برای راحتی شما و تماشای فیلیمو روی تلویزیون‌های مختلف 6 روش را
          فراهم کردیم. هرکدام از این 6 روش یک ویدیو آموزشی دارند که می‌توانید از
          لینک زیر، آن‌ها را تماشا کنید و روشی که با تلویزیون شما سازگار است را
          انتخاب کنید.
        </p>

        <div className="flex justify-start items-start gap-x-2">
          <img src={icon1} alt="" />
          <h2 style={{ fontWeight: "bold" }} className="text-[18px]">
            تلویزیون{" "}
          </h2>
        </div>
        <p className="mb-3">windows PC - MacOS - Chorom OS</p>
        <div className="flex justify-start items-start gap-x-2">
          <img src={icon2} alt="" />
          <h2 style={{ fontWeight: "bold" }} className="text-[18px]">
            اندروید تی‌وی{" "}
          </h2>
        </div>
        <p className="mb-3 text-[13px] text-[#a1a1a1]">
          Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets
        </p>
      </div>


      <div className="md:w-[50%] xs:w-full mb-2 h-[300px]">
        <div className=" flex justify-start items-center">
          <img
            className="lg:w-[500px] md:w-[420px] sm:w-[520px] xs:w-[400px]"
            src={baner3}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Banner3;

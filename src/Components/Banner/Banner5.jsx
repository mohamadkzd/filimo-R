import React from "react";
import baner5 from "./images/5baner.webp";
import "./styles.css";
const Banner5 = () => {
  return (
    <div className="gradient w-full md:flex justify-center items-center gap-3 flex-wrap text-white">
      <div className=" md:w-[45%] flex justify-center items-center">
        <img className="w-[60%]" src={baner5} alt="" />
      </div>
      <div className="md:w-[45%] flex flex-col justify-center items-start gap-y-3 md:mr-0 xs:mr-[20px]">
        <h2 className="text-[20px]">
          دنیایی متنوع از فیلم و کارتون‌های کودکانه
        </h2>
        <p className="w-[80%] opacity-[.5]">
          ساخت فیلیمو کودک این امکان را می‌دهد که با انتخاب سن فرزندتان، یک فضای
          امن برای تماشای کودک بسازید؛ یعنی محتوای مخصوص سن خودش را ببیند و به
          بقیه فیلم و سریال‌ها دسترسی نداشته‌باشد.
        </p>
        <div className="flex justify-center items-center gap-x-2 mt-[10px]">
          <button
            style={{ fontWeight: "bold" }}
            className="bg-[#ededed] text-[#151515] py-[10px] px-[16px] text-[12px] rounded-[10px]"
          >
            فیلیمو کودک بساز
          </button>
          <button
            style={{ fontWeight: "bold" }}
            className="bg-[#ededed] text-[#151515] py-[10px] px-[16px] text-[12px] rounded-[10px]"
          >
            تماشای فیلیمو کودک
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner5;

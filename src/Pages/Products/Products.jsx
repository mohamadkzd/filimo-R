import React from "react";
import img from "./images/ic.webp";
const Products = () => {
  return (
    <div className="w-full bg-[white] mt-[50px]">
      <div className="w-full flex flex-col justify-center items-center gap-y-3">
        <header className="w-[50%] flex justify-center items-center">
          <div className="ml-[10px]">
            <img className="w-[100px] rounded-[15px]" src={img} alt="" />
          </div>
          <div className="flex flex-col justify-center items-start gap-y-4">
            <h1>خرید اشتراک</h1>
            <p>
              شتراکی که تهیه می‌کنید برای تماشای اسکار، قطب شمال، سپنج و بیش از
              95,000 فیلم و سریال دیگر است.
            </p>
          </div>
        </header>
        <div>
          
        </div>
      </div>
    </div>
  );
};

export default Products;

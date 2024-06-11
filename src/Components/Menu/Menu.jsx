import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineFire } from "react-icons/ai";
import { AiOutlineVideoCamera } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { BsCaretRightSquareFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const Menu = () => {

  return (
    <div className="w-full h-[70px] bg-black flex justify-between items-center text-white ">
      <div className="flex justify-center items-center w-[50%] ">
        <div className="flex justify-center items-center gap-x-2 ml-9 pl-9 border-l-[1px] border-[#474747] text-[20px] xs:border-hidden ">
          <BsCaretRightSquareFill color="orange" />
          {/* <a href="">فیلیمو</a> */}
         <Link to="/">
         فیلیمو
         </Link>
        </div>
        <ul className="flex justify-center items-center gap-x-9 lg:flex xs:hidden xs:border-hidden">
          <li className="flex justify-center items-center gap-x-2">
            {" "}
            <AiOutlineFire color="orange" />
            <a href="">فیلیمو تور</a>
          </li>

          <li className="flex justify-center items-center gap-x-2">
            <AiOutlineVideoCamera />
            <a href="">فیلیمو‌ مدرسه</a>
          </li>
          <li className="flex justify-center items-center gap-x-2">
            <AiOutlineSearch />
            <a href="">جستجو</a>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center w-[50%] gap-9">
        <div className="flex justify-center items-center gap-x-2 p-2 bg-[#1cb561] rounded-[10px] hover:bg-[#479569] transition-all ease-linear">
          <AiOutlineVideoCamera />
          {/* <button className="">خرید اشتراک </button> */}
          <Link to="/products">
            خرید اشتراک
          </Link>
        </div>
        <button className="p-2 bg-[#333232] rounded-[10px]">ادمین</button>
      </div>
    </div>
  );
};

export default Menu;

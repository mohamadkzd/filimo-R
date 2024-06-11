import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import Slider1 from "./images/slider1.webp";
import Slider2 from "./images/slider2.webp";
import Slider3 from "./images/slider3.webp";
import Slider4 from "./images/slider4.webp";

const Slidres = () => {
  return (
    <>
     
      <div className="2xl:h-[700px] 2xl:w-[100%] lg:h-[500px] md:h-[500px] sm:h-auto text-white relative">
      
        <Swiper
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper relative"
        >
          
          <SwiperSlide>
            <div className="relative">
              <img
                className="lg:h-auto md:h-[500px] xs:h-[500px]"
                src={Slider1}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="lg:h-auto md:h-[500px] xs:h-[500px]"
                src={Slider2}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="lg:h-auto md:h-[500px] xs:h-[500px]"
                src={Slider3}
                alt=""
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative">
              <img
                className="lg:h-auto md:h-[500px] xs:h-[500px]"
                src={Slider4}
                alt=""
              />
            </div>
          </SwiperSlide>
          <div
            style={{ transform: "translateX(-50%)" }}
            className="w-full absolute z-[5] bottom-[64px] left-[50%] flex flex-col justify-center items-center"
          >
            <p className="text-[orange] mb-[10px] md:block xs:hidden">
              با فیلیمو بی‌وقفه فیلم ببین
            </p>
            <h1
              style={{ fontWeight: "bold" }}
              className="mb-[30px] text-[35px] "
            >
              کنترل همیشه دست توست!
            </h1>

            <div className="md:flex xs:hidden justify-center items-center gap-3 mt-[10px] gap-x-14  ">
              <p>90 هزار اپیزود فیلم و سریال برای تماشا داری</p>
              <p>می‌تونی دانلود کنی بعد بدون اینترنت تماشا کنی</p>
              <p>می‌تونی یک عضو، مخصوص تماشای کودک بسازی</p>
            </div>
            <div className="flex flex-col justify-center items-center mt-[40px]">
              <button
                style={{ fontWeight: "bold" }}
                className="px-16 py-4 rounded-[10px] text-white text-[18px] mb-[10px] bg-[#1cb561] hover:bg-[#479569] transition-all ease-linear "
              >
                خرید اشتراک و تماشا
              </button>
              <p className="text-[12px]">تخفیف ویژه برای کاربران جدید</p>
            </div>
          </div>
          <div className="grid absolute w-full 2xl:h-[750px] lg:h-[600px] md:h-[560px] xs:h-[550px]  top-0 left-0"></div>
        </Swiper>
       
      </div>
     
    </>
  );
};

export default Slidres;

import React from 'react'
import banner2 from "./images/2baner.webp"
import icon1 from "./images/icon1.webp"
import icon2 from "./images/icon2.webp"
import icon3 from "./images/icon3.webp"
const Banner2 = () => {
  return (
    <div className='w-full md:flex justify-center items-end gap-3 text-white mt-[60px] lg:px-[100px] '>
      <div className='md:w-[50%] h-[400px] xs:w-full mb-2   flex justify-start items-center'>
               <img  className='lg:w-[500px] md:w-[420px] sm:w-[520px] xs:w-[400px]' src={banner2} alt="" />     
      </div>
      <div className='md:w-[50%] flex flex-col md:items-start  justify-center gap-3 lg:pb-[35px] md:pb-[10px] xs:pb-0 xs:px-4'>
        <h1 style={{fontWeight:"bold"}} className='text-[18px]'>تماشای فیلیمو با همه دستگاه‌ها</h1>
        <p className='text-[15px] mb-5'>می‌توانید فیلیمو را به صورت هم‌زمان روی 3 دستگاه مختلف مثل موبایل، تبلت، لپ‌تاپ، تلویزیون و... تماشا کنید.</p>
         
         <div className='flex justify-start items-start gap-x-2'>
           <img src={icon1} alt="" />
           <h2 style={{fontWeight:"bold"}} className='text-[18px]'>کامپیوتر و لپ‌تاپ</h2>
         </div>
         <p className='mb-3 text-[13px] text-[#a1a1a1]'>windows PC - MacOS - Chorom OS</p>
         <div className='flex justify-start items-start gap-x-2'>
           <img src={icon2} alt="" />
           <h2 style={{fontWeight:"bold"}} className='text-[18px]'>موبایل و تبلت</h2>
         </div>
         <p className='mb-3 text-[13px] text-[#a1a1a1]'>Android Phone & Tablets - Iphone and Ipad - Amazon Fire Tablets</p>
         <div className='flex justify-start items-start gap-x-2'>
           <img src={icon3} alt="" />
           <h2 style={{fontWeight:"bold"}} className='text-[18px]'>کنسول‌های بازی (Browser)</h2>
         </div>
         <p className='mb-3 text-[13px] text-[#a1a1a1]'>Xbox Series S - Xbox Seris X - PS5 - PS4</p>

         
      </div>
    </div>
  )
}

export default Banner2
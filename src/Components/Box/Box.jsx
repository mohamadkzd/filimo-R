import React, { useState } from "react";

const Box = () => {
  const [icon, setIcon] = useState(true);
  const [icon2, setIcon2] = useState(true);
  const [icon3, setIcon3] = useState(true);
  const [icon4, setIcon4] = useState(true);
  const [pLorem1, setPLorem1] = useState("");
  const [pLorem2, setPLorem2] = useState("");
  const [pLorem3, setPLorem3] = useState("");
  const [pLorem4, setPLorem4] = useState("");

  const handelClick = () => {
    if (icon) {
      setPLorem1(
        "شما می‌توانید همه فیلم‌ و سریال‌های فیلیمو را داخل خود اپلیکیشن فیلیمو دانلود کنید و برای زمان‌هایی که اینترنت ندارید یا در سفر، هواپیما و قطار آ‌ن‌ها را تماشا کنید. برای دانلود هم از طریق رایانه و هم از طریق خود اپلیکیشن فیلیمو می‌توانید اقدام‌کنید. برای جزییات بیشتر می‌توانید فیلم‌های آموزشی مربوط به دانلود از طریق سایت و دانلود از طریق  اپلیکیشن را تماشا کنید."
      );
      setIcon(false);
    } else {
      setPLorem1("");
      setIcon(true);
    }
  };
  const handelClick2 = () => {
    if (icon2) {
      setPLorem2(
        " درحال حاضر تماشای فیلیمو فقط در داخل کشور فعال است و امکان تماشا برای افراد خارج از کشور فعال نیست."
      );
      setIcon2(false);
    } else {
      setPLorem2("");
      setIcon2(true);
    }
  };
  const handelClick3 = () => {
    if (icon3) {
      setPLorem3(
        "تماشای فیلم‌های اکران آنلاین مانند تماشا در سینمای واقعی است؛ یعنی برای دیدن هر فیلم که در اکران آنلاین است باید بلیت تهیه کنید و به جای رفتن به سالن سینما، 8 ساعت فرصت دارید که آن فیلم را از داخل خانه تماشا کنید."
      );
      setIcon3(false);
    } else {
      setPLorem3("");
      setIcon3(true);
    }
  };
  const handelClick4 = () => {
    if (icon4) {
      setPLorem4(
       "نصب نرم‌افزار اندرویدی فیلیمو می‌توانید ازطریق کافه بازار یا مایکت اقدام به دانلود کنید. یا می‌توانید روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار اندروید) برای دانلود نرم‌افزار iOS فیلیمو نیز کافیست روی گزینه روبرو بزنید و به‌طور مستقیم فایل نرم‌افزار را دریافت کنید. (دانلود مستقیم نرم‌افزار iOS)"
      );
      setIcon4(false);
    } else {
      setPLorem4("");
      setIcon4(true);
    }
  };
  return (
    <div className="w-full text-white mt-[50px] bg-[#191919] pb-[50px]">
      <div className="w-full flex flex-col justify-center items-center gap-y-5 flex-wrap pt-[30px] ">
        <div className="flex flex-col justify-center items-center gap-y-4">
          <h2>سوالات متئاول</h2>
          <p>سوال شایع دیگر کاربران شاید برای شما هم پیش آمده باشد</p>
        </div>
        <div className="w-[100%] flex flex-col justify-center items-center gap-y-3">
          <div
            className="w-[70%] flex flex-col justify-center items-center p-[14px] rounded-[10px] text-[#fff] text-[16px]"
            style={{ border: "1px solid #33353d" }}
          >
            <div className="w-full flex justify-between items-center">
              <h2>آیا می‌توانم فیلم‌های موجود در فیلیمو را دانلود کنم؟</h2>

              {icon ? (
                <button onClick={handelClick}>+</button>
              ) : (
                <button onClick={handelClick}>-</button>
              )}
            </div>
            <div className="mt-[10px] text-[#b6b6b6] text-[13px] transition-all ease-linear">
              <p>{pLorem1}</p>
            </div>
          </div>
          <div
            className="w-[70%] flex flex-col justify-center items-center p-[14px] rounded-[10px] text-[#fff] text-[16px]"
            style={{ border: "1px solid #33353d" }}
          >
            <div className="w-full flex justify-between items-center">
              <h2>آیا فیلیمو برای خارج از ایران در دسترس است؟</h2>

              {icon2 ? (
                <button onClick={handelClick2}>+</button>
              ) : (
                <button onClick={handelClick2}>-</button>
              )}
            </div>
            <div className="w-full mt-[10px] text-[#b6b6b6] text-[13px] transition-all ease-linear">
              <p>{pLorem2}</p>
            </div>
          </div>
          <div
            className="w-[70%] flex flex-col justify-center items-center p-[14px] rounded-[10px] text-[#fff] text-[16px]"
            style={{ border: "1px solid #33353d" }}
          >
            <div className="w-full flex justify-between items-center">
              <h2>آیا برای تماشای فیلم‌های اکران آنلاین، باید اشتراک بخرم؟</h2>

              {icon3 ? (
                <button onClick={handelClick3}>+</button>
              ) : (
                <button onClick={handelClick3}>-</button>
              )}
            </div>
            <div className="w-full mt-[10px] text-[#b6b6b6] text-[13px] transition-all ease-linear">
              <p>{pLorem3}</p>
            </div>
          </div>
          <div
            className="w-[70%] flex flex-col justify-center items-center p-[14px] rounded-[10px] text-[#fff] text-[16px]"
            style={{ border: "1px solid #33353d" }}
          >
            <div className="w-full flex justify-between items-center">
              <h2>از کجا می‌توانم نرم‌افزار اندروید یا iOS فیلیمو را دانلود کنم؟</h2>

              {icon4 ? (
                <button onClick={handelClick4}>+</button>
              ) : (
                <button onClick={handelClick4}>-</button>
              )}
            </div>
            <div className="w-full mt-[10px] text-[#b6b6b6] text-[13px] transition-all ease-linear">
              <p>{pLorem4}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Box;

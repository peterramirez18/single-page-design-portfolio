import Image01 from "../assets/image-slide-1.jpg";
import Image02 from "../assets/image-slide-2.jpg";
import Image03 from "../assets/image-slide-3.jpg";
import Image04 from "../assets/image-slide-4.jpg";
import Image05 from "../assets/image-slide-5.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation, Autoplay } from "swiper/modules";
import { IconArrowLeft } from "./Icons";
import { useState } from "react";
import { useEffect } from "react";

const MyWork = () => {
  const Works = [Image03, Image04, Image01, Image05, Image02];

  //get width screen
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    window.addEventListener("resize", () => {
      setWidth(window.innerWidth);
    });
  }, [width]);
  const getSlidesPerView = () => {
    if (width < 700) {
      return 1.3;
    } else if (width < 900) {
      return 1.9;
    } else if (width < 1800) {
      return 2.5;
    } else {
      return Works.length;
    }
  };
  return (
    <section className=" mt-[87px] ">
      <h3 className=" text-center">My Work</h3>
      <Swiper
        modules={[Autoplay, Navigation]}
        className="mt-[56px] mySwiper"
        spaceBetween={30}
        slidesPerView={getSlidesPerView()}
        autoplay={{
          delay: 2000,
        }}
        loop={true}
        navigation={{
          prevEl: ".my-swiper-button-prev",
          nextEl: ".my-swiper-button-next",
        }}
        centeredSlides
      >
        {Works.map((work, index) => (
          <SwiperSlide key={index}>
            <img className=" rounded-[10px]" src={work} alt="Work" />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex gap-x-4 justify-center mt-[56px]">
        <button className="my-swiper-button-prev w-[64px] aspect-square bg-black hover:bg-purple transition-colors duration-500 text-white grid place-content-center rounded-full">
          <IconArrowLeft />
        </button>
        <button className="my-swiper-button-next w-[64px] aspect-square bg-black hover:bg-purple transition-colors duration-500 text-white grid place-content-center rounded-full">
          <IconArrowLeft className=" rotate-180" />
        </button>
      </div>
    </section>
  );
};

export default MyWork;

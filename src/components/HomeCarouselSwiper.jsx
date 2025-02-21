import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import image1 from "../assets/images/hero-carousel-1.png";
import image2 from "../assets/images/hero-carousel-2.png";
import image3 from "../assets/images/hero-carousel-3.png";
import image4 from "../assets/images/hero-carousel-4.png";
import image5 from "../assets/images/hero-carousel-5.png";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./HomeCarouselSwiper.css";

export const HomeCarouselSwiper = () => {
  const images = [image1, image2, image3, image4, image5];

  return (
    <div className="w-full relative">
      <Swiper
        breakpoints={{
          1024: {
            slidesPerView: 3,
            spaceBetween: 0,
          },
          410: {
            slidesPerView: 1,
            centeredSlides: true,
          },
        }}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper pb-6 w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}

        <button className="custom-prev flex p-[12px] justify-center items-center rounded-[40px] bg-brand-red hover:bg-brand-red-hover absolute left-16 xs:left-4 lg:top-1/2 xs:-bottom-6 transform -translate-y-1/2 z-10">
          <MdKeyboardArrowLeft size={24} color="#fff" />
        </button>
        <button className="custom-next flex p-[12px] justify-center items-center rounded-[40px] bg-brand-red hover:bg-brand-red-hover absolute right-16 xs:right-4 lg:top-1/2 xs:-bottom-6 transform -translate-y-1/2 z-10">
          <MdKeyboardArrowRight size={24} color="#fff" />
        </button>
      </Swiper>
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import "./HomeCarouselSwiper.css";
import { fetchHomeImages } from "../api/api";
import { motion } from "framer-motion";


export const HomeCarouselSwiper = () => {
  const [HomeImages, setHomeImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadHomeImages = async () => {
      try {
        const fetchedHomeImages = await fetchHomeImages();
        setHomeImages(fetchedHomeImages);
      } catch (err) {
        setError("Failed to fetch images");
      } finally {
        setLoading(false);
      }
    };

    loadHomeImages();
  }, []);

  if (loading) {
    return <div className="w-full text-center py-10 text-brand-red hover:text-brand-red-hover">Loading...</div>;
  }

  if (error) {
    return <div className="w-full text-center py-10 text-red-500">{error}</div>;
  }


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
        {HomeImages.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image.image}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          {console.log(image)}
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

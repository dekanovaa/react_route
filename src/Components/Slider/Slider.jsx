import React, { useRef, useState } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import './Slider.css'
import burger from './img_slider/burger.jpg'
import hotdog from './img_slider/hotdog.jpg'
import lavash from './img_slider/lavash.jpg'

import { Pagination, Navigation } from 'swiper/modules';

 function Slider() {
  return (
    <div className="slider">
    <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img src={burger} alt=""/></SwiperSlide>
        <SwiperSlide><img src={hotdog} alt=""/></SwiperSlide>
        <SwiperSlide><img src={lavash} alt=""/></SwiperSlide>
      </Swiper>
    </div>

  );
}
export default Slider
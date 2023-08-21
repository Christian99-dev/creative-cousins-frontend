import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";
import { styled } from "styled-components";
import { responsiveCSS } from "../services/Style/responsive";

const Slider = ({ items }) => {
  return (
    <SliderStyle
      pagination={{
        dynamicBullets: true,
      }}
      modules={[Pagination]}
      className="mySwiper"
      loop
      centeredSlides
    >
      {items.map((Item, index) => (
        <SwiperSlide key={index}>{Item}</SwiperSlide>
      ))}
    </SliderStyle>
  );
};

export default Slider;

const SliderStyle = styled(Swiper)`
  .swiper-pagination {
    /* bottom: 0 !important; */
    .swiper-pagination-bullet {
      ${responsiveCSS("height", 0, 0, 0, 12, 7)}
      ${responsiveCSS("width", 0, 0, 0, 12, 7)}
      background-color: white;
      opacity: 1;
      &.swiper-pagination-bullet-active {
        background-color: var(--grey);
      }
    }
  }
`;

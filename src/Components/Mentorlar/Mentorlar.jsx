import React, { useContext, useState } from 'react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar'; 
import img from '../../assets/Abilay.jpg'
import './mentor.css'

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { DarkModeContext } from '../../Context/DarkModeContext';
import { Collapse, Fade, useScrollTrigger } from '@mui/material';

export default function Mentorlar() {
  const { isDark } = useContext(DarkModeContext)
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  })


  return (
    <Fade in={trigger} {...(trigger ? { timeout: 1000 } : {})}>
      <div className='min-h-[400px] my-10 px-5 text-center'>
      <span
        className={` ${isDark ? 'text-white hover:text-gray-300' : 'text-blue-900 hover:border-b-2 hover:border-b-green-800 hover:text-green-800 pb-2'} text-2xl md:text-3xl lg:text-4xl text-center font-bold transition-colors transition-2`}
      >Startapperler</span>
      
        <Swiper 
          className='p-5 text-start'
          modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
          spaceBetween={5}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            448: {
              slidesPerView: 2,
              spaceBetween: 10,
            },
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            878: {
              slidesPerView: 3,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 20,
            }
          }}
        >
          <SwiperSlide className='mb-5 slideCard transition-all shadow-lg h-[300px] md:h-[370px] transition-2 relative bg-red-300 text-white rounded-3xl'>
            <div className='h-full rounded-3xl w-full flex justify-center items-center overflow-hidden'>
              <img src={img} alt="" className='img h-full w-full transition-all transition-2 m-auto object-cover rounded-3xl'/>
            </div>
            <div className="card-text text-md absolute transition-2 bottom-0 texts w-full text-gray-900 rounded-b-3xl p-2 transition-transform transition-2">
              <p className='text-sm md:text-lg'>Lorem ipsum dolor sit amet.</p>
            </div>
          </SwiperSlide>
        </Swiper>
    </div>
    </Fade>
  )
}

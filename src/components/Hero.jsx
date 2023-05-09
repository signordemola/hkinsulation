import React from 'react';

import bg1 from '../assets/images/hero/bg1.jpg';
import bg2 from '../assets/images/hero/bg2.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

// import required modules
import { Navigation, Autoplay } from 'swiper';

const Hero = () => {
  return (
    <section className="">
      <Swiper
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div style={{ backgroundImage: `url(${bg1})` }} className="bg-fixed">
            <div className="h-[78vh] text-white flex flex-col justify-center items-center">
              <h1 className="w-[70vh] text-[26px] lg:text-[40px] py-4 uppercase">
                H &amp; K The&nbsp;Insulation Experts
              </h1>
              <p className="w-[70vh] text-[18px] lg:text-[24px]">
                H &amp; K Insulation has been a contractor in the insulation
                industry since 2004,&nbsp;successfully fulfilling the needs of
                major construction projects within the states of Texas and
                Oklahoma
              </p>

              <a href='/about' className="py-8">
                <button className="border-white border-[2px] text-2xl rounded px-[14px] py-[6px]">
                  Learn More
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div style={{ backgroundImage: `url(${bg2})` }} className="bg-fixed">
            <div className="h-[78vh] text-white flex flex-col justify-center items-center">
              <h1 className="w-[70vh] text-[26px] lg:text-[40px] py-4 uppercase">
                Experience and expertise
              </h1>
              <p className="w-[70vh] text-[18px] lg:text-[24px]">
                With our wide experience and expertise in this industry, my team
                of professional staffs is able to provide 100% satisfaction to
                our valued customers. Our group specializes in delivering
                state-of-the-art insulation services to apartments, hotels,
                commercial establishments as well as nursing homes.
              </p>

              <a href="/about" className="py-8">
                <button className="border-white border-[2px] text-2xl rounded px-[14px] py-[6px]">
                  A Closer Look
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Hero;

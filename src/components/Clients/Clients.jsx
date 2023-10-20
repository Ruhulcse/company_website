import React from 'react';
import 'swiper/css/autoplay';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, FreeMode, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import artsay from '../../assets/images/client/artsay.jpeg';
import stopthefake from '../../assets/images/client/stopthefake.png';
import powerhouse from '../../assets/images/client/powerhouse-180x80.png';
import treeno from '../../assets/images/client/treeno-198x80.png';
import './style.css';
const Clients = () => {
  return (
    <div>
     <div className='absolute mt-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>
     <h1 className='uppercase md:text-3xl lg:text-3xl text-2xl font-bold text-[#333333]  '>our clients</h1>
     </div>
     <div className='mt-20 bg-[#f8f8f8] md:p-24 lg:p-24 p-16'>
     <div className='relative'>
     <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        modules={[Autoplay, FreeMode, Navigation]}
        className="mySwiper md:px-20 lg:px-20 px-0"
      >
        <SwiperSlide>
            <img src={artsay} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={stopthefake} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={artsay} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={stopthefake} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
    </div>
    </div>
  )
}

export default Clients
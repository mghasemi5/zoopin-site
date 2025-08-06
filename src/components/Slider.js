import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './Slider.css';

const sliderImages = [
  {
    src: '/assets/images/slider/leader-7-xs.jpg',
    caption: 'The strategy firm for future-focused leaders.',
  },
  {
    src: '/assets/images/slider/leader-9-xs.jpg',
    caption: 'Become a purpose-driven company.',
  },
  {
    src: '/assets/images/slider/leader-10-xs.jpg',
    caption: 'Rethink the future of work.',
  },
];

function Slider() {
  return (
    <div className="slider-container">
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation
        loop
        autoplay={{ delay: 5000 }}
        spaceBetween={0}
        slidesPerView={1}
      >
        {sliderImages.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="slide" style={{ backgroundImage: `url(${item.src})` }}>
              <div className="hero-overlay">
                <h1 className="hero-headline">{item.caption}</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slider;

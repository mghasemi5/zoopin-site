import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules'; // ⬅️ Add Autoplay
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './PartnersSection.css';
import { fetchPartners } from '../api/partners';

const PartnersSection = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners().then(setPartners).catch(console.error);
  }, []);

  return (
    <section className="partners-section">
      <h2 className="section-title">Meet Our Partners</h2>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]} // ⬅️ Include Autoplay here
        spaceBetween={30}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} // ⬅️ Autoplay config
        navigation
        pagination={{ clickable: true }}
        className="partners-swiper"
      >
        {partners.map((partner, index) => (
          <SwiperSlide key={index}>
            <a href={partner.link} className="partner-card">
              <img src={partner.image} alt={partner.name} />
              <div className="partner-overlay">
                <h3>{partner.name}</h3>
                <p>{partner.description}</p>
              </div>
            </a>
          </SwiperSlide>
        ))}
      </Swiper>

      <a className="view-all-button" href="/partners">View All Partners →</a>
    </section>
  );
};

export default PartnersSection;

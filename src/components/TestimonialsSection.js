import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import './TestimonialsSection.css';

const testimonials = [
  {
    quote: `“It's not about money or connections. It's the willingness to outwork and outlearn everyone when it comes to your business.”`,
    name: 'Mark Cuban',
    title: 'entrepreneur',
    company: '',
    avatar: '/assets/images/testimonials/mark-cuban.jpg',
  },

];

export default function TestimonialsSection() {
  return (
    <section className="testimonials-section">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{
          clickable: true,
          renderBullet: (idx, className) => {
            const t = testimonials[idx];
            return `<span class="${className}"><img src="${t.avatar}" alt="${t.name}" /></span>`;
          },
        }}
        loop
        className="testimonials-swiper"
      >
        {testimonials.map((t, i) => (
          <SwiperSlide key={i}>
            <div className="testimonial-slide">
              <p className="quote">{t.quote}</p>
              <div className="author">
                <img className="avatar" src={t.avatar} alt={t.name} />
                <div className="author-info">
                  <span className="name">{t.name}</span>
                  <span className="title">{t.title}</span>
                  <span className="company">{t.company}</span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import './PartnersPage.css';
import { fetchPartners } from '../api/partners';




const PartnersPage = () => {
  const [partners, setPartners] = useState([]);

  useEffect(() => {
    fetchPartners().then(setPartners).catch(console.error);
  }, []);

  return (
    <>
      <Header />
      <div className="partners-page">
        <div className="partners-header">
        <h1>‌‌</h1>
          <h1>Our Strategic Partners</h1>
          <p>We collaborate with global leaders to drive meaningful change.</p>
        </div>
        <div className="partners-grid">
          {partners.map((partner, index) => (
            <a href={partner.link} className="partner-card" key={index}>
              <img src={partner.image} alt={partner.name} />
              <h3>{partner.name}</h3>
              <p>{partner.tagline}</p>
            </a>
          ))}
        </div>
        <div className="partners-cta">
          <a href="/contact" className="cta-button">Become a Partner</a>
        </div>
      </div>

    </>
  );
};

export default PartnersPage;


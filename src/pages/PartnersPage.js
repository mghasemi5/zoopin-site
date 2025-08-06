import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import partners from '../data/partners';
import './PartnersPage.css';
import { Link } from 'react-router-dom';




const PartnersPage = () => {
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

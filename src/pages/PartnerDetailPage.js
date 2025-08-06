import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import './PartnerDetailPage.css';
import { fetchPartner } from '../api/partners';

function PartnerDetailPage() {
  const { slug } = useParams();
  const [partner, setPartner] = useState(null);

  useEffect(() => {
    fetchPartner(slug).then(setPartner).catch(() => setPartner(null));
  }, [slug]);

  if (!partner) {
    return <div className="partner-not-found">Partner not found.</div>;
  }

  return (
    <div className="partner-page">
      <div className="partner-card2">
        <img src={partner.image} alt={partner.name} className="partner-image" />
        <div className="partner-info">
          <h1>{partner.name}</h1>
          <p className="tagline">{partner.tagline}</p>
          <p className="bio">{partner.bio}</p>
          <div className="contact-info">
            <h2>Contact Info</h2>
            <p><strong>Email:</strong> {partner.email}</p>
            <p><strong>Website:</strong> <a href={partner.website} target="_blank" rel="noopener noreferrer">{partner.website}</a></p>
            {partner.phone && <p><strong>Phone:</strong> {partner.phone}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartnerDetailPage;


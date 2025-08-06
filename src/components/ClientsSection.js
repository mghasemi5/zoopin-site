import React from "react";
import "./ClientsSection.css";

const clients = [
  {
    src: "../assets/images/logos/brand1.png",
    alt: "Brand 1",
    message: "We built a game-changing loyalty system for families.",
  },
  {
    src: "../assets/images/logos/brand2.png",
    alt: "Brand 2",
    message: "We launched their next-gen innovation strategy.",
  },
  {
    src: "../assets/images/logos/brand3.png",
    alt: "Brand 3",
    message: "We helped them scale sustainably across regions.",
  },
  {
    src: "../assets/images/logos/brand4.png",
    alt: "Brand 4",
    message: "We unlocked new growth using cultural insight.",
  },
];

const ClientsSection = () => {
  return (
    <section className="clients-section">
      <div className="clients-container">
        {clients.map((client, index) => (
          <div className="client-logo-box" key={index}>
            <img src={client.src} alt={client.alt} />
            <div className="tooltip">{client.message}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ClientsSection;

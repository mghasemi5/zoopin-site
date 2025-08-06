import React from 'react';
import './InfoBlocks.css';

const InfoBlocks = () => {
  const blocks = [
    {
      title: "Strategy",
      icon: <img src="/assets/images/icon-strategy.png" alt="Strategy Icon" />, // You can later replace with <img src="..." />
      description: (
        <>
          Jump <strong>develops growth playbooks</strong> to help companies future-proof their businesses.
          Every strategy is informed by the cultural strengths of the company.
        </>
      ),
    },
    {
      title: "Culture",
      icon: <img src="/assets/images/icon-culture.png" alt="Strategy Icon" />,
      description: (
        <>
          Jump <strong>facilitates experiences</strong> to help teams play to their strengths.
          Every experience is tailored to the strategy you’re trying to execute.
        </>
      ),
    },
    {
      title: "Leadership",
      icon: <img src="/assets/images/icon-eadership.png" alt="Strategy Icon" />,
      description: (
        <>
          Jump <strong>coaches leaders</strong> to help them move to the next level.
          Every interaction is grounded in the strategy and culture you’re leading.
        </>
      ),
    },
  ];

  return (
    <section className="info-blocks">
      {blocks.map((block, index) => (
        <div className="info-card" key={index}>
          <div className="icon">{block.icon}</div>
          <h3>{block.title}</h3>
          <p>{block.description}</p>
        </div>
      ))}
    </section>
  );
};

export default InfoBlocks;

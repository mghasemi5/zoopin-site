import React from 'react';
import './ArticlesSection.css';

const articles = [
  {
    title: "Apple’s AI about-face isn’t a failure. It’s a lesson in how to innovate.",
    summary:
      "Apple’s stumble shows why innovation works best when companies know their role and focus on doing it well.",
    image: '/assets/images/articles/apple-ai.jpg',
    category: 'Innovation',
    link: '/insights/apple-ai-lesson',
  },
  {
    title: "The Bologna Strategy: Why Kraft Heinz Is Splitting Up—and What That Means for the Rest of Us",
    summary:
      "Efficiency can take you far, but resilience and reinvestment will decide which leaders survive disruption.",
    image: '/assets/images/articles/apple-ai.jpg',
    category: 'Growth Strategy',
    link: '/insights/bologna-strategy',
  },
  {
    title: "Innovation is Social: Ten Ways To Be a Good Guest",
    summary:
      "The way we gather shapes the way we think. Let’s rebuild the habits that fuel creativity and collaboration.",
    image: '/assets/images/articles/apple-ai.jpg',
    category: 'Leadership',
    link: '/insights/social-innovation',
  },
  // add more objects as needed
];

export default function ArticlesSection() {
  return (
    <section className="articles-section">
      <h2 className="section-title">Featured Insights</h2>
      <div className="articles-grid">
        {articles.map((a, i) => (
          <div className="article-card" key={i}>
            <img src={a.image} alt={a.title} className="article-img" />
            <div className="article-body">
              <h3 className="article-title">
                <a href={a.link}>{a.title} →</a>
              </h3>
              <p className="article-summary">{a.summary}</p>
              <div className="article-footer">
                <span className="article-category">{a.category}</span>
                <a href={a.link} className="read-more">
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <a href="/insights" className="view-all-articles">
        View All Articles →
      </a>
    </section>
  );
}

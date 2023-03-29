import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.jpg";
import IMG2 from "../../assets/portfolio2.jpg";
import IMG3 from "../../assets/portfolio3.jpg";
import IMG4 from "../../assets/portfolio4.jpg";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21021007-logo-design-logo-modern-logos-icons-brand-identity-logomarks",
  },
  {
    id: 2,
    image: IMG2,
    title: "Ai Chatbot Mobile App - Ai Wave",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21046795-Ai-Chatbot-Mobile-App-Ai-Wave",
  },
  {
    id: 3,
    image: IMG3,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21021007-logo-design-logo-modern-logos-icons-brand-identity-logomarks",
  },
  {
    id: 4,
    image: IMG4,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21021007-logo-design-logo-modern-logos-icons-brand-identity-logomarks",
  },
  {
    id: 5,
    image: IMG5,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21021007-logo-design-logo-modern-logos-icons-brand-identity-logomarks",
  },
  {
    id: 6,
    image: IMG6,
    title: "Crypto Currency Dashboard",
    github: "https://github.com/",
    demo: "https://dribbble.com/shots/21021007-logo-design-logo-modern-logos-icons-brand-identity-logomarks",
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Protfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>

              <div className="protfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/portfolio1.png";
import IMG2 from "../../assets/portfolio2.png";
import IMG3 from "../../assets/portfolio3.png";
import IMG4 from "../../assets/portfolio4.png";
import IMG5 from "../../assets/portfolio5.png";
import IMG6 from "../../assets/portfolio6.png";

const Portfolio = () => {
  const data = [
    {
      id: 1,
      image: IMG6,
      title: "CyberNotes - Note App For Cyberpunk Fans (MERN) ",
      github: "https://github.com/abhideepghosh/CyberNotes",
      demo: "https://cyber-notes.netlify.app/",
    },

    {
      id: 2,
      image: IMG2,
      title: "Disney Hotstar Clone - Using React.js",
      github: "https://github.com/Swati-Malvi/hotstar-clone",
      demo: "https://hotstar-clone-reactjs.netlify.app/",
    },
    {
      id: 3,
      image: IMG3,
      title: "AI Code Wizard - Using JavaScript and Express.js",
      github: "https://github.com/abhideepghosh/open-ai-js",
      demo: "https://aicodewizard.vercel.app/",
    },
    {
      id: 4,
      image: IMG1,
      title: "Spotify Inspired Music Player - Using React.js And Redux Toolkit",
      github: "https://github.com/abhideepghosh/spotify-clone-react",
      demo: "https://spotify-clone-using-react.netlify.app/",
    },
    {
      id: 5,
      image: IMG5,
      title:
        "Admin Dashboard Using React.js, Material UI, Nevo And fullCalendar",
      github: "https://github.com/abhideepghosh/admin-dashboard",
      demo: "https://teslaadmindashboard.netlify.app/",
    },
    {
      id: 6,
      image: IMG4,
      title: "Forkify - Using JavaScript, MVC Architectural Pattern",
      github: "https://github.com/Swati-Malvi/forkify-js",
      demo: "https://github.com/Swati-Malvi/forkify-js",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  className="btn"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
                <a href={demo} className="btn" target="_blank" rel="noreferrer">
                  Live demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;

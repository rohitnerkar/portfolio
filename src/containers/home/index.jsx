import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Animate } from 'react-simple-animate';
import { FaLinkedin, FaGithub, FaTelegram, FaWhatsapp } from "react-icons/fa";
import './styles.scss';

const Home = () => {

  const navigate = useNavigate();

  const handleNavigateToContactMePage = () => {
    navigate("/contact");
  }

  return (
    <section id="home" className="home">
      <div className="home__text-wrapper">
        <h1>
          Hello, I'm Rohit Nerkar
          <br/>
          Computer Engineer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform : 'translateY(550px)'
        }}

        end={{
          transform : 'translateX(0px)'
        }}
      >
        <div className="home__contact-me">
          <button onClick={handleNavigateToContactMePage}>Hire Me</button>
          <a href="https://drive.google.com/file/d/1W_wYOaiVByTCWpdPO5xl-mxAVewOorxm/view?usp=sharing" target="_blank" rel="noopener noreferrer">
            <button>Download Resume</button>
          </a>
        </div>
        <div className="home__social">
          <h1>Available on</h1>
          <a href="https://www.linkedin.com/in/rohit-nerkar-060481211" target="_blank" rel="noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://github.com/rohitnerkar?tab=repositories" target="_blank" rel="noreferrer">
            <FaGithub />
          </a>
          <FaTelegram />
          <FaWhatsapp />
        </div>
      </Animate>
    </section>
  );
};

export default Home;

import React, { useState } from 'react';
import { FaCode } from "react-icons/fa";
import PageHeaderContent from '../../components/pageHeaderContent';
import BlogApp from '../../images/blogapp.png';
import ToDoList from '../../images/todolist.png';
import Ecommerce from '../../images/ecommerce.png';
import Form from '../../images/form.png';
import "./styles.scss";

const portfolioData = [
  {
    name : "Blog App",
    image : BlogApp,
    link : "https://github.com/rohitnerkar/blog-app"
  },
  {
    name : "ToDO List",
    image : ToDoList,
    link : "https://github.com/rohitnerkar/todo-app"
  },
  {
    name : "E-Commerce",
    image : Ecommerce,
    link : "https://github.com/rohitnerkar/e-commerce"
  },
  {
    name : "Login & Registration Form",
    image : Form,
    link : "https://github.com/rohitnerkar/login_signin_page"
  },
]

const Portfolio = () => {

  const [hoveredValue, setHoveredValue] = useState(null);

  function handleHover(index) {
    setHoveredValue(index);
  };
  
  function handleVisit(link) {
    window.open(link, '_blank');
  };

  return (
    <section id="portfolio" className='portfolio'>
      <PageHeaderContent 
        headerText = "Featured Projects"
        icon = {<FaCode size={40} />}
      />
      <div className="portfolio__content">
        <div className="portfolio__content__cards">
          {
            portfolioData.map((item, index) => (
              <div 
                className="portfolio__content__cards__item" 
                key={`cardItem${item.name.trim()}`} 
                onMouseEnter={() => handleHover(index)} 
                onMouseLeave={() => handleHover(null)}
              >
                <div className="portfolio__content__cards__item__image-wrapper">
                <p>{item.name}</p>
                  <a>
                    <img alt={item.name} src={item.image} />
                  </a>
                </div>
                <div className="overlay">
                  {
                    index === hoveredValue && (
                      <div>
                        <p>{item.name}</p>
                        <button onClick={() => handleVisit(item.link)}>Source Code</button>
                      </div>
                    )
                  }
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio;

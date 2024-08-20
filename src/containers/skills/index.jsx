import React from 'react';
import { GiSkills } from "react-icons/gi";
import PageHeaderContent from '../../components/pageHeaderContent';
import { skillsData } from './utils';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { Line } from 'rc-progress';
import './styles.scss';
import { FaLaptopCode, FaServer, FaDatabase } from "react-icons/fa";

const SKills = () => {

  const getCategoryIcon = (label) => {
    switch(label) {
      case 'FRONT END':
        return <FaLaptopCode size={20} />;
      case 'BACK END':
        return <FaServer size={20} />;
      case 'DATABASES':
        return <FaDatabase size={20} />;
      default:
        return null;
    }
  };  

  return (
    <section id="skills" className="skills">
      <PageHeaderContent 
        headerText = "My Skills"
        icon = {<GiSkills size={40} />}
      />
      <div className="skills__content-wrapper">
        {
          skillsData.map((item, i) => (
            <div key={i} className="skills__content-wrapper__inner-content">
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform : 'translateX(-200px)',
                }}

                end={{
                  transform : 'translateX(0px)',
                }}
              >
                
                <h3 className="skills__content-wrapper__inner-content__category-text">{getCategoryIcon(item.label)} {item.label}</h3>
                
                <div className="skills__content-wrapper__inner-content__progressbar-container">
                  {
                    item.data.map((skillItem, j) => (
                      <AnimateKeyframes
                        play
                        duration={1}
                        keyframes={["opacity : 1", "opacity : 0"]}
                        iterationCount="1"
                      >
                        <div className="progressbar-wrapper" key={j}>
                          <p>{skillItem.skillName}</p>
                          <Line
                            percent={skillItem.percentage}
                            strokeWidth="2"
                            strokeColor="#17a2b8"
                            trailWidth="2"
                            trailColor="grey"
                            strokeLinecap="square"

                          />
                        </div>
                      </AnimateKeyframes>
                    )) 
                  }
                </div>
              </Animate>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default SKills

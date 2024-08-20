import React from 'react';
import { MdWork, MdDescription } from 'react-icons/md';
import { FaGraduationCap } from "react-icons/fa6";
import PageHeaderContent from '../../components/pageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import { data } from './utils';
import 'react-vertical-timeline-component/style.min.css';
import './styles.scss';

const Resume = () => {
  return (
    <section id="resume" className='resume'>
      <PageHeaderContent 
        headerText = "My Resume"
        icon = {<MdDescription size={40} />}
      />
      <div className="timeline">
        <div className="timeline__experience">
          <h3 className="timeline__experience__header-text"><MdWork size={20} /> Experience</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="#004d40"
          >
            {
              data.experience.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: '#004d40',
                    border: '1px solid #004d40'
                  }}
                  icon={<MdWork />}
                  iconStyle={{
                    background : '#004d40',
                    color : '#ff7043',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title} |</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
        <div className="timeline__education">
          <h3 className="timeline__education__header-text"><FaGraduationCap size={20} /> Education</h3>
          <VerticalTimeline
            layout={'1-column'}
            lineColor="#004d40"
          >
            {
              data.education.map((item, i) => (
                <VerticalTimelineElement
                  key={i}
                  className="timeline__experience__vertical-timeline-element"
                  contentStyle={{
                    background: 'none',
                    color: '#004d40',
                    border: '1px solid #004d40'
                  }}
                  icon={<FaGraduationCap />}
                  iconStyle={{
                    background : '#004d40',
                    color : '#ff7043',
                  }}
                >
                  <div className="vertical-timeline-element-title-wrapper">
                    <h3>{item.title} |</h3>
                    <h4>{item.subTitle}</h4>
                  </div>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.description}</p>
                  <p className="vertical-timeline-element-title-wrapper-description">{item.date}</p>
                </VerticalTimelineElement>
              ))
            }
          </VerticalTimeline>
        </div>
      </div>
    </section>
  )
}

export default Resume;
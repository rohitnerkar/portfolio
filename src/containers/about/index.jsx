import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill, BsFileEarmarkText, BsPersonCircle } from 'react-icons/bs';
import { Animate } from 'react-simple-animate';
import './styles.scss';
import Photo from '../../images/Photo.jpg';

const personalDetails = [
  {
    label: "Name",
    value: "Rohit Nerkar",
  },
  {
    label: "Address",
    value: "Pune, Maharashtra, India",
  },
  {
    label: "Email",
    value: "rohitnerkar1997@gmail.com",
  },
  {
    label: "Contact No",
    value: "+91 7767082513",
  },
];

const jobSummary = "Motivated and detail-oriented Computer Engineer with a passion for developing innovative solutions and a strong foundation in both frontend and backend development. Adept at working in fast-paced environments, I am eager to contribute to dynamic teams where I can leverage my expertise in full-stack development, database management, and user interface design. My goal is to secure a full-time position that not only offers professional challenges but also provides opportunities for growth and learning.";

const About = () => {
  return (
    <section id="about" className='about'>
      <PageHeaderContent 
        headerText = "About Me"
        icon = {<BsInfoCircleFill size={40} />}
      />
      <div className="about__content">
        <div className="about__content__personalWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform : 'translateX(-900px)'
          }}

          end={{
            transform : 'translateX(0px)'
          }}
        >
          <h3><BsFileEarmarkText size={20} /> Professional Summary</h3>
          <p>{jobSummary}</p>
        </Animate>
        
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform : 'translateX(500px)'
          }}

          end={{
            transform : 'translateX(0px)'
          }}
        >
        <h3 className="personalInformationHeaderText"><BsPersonCircle size={20} /> Personal Details</h3>
        <ul>
          {
            personalDetails.map((item, i) => (
              <li key={i}>
                <span className="title">{item.label} :</span>
                <span className="value">{item.value}</span>
              </li>
            ))              
          }
        </ul>
        </Animate>
        </div>

        <div className="about__content__servicesWrapper">
        <Animate
          play
          duration={1.5}
          delay={1}
          start={{
            transform : 'translateX(600px)'
          }}

          end={{
            transform : 'translateX(0px)'
          }}
        >
          <div className="about__content__servicesWrapper__innerContent">
            <img src={Photo} alt="ProfilePicture" />
          </div>
        </Animate>
          
        </div>
      </div>
    </section>
  )
}

export default About;

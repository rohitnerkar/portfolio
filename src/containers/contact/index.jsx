import React, { useState } from 'react';
import { MdContactMail, MdForum } from "react-icons/md";
import PageHeaderContent from '../../components/pageHeaderContent';
import { Animate } from 'react-simple-animate';
import emailjs from 'emailjs-com';
import "./styles.scss";

const Contact = () => {

  const [nameFocused, setNameFocused] = useState(false);
  const [nameValue, setNameValue] = useState('');
  const [emailFocused, setEmailFocused] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const [messageFocused, setMessageFocused] = useState(false);
  const [messageValue, setMessageValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_87whzpu', 'template_6mnnrnd', {
      from_name: nameValue,
      from_email: emailValue,
      message: messageValue,
    }, 'ihqHTrSWDUh3Iejgl')
    .then(() => {
      alert("Message sent successfully!");
      setNameValue('');
      setEmailValue('');
      setMessageValue('');
    }, () => {
      alert("Failed to send message, please try again later.");
    });
  };

  return (
    <section id="contact" className='contact'>
      <PageHeaderContent 
        headerText = "Contact Me"
        icon = {<MdContactMail size={40} />}
      />
      <div className="contact__content">
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform : "translateX(-200px)"
          }}

          end={{
            transform : "translateX(0px)"
          }}
        >
          <h3 className="contact__content__header-text"><MdForum size={22} /> Let's Talk</h3>
        </Animate>
        
        <Animate
          play
          duration={1}
          delay={0}
          start={{
            transform : "translateX(200px)"
          }}

          end={{
            transform : "translateX(0px)"
          }}
        >
          <form
            onSubmit={handleSubmit}
            className="contact__content__form"
          >
            <div className="contact__content__form__controlswrapper">
              <div>
                <input 
                  required
                  name="name" 
                  className="inputName" 
                  type={'text'} 
                  value={nameValue}
                  onFocus={() => setNameFocused(true)}
                  onBlur={() => setNameFocused(false)}
                  onChange={(e) => setNameValue(e.target.value)}
                  placeholder={nameFocused && !nameValue ? "Enter your name" : ""} 
                />
                <label htmlFor="name" className="nameLabel">Name</label>
              </div>
              <div>
                <input 
                  required 
                  name="email" 
                  className="inputEmail" 
                  type={'text'} 
                  value={emailValue}
                  onFocus={() => setEmailFocused(true)}
                  onBlur={() => setEmailFocused(false)}
                  onChange={(e) => setEmailValue(e.target.value)}
                  placeholder={emailFocused && !emailValue ? "Enter your email" : ""}
                />
                <label htmlFor="email" className="emailLabel">Email</label>
              </div>
              <div>
                <textarea 
                  required 
                  name="message" 
                  className="inputMessage" 
                  type={'text'} 
                  rows="5"
                  value={messageValue}
                  onFocus={() => setMessageFocused(true)}
                  onBlur={() => setMessageFocused(false)}
                  onChange={(e) => setMessageValue(e.target.value)}
                  placeholder={messageFocused && !messageValue ? "Enter your message" : ""} 
                />
                <label htmlFor="message" className="messageLabel">Message</label>
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </Animate>
      </div>
    </section>
  )
}

export default Contact;

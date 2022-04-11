import React from "react";
import { FaLinkedin, FaGithub}  from 'react-icons/fa';
import "./contact.scss";
import Title from "../../components/Title/Title";

  
function Contact() {
            return (
              <div className="contact">
                <Title title="Contact" />
                <h4 className="contact-title">I'd love to hear from you!</h4>
                <div className="email">
                    <strong>email:</strong><a href="mailto:mrspascer@hotmail.com" className="myemail">mrspasceri@hotmail.com</a>
                </div>
                <form className="contact-form">
                  <div className="contact-half contact-left cf">
                    <input
                      className="contact-input"
                      type="text"
                      id="input-name"
                      placeholder="Name"
                    />
                    <input
                      className="contact-input"
                      type="email"
                      id="input-email"
                      placeholder="Email address"
                    />
                    <input
                      className="contact-input"
                      type="text"
                      id="input-subject"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="contact-half contact-right cf">
                    <textarea
                      className="contact-textarea"
                      type="text"
                      id="input-message"
                      placeholder="Message"
                    ></textarea>
                  </div>
                  <input className="contact-submit" type="submit" value="Submit" />
                </form>
                <div className="media">
              
                    <a href="https://www.linkedin.com/in/chantellepasceri/"><FaLinkedin className="mediaIcon linkedIn" /></a>
                    <a href="https://github.com/bella77-69"><FaGithub className="mediaIcon github" /></a>
                </div>
              </div>
            );
          }

export default Contact;
               
 
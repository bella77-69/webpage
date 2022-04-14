import React from "react";
import "./footer.scss";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa"
import logo from "../../assets/logo/logo1.png";

function footer() {
  return (
    <>
      <section className="footer">
   
<div className="footer-wrapper">
      <h4 className="footer-title">I'm currently open to new employment opportunities, I'd love to hear from you!</h4>
      <form className="footer-form">
        <div className="footer-half footer-left">
          <input
            className="footer-input"
            type="text"
            id="input-name"
            placeholder="Name"
          />
          <input
            className="footer-input"
            type="email"
            id="input-email"
            placeholder="Email address"
          />
          <input
            className="footer-input"
            type="text"
            id="input-subject"
            placeholder="Subject"
          />
        </div>
        <div className="footer-half footer-right ">
          <textarea
            className="footer-textarea"
            type="text"
            id="input-message"
            placeholder="Message"
          ></textarea>
        </div>
        <input className="footer-submit footer-btn" type="submit" value="Submit" />
      </form>
      
            <div className="footer-social">
          <a href="https://www.linkedin.com/in/chantellepasceri/" className="footer-icon">
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/bella77-69" className="footer-icon">
            <FaGithub/>
          </a>
          <a href="https://twitter.com/home" className="footer-icon">
            <FaTwitter />
          </a>
        </div>
        <h4 className="footer__txt">
        <div className="email">
                    <strong>email:</strong><a href="mailto:mrspascer@hotmail.com" className="myemail">mrspasceri@hotmail.com</a>
                </div>
                <p>I'm currently open to new employment opportunities and I love side projects.
</p>
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/bella77-69"
            className="footer__txt--link"
          >
        
          </a>{" "}
          Let's collaborate! 
          <p
            // rel="noopener noreferrer"
            // target="_blank"
            // href="https://amandayeh.com"
          > Designed and Developed by Chantelle
            {/* <img className="footer__img" src={logo} alt="logo" /> */}
          </p>
        </h4>
        </div>
      </section>
    </>
  );
}
export default footer;

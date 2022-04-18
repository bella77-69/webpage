import React from "react";
import "./footer.scss";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

import Scroll from "../Scroll/Scroll";
function footer() {
  return (
    <>
      <section className="footer">
        <div className="footer-wrapper">
          <h4 className="footer-title">
            I'm currently open to new employment opportunities, If you have
              any questions or want to work together on a future project, feel
              free to contact me on my social media or email. I'd love to hear
            from you!
          </h4>
          {/* <form className="footer-form">
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
            <input
              className="footer-submit footer-btn"
              type="submit"
              value="Submit"
            />
          </form> */}

          <div className="footer-social">
            <a
              href="https://www.linkedin.com/in/chantellepasceri/"
              className="footer-icon"
            >
              <FaLinkedinIn />
            </a>
            <a href="https://github.com/bella77-69" className="footer-icon">
              <FaGithub />
            </a>
            <a href="https://twitter.com/home" className="footer-icon">
              <FaTwitter />
            </a>
          </div>
          <h4 className="footer__txt">
            <div className="footer-email">
              <a
                rel="noopener noreferrer"
                target="_blank"
                href="mailto:mrspascer@hotmail.com"
                className="footer-email--myemail"
              >
                Email
              </a>
            </div>
          </h4>
          <Scroll />
          <p className="footer__txt">
              Designed and Developed by Chantelle 2022
            </p>
        </div>
      </section>
    </>
  );
}
export default footer;

import React from "react";
import "./footer.scss";

import logo from "../../assets/logo/logo1.png";

function footer() {
  return (
    <>
      <section className="footer">
        <h4 className="footer__txt">
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.github.com/bella77-69"
            className="footer__txt--link"
          >
            Open-Source Portfolio
          </a>{" "}
          · My Heart Belongs to{" "}
          <a
            rel="noopener noreferrer"
            target="_blank"
            href="https://amandayeh.com"
          >
            <img className="footer__img" src={logo} alt="logo" />
          </a>
        </h4>
      </section>
    </>
  );
}
export default footer;

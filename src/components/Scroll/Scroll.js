import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";
import "./scroll.scss";

const Scroll = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="scroll">
      {showTopBtn && (
        <FaAngleUp className="scroll-position scroll-style" onClick={goToTop} />
      )}
      <h1 className="scroll-title">Top</h1>
    </div>
  );
};
export default Scroll;

import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
import logo from "../../assets/logo/logo1.png";
import "./nav.scss";

export default class Nav extends Component {
  state = {
    isOpen: false,
  };
  handleToggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    return (
      <nav className="nav">
        <div className="nav-center">
          <div className="nav-header">
            <NavLink to="/" className="nav-link">
              <img src={logo} className="nav-img" alt="webpage logo" />
            </NavLink>
            <button
              type="button"
              className="nav-btn"
              onClick={this.handleToggle}
            >
              <FaAlignRight className="nav-icon" />
            </button>
          </div>
          <ul
            className={this.state.isOpen ? "nav-links nav-show" : "nav-links"}
          >
            <NavLink to="/" className="nav-links">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-links">
              About
            </NavLink>
            <NavLink to="/projects" className="nav-links">
              Projects
            </NavLink>
            <NavLink to="/contact" className="nav-links">
              Contact
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

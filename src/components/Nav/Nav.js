import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { FaAlignRight } from "react-icons/fa";
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
              <h1 className="nav-logo">CP</h1>
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
            <NavLink to="/" className="nav-links--linked">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-links--linked">
              About
            </NavLink>
            <NavLink to="/projects" className="nav-links--linked">
              Projects
            </NavLink>
            <NavLink to="/skills" className="nav-links--linked">
              Skills
            </NavLink>
          </ul>
        </div>
      </nav>
    );
  }
}

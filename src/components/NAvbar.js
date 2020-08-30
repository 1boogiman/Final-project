import React from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item ">
            <NavLink
              className="nav-link"
              {...(<span className="sr-only">(current)</span>)}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              {...(<span className="sr-only">(current)</span>)}
              to="/resume"
            >
              Resume
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              className="nav-link"
              {...(<span className="sr-only">(current)</span>)}
              to="/contact_me"
            >
              Contact Me
            </NavLink>
          </li>
        </ul>
      </div>
      <h3>Portfolio</h3>
    </nav>
  );
};
export default NavBar;

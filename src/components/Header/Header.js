import React from "react";
import Logo from "../../asstes/logo-2.png";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <img src={Logo} alt="" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-5 ms-lg-auto mb-2 mb-lg-0">
              <li className="nav-item mb-2 mb-lg-0">
                <NavLink
                  className="nav-NavLink"
                  aria-current="page"
                  to="/about"
                >
                  About Us
                </NavLink>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <NavLink
                  className="nav-NavLink"
                  aria-current="page"
                  to="/service"
                >
                  Service
                </NavLink>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <NavLink
                  className="nav-NavLink"
                  aria-current="page"
                  to="/references"
                >
                  Our References
                </NavLink>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <NavLink
                  className="nav-NavLink"
                  aria-current="page"
                  to="/corporate"
                >
                  Corporate
                </NavLink>
              </li>
              <li className="nav-item mb-2 mb-lg-0">
                <NavLink
                  className="nav-NavLink"
                  aria-current="page"
                  to="/contact"
                >
                  Contacts
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

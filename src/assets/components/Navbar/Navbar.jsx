import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";

function Navbar() {
  return (
    <header id="blur" className="animate__animated animate__fadeInDown">
      <div className="header-container ">
        <Link className="Logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/contact">
          <span className="btnContact">Contact</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

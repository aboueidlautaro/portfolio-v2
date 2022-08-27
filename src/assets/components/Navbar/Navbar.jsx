import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../static/images/logo.png";

function Navbar() {
  return (
    <header>
      <div className="header-container">
        <Link className="Logo" to="/">
          <img src={logo} alt="" />
        </Link>
        <Link to="/contact">
          <span className="btnContact">Contacto</span>
        </Link>
      </div>
    </header>
  );
}

export default Navbar;

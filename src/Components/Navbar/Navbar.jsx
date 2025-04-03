import React from "react";
import "./Navbar.css"; // Import CSS for styling
import logo from "../../../src/assets/Logo1.png";  // Correct path
 // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src={logo} alt="Company Logo" className="logo" />
      </div>
      <ul className="nav-links me-5">
        <li className="me-5 ho" ><a  href="#home">Home</a></li>
        <li className="me-5 ho" ><a href="#services">Services</a></li>
        <li className="me-5 ho" ><a href="#about">About</a></li>
        <li className="me-5 ho" ><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;


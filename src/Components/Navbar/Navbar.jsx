import React from "react";
import "./Navbar.css"; // Import CSS for styling
import logo from "../../../public/assets/Logo1.png"; // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img src="/assets/Logo1.png" alt="Company Logo" className="logo" />
      </div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;


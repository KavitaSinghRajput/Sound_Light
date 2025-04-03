import React from "react";
import "./Navbar.css"; // Import CSS for styling
import logo from "../../../src/assets/Logo1.png";  // Correct path
 // Replace with your logo path

const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-container"></div>
      
      <ul className="nav-links left-links">
        <li className="me-5 ho" ><a  href="#Home">Home</a></li>
        <li className="me-5 ho" ><a href="#Services">Services</a></li>
        <li className="me-5 ho" ><a href="#Events">Events</a></li>
       </ul>
        <div className="logo-container">
        <img src={logo} alt="Indore Sound & Light Logo" className="logo" />
      </div>
      <ul className="nav-links left-links">
        <li className="me-5 ho" ><a href="#Equipment">Equipment</a></li>
        <li className="me-5 ho" ><a href="#Contact">Contact</a></li>
      </ul>
    </nav>
  );
};
export default Navbar;


import React ,{useState} from "react";
import {Link} from "react-router-dom";
import "./Navbar.css"; // Import CSS for styling
import logo from "../../../src/assets/Logo1.png";  // Correct path
 // Replace with your logo path

const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false);

  return (
    <nav className="navbar">
    <div className="navbar-container">
      <button className="menu-btn" onClick={()=>setMenuOpen(!menuOpen)}>
      ☰
      </button>
    </div>
      
      <ul className={menuOpen ?"nav-links open" : "nav-links left-links"}>

        <li><Link to="/">Home</Link> </li>
        <li><Link to="/services">Services</Link> </li>
        <li><Link to="/events">Events</Link> </li>

       </ul>
        <div className="logo-container">
        <img src={logo} alt="Indore Sound & Light Logo" className="logo" />
      </div>
      <ul className="nav-links left-links">
      <li><Link to="/equipment">Equipment</Link> </li>
      <li><Link to="/contact">Contact</Link> </li>
     </ul>
    </nav>
  );
};
export default Navbar;


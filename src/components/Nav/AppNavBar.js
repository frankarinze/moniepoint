import React from "react";
import { FaBars } from "react-icons/fa"; // Assuming you're using Font Awesome icons
import { Button } from "react-bootstrap"
import "./AppNavbar.css"; // Import your custom styles
import logo from "../../assets/logo-two.png";


const AppNavbar = () => {
  return (
    <nav className="navbar">
      {/* Left Section - Menu Button */}
      <div className="navbar-left">
        <Button
          variant="outline-dark"
          className="menu-button"
        >
          Menu
        </Button>
        <FaBars className="menu-icon" />
      </div>

      {/* Center Section - Small Logo */}
      <div className="navbar-center">
        <img
          src={logo}
          alt="Logo"
          height="30"
          className="logo"
        />
      </div>

      {/* Right Section - Login and Sign Up Buttons */}
      <div className="navbar-right">
        <Button
          className="login-button"
          variant="outline-dark"
        >
          Login
        </Button>
        
        <Button
          className="signup-button"
          variant="outline-dark"
        >
          Sign Up
        </Button>
      </div>
    </nav>
  );
};

export default AppNavbar;

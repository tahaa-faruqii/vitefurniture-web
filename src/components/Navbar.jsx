import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav id="navbar">
      <h1 className="logo">FurniShop</h1>

      {/* Hamburger Menu Icon for Mobile */}
      <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
        <div className={isOpen ? "bar open" : "bar"}></div>
      </div>

      {/* Navigation Links */}
      <div id="nav" className={isOpen ? "nav-active" : ""}>
        <a href="#home" onClick={() => setIsOpen(false)}>
          Home
        </a>
        <a href="#about" onClick={() => setIsOpen(false)}>
          About
        </a>
        <a href="#feature" onClick={() => setIsOpen(false)}>
          Feature
        </a>
        <a href="#contact" onClick={() => setIsOpen(false)}>
          Contact
        </a>
      </div>
    </nav>
  );
}

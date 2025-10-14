import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h2>FoodieHub 🍴</h2>
      <ul>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
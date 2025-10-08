import React from "react";
import "../scss./Navbar.scss";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar__logo">
        <span className="logo-highlight">Note</span>Flow
      </div>

      <ul className="navbar__links">
        <li><a href="#">Home</a></li>
        <li><a href="#">My Notes</a></li>
        <li><a href="#">About</a></li>
      </ul>

      <button className="navbar__btn">+ Add Note</button>
    </nav>
  );
};

export default Navbar;

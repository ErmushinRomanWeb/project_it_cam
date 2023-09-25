import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <nav className="nav">
      <ul className="nav-list">
        <li>
          <a className="nav-link" href="#">
            Profile
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Messages
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            News
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Music
          </a>
        </li>
        <li>
          <a className="nav-link" href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

import React from "react";
import classes from "./NavBar.module.css";

const NavBar = () => {
  console.log(classes);
  return (
    <nav className= {classes.nav}>
      <ul className={classes.nav__list}>
        <li>
          <a className={classes.nav__link} href="#">
            Profile
          </a>
        </li>
        <li>
          <a className= {classes.nav__link} href="#">
            Messages
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="#">
            News
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="#">
            Music
          </a>
        </li>
        <li>
          <a className={classes.nav__link} href="#">
            Settings
          </a>
        </li>
      </ul>
    </nav>
  );
};
export default NavBar;

import React from "react";
import classes from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import Friends from "./Friends/Friends";

const NavBar = ({friends}) => {
  // console.log(classes);
  return (
    <div className={classes.nav__wrapper}>
      <nav className={classes.nav}>
        <ul className={classes.nav__list}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.nav__link__active : classes.nav__link
              }
              to="/"
            >
              Profile
              {/*я помню, что v8 будет работать с dom объектами, а у каждого dom объекта есть свойтсво, которое содержит объект со всеми атирбутами, по умолчанию, и мы протсо можем менять значение этих атрибутов, присваиваивая объектам классы и меняя в них атрибуты, значения которых влияют на внешний вид объекта */}
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.nav__link__active : classes.nav__link
              }
              to="/Messager"
            >
              {/*Теперь при нажатии на ссылку меняется url в адресной строке */}
              Messager
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.nav__link__active : classes.nav__link
              }
              to="/News"
            >
              {/*Теперь при нажатии на ссылку меняется url в адресной строке */}
              News
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.nav__link__active : classes.nav__link
              }
              to="/Music"
            >
              {/*Теперь при нажатии на ссылку меняется url в адресной строке */}
              Music
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes.nav__link__active : classes.nav__link
              }
              to="/Settings"
            >
              {/*Теперь при нажатии на ссылку меняется url в адресной строке */}
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
      <Friends friends={friends}/>
    </div>
  );
};
export default NavBar;

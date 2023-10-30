import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./Dialog.module.css";

const alFunc = (name) => {
  return alert(name)
} 

const Dialogs = (props) => {

  return (
    <div className={classes.dialog__user__item}>
      <div
        style={{ backgroundImage: `url(${props.imageUrl})` }}
        className={classes.user__img}
      ></div>
      <NavLink onClick={() => alFunc(props.name)}  to={`/Messager/${props.id}`} className={classes.user__name}>
        {props.name}
      </NavLink>
    </div>
  );
};

export default Dialogs;

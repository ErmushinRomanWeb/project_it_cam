import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
  return (
    <div className={classes.message__wrapper}>
      <div style={{backgroundImage: `url(${props.imageUrl})`}} className={classes.message__img}></div>
      <div className={classes.message__information__block}>
        <div className={classes.message__user__name}>{props.name}</div>
        <div className={classes.message__text}>{props.message}</div>
      </div>
    </div>
  );
};

export default Message 
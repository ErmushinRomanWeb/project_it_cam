import React from "react";
import classes from "./Message.module.css"

const Message = (props) => {
  const info = document
  console.log(info);
//!пропс - это всего лишь объект, который просто хранит в себе ключи и их значения, при этом, ключем становится тот атрибут, который мы добавили к компоненте тегу.
  return (
    <div className={classes.message__wrapper}>
      <div style={{backgroundImage: `url(${props.imageUrl})`}} className={classes.message__img}></div>
      <div id={'her'} className={classes.message__information__block}>
        <div className={classes.message__user__name}>{props.name}</div>
        <div className={classes.message__text}>{props.message}{}</div>
      </div>
    </div>
  );
};

export default Message 
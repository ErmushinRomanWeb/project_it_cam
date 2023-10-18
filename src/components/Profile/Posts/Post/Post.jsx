import React from "react";
import classes from "./Post.module.css";

const Post = ({name, message, photo}) => {
  return (
    <div className={classes.post__wrapper}>
      <div className={classes.img__wrapper}>
        <div style={{backgroundImage: `url(${photo})`}}
          className={classes.post__img}
        /><div/>
      </div>
      <h3>{name}</h3>
      <p className={classes.post__text}>{message}</p>
    </div>
    
  );
};
export default Post;

import React from "react";
import classes from "./Post.module.css";

const Post = () => {
  return (
    <div className={classes.post__wrapper}>
      <div>
        <img
          src="https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826"
          className={classes.post__img}
        />
      </div>
      <p className={classes.post__text}>Hello Rman</p>
    </div>
    
  );
};
export default Post;

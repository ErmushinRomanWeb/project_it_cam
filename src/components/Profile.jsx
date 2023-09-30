import React from "react";
import classes from "./Profile.module.css"

const Profile = () => {
  return (
    <main className={classes.main__content}>
      <div className={classes.main__content__wrapper}>
        <div
          className={classes.main__content__img}
        ></div>
      </div>
      <div className={classes.person__wrapper}>
        <div>
          <img
            className={classes.person__image}
            src="https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826"
          />
        </div>
        <div className={classes.person__data}>
          <h3 className={classes.person__name}>Ermushin Roman</h3>
          <p>Date of birth: 20 juli</p>
          <p>City: Severodvinsk</p>
          <p>Education: SAFU</p>
          <p>Web site: Http://Rommmmannnnn</p>
        </div>
      </div>
      <div className={classes.person__posts__wrapper}>
        {" "}
        {/*Обертка для блоков постов постов*/}
        <h2 className={classes.post__header}>My posts</h2>
        <div className={classes.post__input__wrapper}>
          <textarea className={classes.post__input} placeholder="write post" />
          <br />
          <button className={classes.add__post__button}>add post</button>
        </div>
      </div>
      <div className={classes.comments__wrapper}>
        <div>
          <img
            src="https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826"
            className={classes.comments__img}
          />
        </div>
        <p className={classes.comment__text}>Hello Rman</p>
      </div>
    </main>
  );
};
export default Profile;

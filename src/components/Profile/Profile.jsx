import React from "react";
import classes from "./Profile.module.css";
import AddPost from "./AddPost/AddPost";
import Person from "./Person/Person";
import Posts from "./Posts/Posts";

const Profile = ({posts, addPost}) => {
  return (
    <main className={classes.main__content}>
      <div className={classes.main__content__wrapper}>
        <div className={classes.main__content__img}></div>
      </div>
      <Person />
      <AddPost addPost={addPost}/>
      <Posts posts={posts} />
    </main>
  );
};
export default Profile;


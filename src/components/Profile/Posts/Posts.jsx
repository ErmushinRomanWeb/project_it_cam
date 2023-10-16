import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const Posts = () => {
  console.log(window);
  console.log(Post);
  return (
    <div className={classes.posts}>
    <Post name={"ROman"} message={"hello"} photo={'https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826'}/>
    <Post name={"Pasha"} message={"hello"} photo={'https://uznayvse.ru/images/catalog/2022/1/vin-diesel_87.jpg'}/>
    <Post name={"Vlade"} message={"hello"} photo={'https://news.store.rambler.ru/img/b691778f573f19f8cf7257a879888227?img-format=auto&img-1-resize=height:400,fit:max&img-2-filter=sharpen'}/>
  </div>
    
  );
};
export default Posts;

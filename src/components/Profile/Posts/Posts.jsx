import React from "react";
import classes from "./Posts.module.css";
import Post from "./Post/Post";

const posts = [
  {
    id: 1,
    name: "Roman",
    message: "Привет, петухи и прекрасная дама",
    imageUrl:
      "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif",
  },
  {
    id: 2,
    name: "Pavel",
    message: "Я Паша, я ебашу",
    imageUrl: "https://i.gifer.com/CoFM.gif",
  },
  {
    id: 3,
    name: "Vlada",
    message: "Ты офигееееееел!?",
    imageUrl:
      "https://media.tenor.com/jXpKV1MVgdMAAAAM/the-fate-of-the-furious-the-fate-of-the-furious-gi-fs.gif",
  },
  
];

let postElement = posts.map((el) => {//!по сути, мы протсто достаем каждый элемент массива и в новый массив, на основании элементов старого массива добавляем вызов компоненты, с пропсами из предыдущего элемента массива.
  return <Post name={el.name} message={el.message} photo={el.imageUrl} />;
});

const Posts = () => {
  return <div className={classes.posts}>{postElement}</div>;
};
export default Posts;

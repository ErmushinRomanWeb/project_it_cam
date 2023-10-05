import React from "react";
import classes from "./AddPost.module.css";//импортируем объект и называем его classes, он содержитв себе ключи - название селектора, а значением этих ключей является новое название, присвоенное сборщиком, таким образом, мы передаем в className строку - значение ключа селектора, а к этому уникальному ключу уже привязаны стилевые объкты

const AddPost = () => {
  return (
    <div className={classes.person__posts__wrapper}>{/*класс присваивается из стилевого модуля css достается из объекта, в который попадает */}
      {" "}
      {/*Обертка для блоков постов постов*/}
      <h2 className={classes.post__header}>Add post</h2>
      <div className={classes.post__input__wrapper}>
        <textarea className={classes.post__input} placeholder="write post" />
        <br />
        <button className={classes.add__post__button}>add post</button>
      </div>
    </div>
  );
};

export default AddPost;

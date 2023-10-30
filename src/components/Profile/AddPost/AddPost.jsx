import React from "react";
import classes from "./AddPost.module.css"; //импортируем объект и называем его classes, он содержитв себе ключи - название селектора, а значением этих ключей является новое название, присвоенное сборщиком, таким образом, мы передаем в className строку - значение ключа селектора, а к этому уникальному ключу уже привязаны стилевые объкты

let newPostElement = React.createRef();
let newNameElement = React.createRef();
let newImageElement = React.createRef(); //значением данных переменных будет объект со свойством current
console.log(newNameElement);
const newPostFunc = (callback) => {
  debugger
  let textValue = newPostElement.current.value; //в данном коде в переменную попадет результат выражения, то есть, зайди в ячейку памяти, в которой хранится объект, в этом объекте найди свойство current и конец выражения - найди значение value у свойства, и результат этого выражения, то есть строка, которую пользователь напишет в input, положи в переменную.
  let nameValue = newNameElement.current.value;
  let imageValue = newImageElement.current.value;
  debugger
  callback(imageValue, nameValue, textValue);
};

const AddPost = ({addPost}) => {
  console.log(addPost);
  return (
    <div className={classes.person__posts__wrapper}>
      {/*класс присваивается из стилевого модуля css достается из объекта, в который попадает */}{" "}
      {/*Обертка для блоков постов постов*/}
      <h2 className={classes.post__header}>Add post</h2>
      <div className={classes.post__input__wrapper}>
          <input ref={newImageElement} type="file" name="" id="" />
          <br />
          <input ref={newNameElement} type="text" placeholder="Введите имя" />
          <br />
          <textarea
            ref={newPostElement} //в данном моменте в атрибут попадает объект, и в этот объектпопадает ссылка на готовый dom объект
            className={classes.post__input}
            placeholder="write post"
          />
          <br />
          <button
            onClick={() => newPostFunc(addPost)}
            className={classes.add__post__button}
          >
            add post
          </button>
      </div>
    </div>
  );
};

export default AddPost;

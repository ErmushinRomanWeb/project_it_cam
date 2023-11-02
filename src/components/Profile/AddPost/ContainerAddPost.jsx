import React from "react";
import classes from "./AddPost.module.css"; //импортируем объект и называем его classes, он содержитв себе ключи - название селектора, а значением этих ключей является новое название, присвоенное сборщиком, таким образом, мы передаем в className строку - значение ключа селектора, а к этому уникальному ключу уже привязаны стилевые объкты

let newPostElement = React.createRef();
let newNameElement = React.createRef();
let newImageElement = React.createRef(); //значением данных переменных будет объект со свойством current
console.log(newNameElement);
const newPostFunc = (callback) => {
  console.log(callback);
  let textValue = newPostElement.current.value; //в данном коде в переменную попадет результат выражения, то есть, зайди в ячейку памяти, в которой хранится объект, в этом объекте найди свойство current и конец выражения - найди значение value у свойства, и результат этого выражения, то есть строка, которую пользователь напишет в input, положи в переменную.
  let nameValue = newNameElement.current.value;
  let imageValue = newImageElement.current.value;
  callback(imageValue, nameValue, textValue);
  newNameElement.current.value = ''
  newPostElement.current.value = ''
  debugger
};


export default newPostFunc;

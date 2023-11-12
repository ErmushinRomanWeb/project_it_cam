import React from "react";
import classes from "./AddPost.module.css"; //импортируем объект и называем его classes, он содержитв себе ключи - название селектора, а значением этих ключей является новое название, присвоенное сборщиком, таким образом, мы передаем в className строку - значение ключа селектора, а к этому уникальному ключу уже привязаны стилевые объкты
let newPostElement = React.createRef();
let newNameElement = React.createRef();
let newImageElement = React.createRef(); //значением данных переменных будет объект со свойством current


//!суть в том, что данная функция вызвана в обработчике события которое реагирует на изменение состояния инпута, то есть, как только изменилось состояние, то есть value, это является событием, то есть, первично изменяется состояние данного поля ввода, возможно это благодаря тому, что ref объект уже имеет значение ключа current: textAria, который является ссылкой на конкретный объектd в атрибут которого мы положили ссылку на объект ref, потому, что код помещения данного объекта в атрибут ref, и присвоение его ключу именованной ссылки на встроенный объект react, такой, как textarea, и потом v8 может обратится к его ключам и тд.

const valueCall = (addNewInform) => {
  let nameValue = newNameElement.current.value;//в данные переменные я добавляю значения строк, которые лежат в объектах ref
  let textValue = newPostElement.current.value;
  let imgValue = newImageElement.current.value;
  addNewInform(nameValue, textValue, imgValue);
};




const AddPost = ({ addPost, newPostInfo, addNewInform }) => {

  const {newPostName, newPostText, newPostImage} = newPostInfo
  return (
    <div className={classes.person__posts__wrapper}>
      {/*класс присваивается из стилевого модуля css достается из объекта, в который попадает */}{" "}
      {/*Обертка для блоков постов постов*/}
      <h2 className={classes.post__header}>Add post</h2>
      <div className={classes.post__input__wrapper}>
        <input ref={newImageElement} type="file" name="" id=""  onChange={() => {valueCall(addNewInform)}} value={newPostImage}/>
        {/*припопадании данной переменной, которая содержит объект с ключем current в атрибут ref, а данный атрибут производит параметризацию dom объекта, current принимает в себя значение объекта */}
        <br />
        <input ref={newNameElement} type="text" placeholder="Введите имя" onChange={() => {valueCall(addNewInform)}} value={newPostName} />{/*теперь это значение ключа из state */}
        <br />
        <textarea
          ref={newPostElement} //в данном моменте в атрибут попадает объект, и в этот объектпопадает ссылка на готовый dom объект
          className={classes.post__input}
          placeholder="write post"
          onChange={() => {
            valueCall(addNewInform);
          }}
          value={newPostText} //!ВАЖНО: я не могу изменить значение данного элемента через newNameElement в функции addPost потому, что после присваиване элементу dom значения производится при обработке данного компонента и посредством передачи значения пропсами через state, при этом, даже если попытаться изменить его через 
        />
        <br />
        <button
          onClick={addPost}
          className={classes.add__post__button}
        >{}
          add post
        </button>
      </div>
    </div>
  );
};

export default AddPost;

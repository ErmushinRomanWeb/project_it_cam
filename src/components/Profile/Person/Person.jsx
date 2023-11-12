import React from "react";
import classes from "./Person.module.css"; //мы импортировали информацию в форме объекта, для того, чтобы потом присвоить класс, который является строкой внутри объекта

const Person = () => {

  const hello = (a, b) => {
    return a + b
  }


  const hello2 = (hello) => {//! в данной переменной находится ссылка на функцию hello!!!
    const result = hello(2, 2) 
    return result
  }
  const variable = hello2(hello)


  return (
<div className={classes.person__wrapper}>
        <div>
          <img
            className={classes.person__image}
            src="https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826"
          />
        </div>
        <div className={classes.person__data}>
          <h3 className={classes.person__name}>Ermushin Roman</h3>
          <p onClick={'hello'}>Date of birth: 20 juli</p>
          <p>City: Severodvinsk</p>
          <p>Education: SAFU</p>
          <p>Web site: Http://Rommmmannnnn</p>
        </div>
      </div>
  );
};
export default Person;

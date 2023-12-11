import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createGlobalStyle } from "styled-components";
import {
  state,
  addPost,
  addNewInform,
  newMessageValueChanger,
  addNewMessage,
  subscriber,
} from "./redux/state";
//!index.js стал нашей точкой входа, то есть местом, где происходит вызов функции render и по сути, создания всего dom.

//!ВАЖНО: МЫ СЮДА МЫ ПЕРЕДАЛИ ДАННЫЕ ИЗ BLL И ФУКНЦИЮ, КОТОРАЯ ЗАПУСКАЕТ UI И ВОЗВРАЩАЕТ ОГРОМНЫЙ ОБЪЕКТ ИЗ КОТОРОГО ПОТОМ ПОЛУЧАЕТСЯ ВЕСЬ DOM

//*--------------------------------------------------------ТОЧКА ВХОДА--------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById("root")); // в переменную кладу результат поиска dom объекта, то есть, в переменной лежит ссылка на dom объект, сформированный на основе одного тега. когда v8 будет чи тать код, то dom уже будет готово, так, что v8 просто будет искать готовый объект.
console.log(object);
const rerender = (state) => {
  //в данный параметр является ссылкой на обеъкт state/создали объект функции, к которому будет обращатся v8
  root.render(
    //тут я использую метод dom объкта, который рендерит в dom объект, ссылка на который лежит в root, результат выполнения функции-компонента App, то есть объкты, на основе которых будет сформирован dom
    <React.StrictMode>
      {/* <App  posts={posts} dialogsData={dialogsData} messageData={messageData}/> */}
      <App
        state={state}
        addPost={addPost}
        addNewInform={addNewInform}
        newMessageValueChanger={newMessageValueChanger}
        addNewMessage={addNewMessage}
      />
      {/*помни, что ты прокинул в props ссылку на ячейку памяти, в которой хранится сам функциональный объект с логикой, а не рзультат, в   */}
    </React.StrictMode>
  );
};

rerender(state); //Вызвали функциональный объект, v8 передали импортированную ссылку на оъект state
console.log(
  <App
    state={state}
    addPost={addPost}
    addNewInform={addNewInform}
    newMessageValueChanger={newMessageValueChanger}
    addNewMessage={addNewMessage}
  />
);
subscriber(rerender); //вызвали функциональный объект subscriber через импортированную ссылку, аргументом передали ссылку на функциональный объект rerender =>state
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

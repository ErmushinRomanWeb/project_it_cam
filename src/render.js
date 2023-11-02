import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost } from './redux/state';
//! помню, что ui компоненты - это просто логика отрисовки, данные в них поступают из bll(state/redux)
//! данный модуль является аккамулятором для всех данных, которые вернулись из ui компонентов

const root = ReactDOM.createRoot(document.getElementById('root'));// в переменную кладу результат поиска dom объекта, то есть, в переменной лежит ссылка на dom объект, сформированный на основе одного тега. когда v8 будет читать код, то dom уже будет готово, так, что v8 просто будет искать готовый объект.

const rerender = (state) => {//
  root.render(//тут я использую метод dom объкта, который рендерит в dom объект, ссылка на который лежит в root, результат выполнения функции-компонента App, то есть объкты, на основе которых будет сформирован dom 
    <React.StrictMode>
      {/* <App  posts={posts} dialogsData={dialogsData} messageData={messageData}/> */}
      <App  state={state} addPost={addPost}/>{/*помни, что ты прокинул в props ссылку на ячейку памяти, в которой хранится логика, а не рзультат  */}
    </React.StrictMode>
  );
}


export default rerender
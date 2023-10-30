import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { addPost, state } from './redux/state';//импорт объекта с данными


const StyledGlobal = createGlobalStyle`
  * {
    border: 1px solid red;
  }
`

//*--------------------------------------------------------ТОЧКА ВХОДА--------------------------------------------------------
console.log(state);
const root = ReactDOM.createRoot(document.getElementById('root'));// в переменную кладу результат поиска dom объекта, то есть, в переменной лежит ссылка на dom объект, сформированный на основе одного тега. когда v8 будет читать код, то dom уже будет готово, так, что v8 просто будет искать готовый объект.

export const rerender = () => {
  root.render(//тут я использую метод dom объкта, который рендерит в 
    <React.StrictMode>
      <StyledGlobal/>
      {/* <App  posts={posts} dialogsData={dialogsData} messageData={messageData}/> */}
      <App  state={state} addPost={addPost}/>
    </React.StrictMode>
  );
}

rerender()


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

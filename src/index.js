import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import rerender from './render';
import { state } from './redux/state';

//!index.js стал нашей точкой входа, то есть местом, где происходит вызов функции render и по сути, создания всего dom.

//!ВАЖНО: МЫ СЮДА МЫ ПЕРЕДАЛИ ДАННЫЕ ИЗ BLL И ФУКНЦИЮ, КОТОРАЯ ЗАПУСКАЕТ UI И ВОЗВРАЩАЕТ ОГРОМНЫЙ ОБЪЕКТ ИЗ КОТОРОГО ПОТОМ ПОЛУЧАЕТСЯ ВЕСЬ DOM

const StyledGlobal = createGlobalStyle`
  * {
    border: 1px solid red;
  }
`

//*--------------------------------------------------------ТОЧКА ВХОДА--------------------------------------------------------
rerender(state)//! то есть, вызвал функцию, которая объявляна в render.js, и в нее прередал объект, и callback функцию в аргументы. Таким образом, параметрам присваивается ссылки на объекты.

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

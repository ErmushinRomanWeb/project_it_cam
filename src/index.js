import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createGlobalStyle} from 'styled-components';
import { BrowserRouter } from 'react-router-dom';


const StyledGlobal = createGlobalStyle`
  * {
    /* border: 1px solid red; */
  }
`
//!--------------------------------МАССИВ ПОСТОВ------------------------------------------------------------------------
const posts = [//!пока данные лежать сдесь, то есть это точка, где v8 будет их генерировать
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


//!------------------------------------------МАССИВ ДИАЛОГОВ--------------------------------------------------------
const dialogsData = [
  {
    id: 1,
    name: "Roman",
    imageUrl:
      "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif",
  },
  { id: 2, name: "Pavel", imageUrl: "https://i.gifer.com/CoFM.gif" },
  {
    id: 3,
    name: "Vlada",
    imageUrl:
      "https://media.tenor.com/jXpKV1MVgdMAAAAM/the-fate-of-the-furious-the-fate-of-the-furious-gi-fs.gif",
  },
  {
    id: 4,
    name: "Nikita",
    imageUrl: "https://i.gifer.com/embedded/download/12cM.gif",
  },
  {
    id: 5,
    name: "Nikita",
    imageUrl: "https://i.gifer.com/embedded/download/12cM.gif",
  },
];


//!------------------------------------------МАССИВ МЕСЕДЖЕЙ--------------------------------------------------------
const messageData = [
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
  {
    id: 4,
    name: "Nikita",
    message: "А я ефрейтор",
    imageUrl: "https://i.gifer.com/embedded/download/12cM.gif",
  },
];

//*--------------------------------------------------------ТОЧКА ВХОДА--------------------------------------------------------

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledGlobal/>
    <App  posts={posts} dialogsData={dialogsData} messageData={messageData}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

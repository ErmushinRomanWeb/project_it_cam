import React from "react"; //импортируем объект из библиотеки react, которая уже лежит у нас в папке
import classes from "./Messager.module.css";
import { NavLink } from "react-router-dom";
import Dialogs from "./Dialog/Dialog";
import Message from "./Message/Message";

const image1 =
  "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif";
const image2 = "https://i.gifer.com/CoFM.gif";
const image3 =
  "https://media.tenor.com/jXpKV1MVgdMAAAAM/the-fate-of-the-furious-the-fate-of-the-furious-gi-fs.gif";
const image4 = "https://i.gifer.com/embedded/download/12cM.gif";

let dialogsData = [
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
//!------------------------------------------------------------------------------
let messageData = [
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
//*========================================Диалоги================================================
let dialogsElements = dialogsData.map((el) => {
  //!в данной переменной будет новый массив
  return <Dialogs id={el.id} name={el.name} imageUrl={el.imageUrl} />; //!то есть, я выделил из массива каждый элемент и на основании информации, хранящейся в ключах объектов, которые являеются элементами массива, я создал новый массив, состоящий из компонентов
});
//*================================================================================================
let messagesElements = messageData.map((mes) => (
  <Message
    id={mes.id}
    name={mes.name}
    imageUrl={mes.imageUrl}
    message={mes.message}
  />
));

const Messager = (props) => {
  return (
    <section>
      <h2>Dialogs</h2>
      <div className={classes.messager__wrapper}>
        <div className={classes.dialogs}>
          <h3 className={classes.dialogs__heading}>dialogs</h3>
          <div className={classes.user__block}>{dialogsElements}</div>
        </div>
        <div>
          <div className={classes.messages}>
            <h3 className={classes.messages__heading}>messages</h3>
            <div className={classes.message__block}>
              {messagesElements}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messager;

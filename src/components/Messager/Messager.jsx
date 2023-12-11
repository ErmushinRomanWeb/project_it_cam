import React from "react"; //импортируем объект из библиотеки react, которая уже лежит у нас в папке
import classes from "./Messager.module.css";
import { NavLink } from "react-router-dom";
import Dialogs from "./Dialog/Dialog";
import Message from "./Message/Message";

// Developer: Inspect Editor Tokens and Scopes

//*========================================Диалоги================================================

const textRef = React.createRef();

console.log(textRef);

const addMessageText = (newMessageValueChanger) => {
  let newText = textRef.current.value;
  newMessageValueChanger(newText);
};

const Messager = ({
  dialogsData,
  messageData,
  newMessageTextValue,
  newMessageValueChanger,
  addNewMessage,
}) => {
  let dialogsElements = dialogsData.map((el) => {
    //!в данной переменной будет новый массив
    return <Dialogs id={el.id} name={el.name} imageUrl={el.imageUrl} />; //!то есть, я выделил из массива каждый элемент и на основании информации, хранящейся в ключах объектов, которые являеются элементами массива, я создал новый массив, состоящий из компонентов, в которые пропсами я передал информацию
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
            <div className={classes.message__block}>{messagesElements}</div>
            <div className="inputBlock">
              <textarea
                value={newMessageTextValue}
                onChange={() => addMessageText(newMessageValueChanger)}
                ref={textRef}
                name=""
                id=""
                cols="30"
                rows="10"
              ></textarea>
              <button onClick={addNewMessage}>Отправить</button>{/*сюда я прокинул ссылку на функциональный объект из state   */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messager;

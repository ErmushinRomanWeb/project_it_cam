import React from "react";
import Header from "./components/Header/Header";
import Nav from "./components/NavBar/NavBar";
import Profile from "./components/Profile/Profile";
import Messager from "./components/Messager/Messager.jsx";
import classes from "./App.module.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import Settings from "./components/Settings/Settings";

function App({ state, addPost, addNewInform, newMessageValueChanger, addNewMessage }) {// в в созданный объект props попадают ключи - название атрибута при вызове, и значения
  //!ТО ЕСТЬ, ТУТ МЫ ПРОИЗВЕЛИ ВЫРАЖЕНИЕ, ПРИСВАИВАНИЯ ПЕРЕМЕННЫМ ЗНАЧЕНИЯ, И В ПЕРЕМЕННОЙ STATE ОКАЗАЛАСЬ ССЫЛКА НА ОБЪЕКТ В ОПЕРАТИВНОЙ ПАМЯТИ, КОТОРЫЙ СОДЕРЖИТ ССЫЛКИ НА ОБЪЕКТЫ ИЗ STATE.JS, А В ADDPOST НАХОДИТСЯ ССЫЛКА НА
  //!ВАЖНО:деструктуризация в пропсах вытаскивает из объекта props ключи и кладет ссылку на объект в параметр!!!
  const {
    profilePage: { posts, newPostInfo},//то есть, теперь данные переменные - это ссылки на ключи большого объекта
    messgePage: { dialogsData, messageData, newMessageTextValue}, //тут мы видим деструктуризацию объекта, то есть, призваеине значений ключей объкта переменным
    friendsBlock: { friends },
  } = state;

  return (
    <BrowserRouter>
      {/*это просто компонент-функция, в которой прописано, чт о */}
      <div className={`${classes.app__wrapper} ${classes.center}`}>
        {/*Так, как в итоге в className должна попасть строка, то мы можем использовать строковый литерал, нельзя записать 2 выражения через запятую потому, что webpack попытается присвоить модулю сразу 2 выражения js, а это невозможно  */}
        <Header />
        <Nav friends={friends} />
        <div className={classes.main__wrapper}>
          <Routes>
            <Route
              path="/Messager/*"
              element={
                <Messager newMessageTextValue={newMessageTextValue} messageData={messageData} dialogsData={dialogsData} newMessageValueChanger={newMessageValueChanger} addNewMessage={addNewMessage}/>
              }
            />
            {/*Это  просто функция, которая импортированна из библиотеки*/}
            <Route
              path="/"
              element={<Profile newPostInfo={newPostInfo} posts={posts} addPost={addPost} addNewInform={addNewInform}/>}
            />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music />} />
            <Route path="/Settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;

//помню, что строчные элементы выстраиваются в одну строку, а блочные выстраиваются друг под другом, и начинаются с новой строки.

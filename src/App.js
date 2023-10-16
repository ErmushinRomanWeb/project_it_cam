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
import UserPage from "./components/UserPage/UserPage";

// const users ={
//   Roman: {
//     Name:'Roman',
//     LastName: 'Ermushin',
//     image: ''
//   },
// }

function App() {
  console.log(Route);
  return (
    <BrowserRouter>
      <div className={`${classes.app__wrapper} ${classes.center}`}>
        {/*Так, как в итоге в className должна попасть строка, то мы можем использовать строковый литерал, нельзя записать 2 выражения через запятую потому, что webpack попытается присвоить модулю сразу 2 выражения js, а это невозможно  */}
        <Header />
        <Nav />
        <div className={classes.main__wrapper}>
          <Routes>
            <Route path="/Messager/*" element={<Messager />} />{/*Это  просто функция, которая импортированна из библиотеки*/}
            <Route path="/" element={<Profile />} />
            <Route path="/News" element={<News />} />
            <Route path="/Music" element={<Music/>} />
            <Route path="/Settings" element={<Settings/>} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

//помню, что строчные элементы выстраиваются в одну строку, а блочные выстраиваются друг под другом, и начинаются с новой строки.

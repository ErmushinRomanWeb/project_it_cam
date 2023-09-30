import React from "react";
import classes from "./App.module.css"
import Header from "./components/Header";
import Nav from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className={`${classes.app__wrapper} ${classes.center}`}>{/*Так, как в итоге в className должна попасть строка, то мы можем использовать строковый литерал, нельзя записать 2 выражения через запятую потому, что webpack попытается присвоить модулю сразу 2 выражения js, а это невозможно  */}
      <Header />
      <Nav />
      <Profile/>
    </div>
  );
}

export default App;

//помню, что строчные элементы выстраиваются в одну строку, а блочные выстраиваются друг под другом, и начинаются с новой строки.

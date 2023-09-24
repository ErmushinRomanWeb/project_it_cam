import React from "react";
import "./App.css";
import Header from "./components/Header";
import Nav from "./components/NavBar";
import Profile from "./components/Profile";

function App() {
  return (
    <div className="app-wrapper center">
      <Header />
      <Nav />
      <Profile/>
    </div>
  );
}

export default App;

//помню, что строчные элементы выстраиваются в одну строку, а блочные выстраиваются друг под другом, и начинаются с новой строки.

import React from "react"; //импортируем объект из библиотеки react, которая уже лежит у нас в папке
import classes from "./Messager.module.css";
import { NavLink } from "react-router-dom";
import Dialogs from "./Dialog/Dialog";

const image1 = "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif"
const image2 = "https://i.gifer.com/CoFM.gif"
const image3 = "https://media.tenor.com/jXpKV1MVgdMAAAAM/the-fate-of-the-furious-the-fate-of-the-furious-gi-fs.gif"
const image4 = "https://i.gifer.com/embedded/download/12cM.gif"

const Messager = (props) => {
  return (
    <section>
      <h2>Dialogs</h2>
      <div className={classes.messager__wrapper}>
        <div className={classes.dialogs}>
          <h3 className={classes.dialogs__heading}>dialogs</h3>
          <div className={classes.user__block}>
            <Dialogs id={1} name={"Roman"} text={"Привет, петухи и прекрасная дама"} imageUrl={image1} />
            <Dialogs id={2} name={"Pavel"} text={"Я Паша, я ебашу"} imageUrl={image2} />
            <Dialogs id={3} name={"Vlada"} text={"Ты офигееееееел!?"} imageUrl={image3} />
            <Dialogs id={4} name={"Nikita"} text={"А я ефрейтор"} imageUrl={image4} />
          </div>
        </div>
        <div>
          <div className={classes.messages}>
            <h3 className={classes.messages__heading}>messages</h3>
            <div className={classes.message__block}>
              <div className={classes.message__wrapper}>
                <div className={classes.message__img}></div>
                <div className={classes.message__information__block}>
                  <div className={classes.message__user__name}>NAME</div>
                  <div className={classes.message__text}>TEXT</div>
                </div>
              </div>
              <div className={classes.message__wrapper}>
                <div className={classes.message__img}></div>
                <div className={classes.message__information__block}>
                  <div className={classes.message__user__name}>NAME</div>
                  <div className={classes.message__text}>TEXT</div>
                </div>
              </div>
              <div className={classes.message__wrapper}>
                <div className={classes.message__img}></div>
                <div className={classes.message__information__block}>
                  <div className={classes.message__user__name}>NAME</div>
                  <div className={classes.message__text}>TEXT</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messager;

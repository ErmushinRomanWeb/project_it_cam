import React from "react";
import classes from './Header.module.css';// эта формулировка означает, что мы импортируем classes, который является объктом 

const Header = () => {
    return (
        <header className={classes.header}> {/*помню, что при использовании внутри jsx js нужно использовать фигурные скобки, в данном примере мы обращаемся к объекту и достаем из него ключи, которые являются нашими стилями */}
        <img 
          className={classes.header__img}
          src="
          https://developers.sber.ru/studio/generated-images/cd/c7/b8/cdc7b8b687354a21ac8600aab0df2739_fuse_10004354_0.jpg"
        ></img>
      </header>
        )
}
export default Header

//!ТЕЗИС: за каждый кусок отвечает определенная компонента, орпеделенный файл
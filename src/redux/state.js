import { createContext } from "react";
import { rerender } from "..";

export const state = {
  profilePage: {
    //!--------------------------------МАССИВ ПОСТОВ------------------------------------------------------------------------
    posts: [
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
    ],
  },

  messgePage: {
    //!------------------------------------------МАССИВ ДИАЛОГОВ--------------------------------------------------------
    dialogsData: [
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
    ],

    //!------------------------------------------МАССИВ МЕСЕДЖЕЙ--------------------------------------------------------
    messageData: [
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
    ],
  },

  friendsBlock: {
    friends: [
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
    ],
  },
};

export const addPost = (newImg ,newName, newMessage) => {
  debugger//мы объявили фукнцию, которая принимает аргументом строку
  //цель - добавить в массив с постами новый элемент массива, который помтом, на основе которого в новый промапеный массив будет добавлятся новый элемент массива.
  let newPost = {//объявили переменную, в которую поместится объект форма, в ключ message которого попадет строка, из аргумента.
    id: 5,
    name: newName,
    message: newMessage,
    imageUrl:newImg
  };
  debugger
  state.profilePage.posts.push(newPost)//в результате функция всавит в исходный массив переменную newPost, которая содержит в себе ссылку на объект, то еть, в результате выполнения этого кода в массиве будут появлятся новые элементы.
  rerender()//так как у нас в проекте рендер осуществляется только в index.js, то мы оборачиваем 
};


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
        message: "Я паша, меня ебашит ",
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
    newPostInfo: {
      newPostName: "",
      newPostText: "",
      newPostImage: "",
    },
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
        message: "Привет)",
        imageUrl:
          "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif",
      },
      {
        id: 2,
        name: "Pavel",
        message: "Я Паша",
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
    newMessageTextValue: "",
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


export const addPost = () => {
  let { newPostName, newPostText, newPostImage } =
    state.profilePage.newPostInfo; //браузер объявит 3 переменные, используя операторы е
  //мы объявили фукнцию, которая принимает аргументом строку
  //цель - добавить в массив с постами новый элемент массива, который помтом, на основе которого в новый промапеный массив будет добавлятся новый элемент массива.
  let newPost = {
    //объявили переменную, в которую поместится объект форма, в ключ message которого попадет строка, из аргумента.
    id: 5,
    name: newPostName,
    message: newPostText,
    imageUrl: newPostImage,
  };
  state.profilePage.posts.push(newPost); //в результате функция всавит в исходный массив переменную newPost, которая содержит в себе ссылку на объект, то еть, в результате выполнения этого кода в массиве будут появлятся новые элементы.
  rerenderDom(state); //!так как мы должны соблюдать принциб single responsebility, то я могу возложить на файл, который является держателем объекта state положить ссылку на него в параметр
  addNewInform("", "", ""); //аргументами в данную функцию передаю 3 пустые строки, и тогда параметры станут ссылками на пустоту
};

export const addNewInform = (nameValue, textValue, imgValue) => {
  state.profilePage.newPostInfo.newPostName = nameValue;
  state.profilePage.newPostInfo.newPostText = textValue;
  state.profilePage.newPostInfo.newPostImage = imgValue;

  rerenderDom(state);
};

export const newMessageValueChanger = (newMesageValue) => {
  state.messgePage.newMessageTextValue = newMesageValue;
  rerenderDom(state);
  console.log(state.messgePage.newMessageTextValue);
};

export const addNewMessage = () => {
  let NewMessageText = state.messgePage.newMessageTextValue;

  let NewMessageElement = {
    id: 1,
    name: "Roman",
    message: NewMessageText,
    imageUrl:
      "https://pa1.aminoapps.com/6681/9de778edbb959c86d7defd3013ff00c25ba9ebaa_00.gif",
  };

  state.messgePage.messageData.push(NewMessageElement);
rerenderDom(state)
  newMessageValueChanger('')
};

let rerenderDom //!переменная, которая станет функцией ререндера


export const subscriber = (observer) => {//вызов данного объекта из index.js / принял ссылку на функциональный объект rerender
  rerenderDom = observer//сделали пустую переменную ссылкой на функциональный объект rerender
}

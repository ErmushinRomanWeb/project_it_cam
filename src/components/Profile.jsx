import React from "react";

const Profile = () => {
  return (
    <main className="main-content">
      <div className="main-content__wrapper">
        <img
          className="main-content__img"
          src="https://as2.ftcdn.net/v2/jpg/02/25/71/19/1000_F_225711927_wNBsSAGlIf6ZqTME9Obgh1v5HKVUplqc.jpg"
        ></img>
      </div>
      <div className="person-wrapper">
        <div>
          <img
            className="person-image"
            src="https://img.freepik.com/premium-vector/yeti-face-square-monster-avatar-cartoon-portrait_80590-17954.jpg?w=826"
          />
        </div>
        <div className="person-data">
          <h3 className="person-name">Ermushin Roman</h3>
          <p>Date of birth: 20 juli</p>
          <p>City: Severodvinsk</p>
          <p>Education: SAFU</p>
          <p>Web site: Http://Rommmmannnnn</p>
        </div>
      </div>
      <div className="person-posts-wrapper">
        {" "}
        {/*Обертка для блоков постов постов*/}
        <h2 className="post-header">My posts</h2>
        <div className="post-input-wrapper">
          <textarea className="post-input" placeholder="write post" />
          <br />
          <button className="add-post-button">add post</button>
        </div>
      </div>
    </main>
  );
};
export default Profile;

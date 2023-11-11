import React from "react";
import Friend from "./Friend/Friend";

const Friends = ({ friends }) => {
  const friendsList = friends.map((friend) => {
        return <Friend friend={friend}/>
  });
  return (
    <div>
      <h3>Friends</h3>
      <div>
        <div>{friendsList}</div>
      </div>
    </div>
  );
};

export default Friends;

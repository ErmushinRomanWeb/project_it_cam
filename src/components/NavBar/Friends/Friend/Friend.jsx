import React from "react";

const Friend = ({friend}) => {
    return (
        <div className="friend__wrapper">
            <div style={{backgroundImage: `url(${friend.imageUrl})`, width: `50px`, height: `50px`}}></div>
            <div>{friend.name}</div>
        </div>
    )
}

export default Friend
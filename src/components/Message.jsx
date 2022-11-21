import React, { useContext } from "react";
// import { AuthContext } from "../context/AuthContext";
// import { ChatContext } from "../context/ChatContext";

const Message = ({ message }) => {
  // const {currentUser} = useContext(AuthContext)
  // const {data} = useContext(ChatContext)

  console.log(message);
  return (
    <div className="message owner">
      <div className="messageInfo">
        <img src="../images/person5.jpeg" alt="" />

        <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello</p>
        <img src="../images/person5.jpeg" alt="" />
      </div>
    </div>
  );
};

export default Message;

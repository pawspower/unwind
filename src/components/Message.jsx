import React, { useContext, useEffect, useRef } from "react";
import { AuthContext } from "../context/AuthContext";
import { ChatContext } from "../context/ChatContext";
import bin from "../img/bin.png";

const Message = ({ message, deleteMessage }) => {
  const { currentUser } = useContext(AuthContext);
  const { data } = useContext(ChatContext);

  const ref = useRef();

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  }, [message]);

  const gif = message.text.startsWith("http") && message.text.endsWith(".gif");

  return (
    <div
      ref={ref}
      className={`message ${message.senderId === currentUser.uid && "owner"}`}
    >
      <div className="messageInfo">
        <img
          src={
            message.senderId === currentUser.uid
              ? currentUser.photoURL
              : data.user.photoURL
          }
          alt=""
        />
        <span>{new Date(message.date.toDate()).toLocaleString()}</span>
      </div>
      <div className="messageContent">
        <p>
          {gif ? (
            <a href={message.text} target="_blank">
              {message.text}
            </a>
          ) : (
            <span>{message.text}</span>
          )}
        </p>
        {gif && <img src={message.text} />}
        {message.img && <img src={message.img} alt="" />}
      </div>
      {message.senderId == currentUser.uid && (
        <a className= "delete" href="#" onClick={deleteMessage}>
        {/* <label>
          <img src={bin} alt="" />
        </label> */}
          Delete
        </a>
      )}
    </div>
  );
};

export default Message;

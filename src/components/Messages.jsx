import { arrayRemove, doc, onSnapshot, updateDoc } from "firebase/firestore";
import React, { useContext, useEffect, useState } from "react";
import { ChatContext } from "../context/ChatContext";
import { db } from "../firebase";
import Message from "./Message";

const Messages = () => {
  const [messages, setMessages] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db, "chats", data.chatId), (doc) => {
      doc.exists() && setMessages(doc.data().messages);
    });

    return () => {
      unSub();
    };
  }, [data.chatId]);

  console.log(messages);

  const deleteMessage = (m) => {
    updateDoc(doc(db, "chats", data.chatId), {
      messages: arrayRemove(m),
    });
  };

  return (
    <div className="messages">
      {messages.map((m) => (
        <Message
          message={m}
          key={m.id}
          deleteMessage={() => deleteMessage(m)}
        />
      ))}
    </div>
  );
};

export default Messages;

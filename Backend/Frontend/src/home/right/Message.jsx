import React from "react";
// import decryptMessage from "../../context/decryptMessage.js";

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("ChatApp"));
  const itsMe = message.senderId === authUser.user._id;
  // const {decryptedMessage}=decryptMessage(message.encryptedMessage);

  const chatName = itsMe ? " chat-end" : "chat-start";
  const chatColor = itsMe ? "chat-bubble-accent" : "chat-bubble-primary";

  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div>
      <div className="p-4">
        <div className={`chat ${chatName}`}>
          <div className={`chat-bubble text-white ${chatColor}`}>
            {message.message}
          </div>
          <div className="chat-footer">{formattedTime}</div>
        </div>
      </div>
    </div>
  );
}

export default Message;
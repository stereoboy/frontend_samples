import React from "react";

const MessageContainer = ({ messageList, user }) => {
  return (
    <div>
      {messageList.map((message, index) => {
        return (
          <div>
            {message.user.name === "system" ? (
              <div>
                <p>system: {message.chat}</p>
              </div>
            ) : message?.user?.name === user?.name ? (
              <div>
                <div>me: {message.chat}</div>
              </div>
            ) : (
              <div>
                <div>{message?.user?.name}: {message.chat}</div>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default MessageContainer;
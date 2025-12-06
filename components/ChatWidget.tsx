"use client";
import React from "react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import { Message } from "./chat/types";

const ChatWidget = () => {
  const onClose = () => {};
  const messages: Message[] = [
    { id: 1, text: "how are you?", sender: "user", type: "rating" }, //an example
    {
      id: 2,
      text: "I am fine, how can I help you?",
      sender: "bot",
      type: "rating",
    }, //an example
  ];
  return (
    <div>
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} />
    </div>
  );
};

export default ChatWidget;

"use client";
import React from "react";
import ChatHeader from "./chat/ChatHeader";

const ChatWidget = () => {
  const onClose = () => {};
  return (
    <div>
      <ChatHeader onClose={onClose} />
    </div>
  );
};

export default ChatWidget;

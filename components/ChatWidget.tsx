"use client";
import React, { useState } from "react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import { ChatInput } from "./chat/ChatInput";
import { Message } from "./chat/types";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "how are you?", sender: "user", type: "rating" }, //an example
    {
      id: 2,
      text: "I am fine, how can I help you?",
      sender: "bot",
      type: "rating",
    }, //an example
  ]);
  //open close chat
  const toggleChat = () => setIsOpen(!isOpen);
  const handleSend = (text: string) => {
    const newUserMessage: Message = {
      id: Date.now(),
      text: text,
      sender: "user",
      type: "text",
    };
    setMessages((prev) => [...prev, newUserMessage]);
    //here should add bot answer in the future
  };
  const onClose = () => {};

  const onSend = () => {};
  return (
    <div className="fixed bottom-6 z-50 flex flex-col items-end font-sans">
      <ChatHeader onClose={onClose} />
      <ChatMessages messages={messages} />
      <ChatInput onSend={onSend} />
    </div>
  );
};

export default ChatWidget;

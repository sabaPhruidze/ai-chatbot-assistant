"use client";
import React, { useState } from "react";
import ChatHeader from "./chat/ChatHeader";
import ChatMessages from "./chat/ChatMessages";
import { ChatInput } from "./chat/ChatInput";
import { Message } from "./chat/types";
import { MessageCircle, X } from "lucide-react";

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "how are you?", sender: "user", type: "rating" }, //an example
    {
      id: 2,
      text: "I am fine, how can I help you?",
      sender: "bot",
      type: "text",
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

  return (
    <div className="fixed bottom-[30px] right-[30px] z-50 flex flex-col items-end font-sans">
      {/* if isopen  */}
      {isOpen && (
        <div className="w-[360px] h-[550px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden mb-4 border border-gray-200 animate-in fade-in slide-in-from-bottom-10 duration-300">
          <ChatHeader onClose={toggleChat} />
          <ChatMessages messages={messages} />
          <ChatInput onSend={handleSend} />
        </div>
      )}
      {/* open/close button */}

      <button
        onClick={toggleChat}
        className="relative h-16 w-16 rounded-full shadow-2xl overflow-hidden border-4 border-white cursor-pointer transition-transform duration-300 hover:scale-110 bg-transparent"
      >
        <img
          src="./icon.png"
          alt="Main image"
          className="absolute inset-0 w-full h-full object-contain scale-150"
        />
      </button>
    </div>
  );
};

export default ChatWidget;

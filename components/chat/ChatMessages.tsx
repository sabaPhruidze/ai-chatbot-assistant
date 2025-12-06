import { Message } from "./types";
import { useEffect, useRef } from "react";
import { Star } from "lucide-react";

const ChatMessages = ({ messages }: { messages: Message[] }) => {
  //hidden element at last place
  const endRef = useRef<HTMLDivElement>(null);
  //on new message scrolls down
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);
  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8f9fa]">
      {/*date */}
      <div className="text-center text-xs text-gray-400 my-2">today</div>
      {/* messages written down here */}
      {messages.map((msg) => (
        <div
          key={msg.id}
          //if user right, if bot left
          className={`flex ${
            msg.sender === "user" ? "justify-end" : "justify-start"
          }`}
        >
          {/* A. normal text */}
          {msg.type === "text" ? (
            <div
              className={`max-w-[80%] p-3 text-sm shadow-sm 
                ${
                  msg.sender === "user"
                    ? "bg-[#4B0082] text-white rounded-2xl rounded-br-none" // user style
                    : "bg-white text-gray-800 border border-gray-200 rounded-2xl rounded-bl none"
                }`}
            >
              {msg.text}
            </div>
          ) : (
            // B. raiting star
            <div>
              <div>
                <p>{msg.text}</p>
                <Star key={msg.id} size={22} />
              </div>
              <button>rate</button>
            </div>
          )}
        </div>
      ))}
      <div ref={endRef} />
    </div>
  );
};

export default ChatMessages;

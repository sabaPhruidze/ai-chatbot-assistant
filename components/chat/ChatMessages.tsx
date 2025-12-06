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
    <div className="">
      {messages.map((msg) => (
        <div key={msg.id}>
          {/* A. normal text */}
          {msg.type === "text" ? (
            <div>{msg.text}</div>
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

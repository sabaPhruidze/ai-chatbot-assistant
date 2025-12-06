import React, { useState } from "react";
import { Paperclip, Send, Mic } from "lucide-react";

interface InputProps {
  onSend: (text: string) => void;
}

export const ChatInput = ({ onSend }: InputProps) => {
  const [text, setText] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    //it will not reload by this
    e.preventDefault();
    if (!text.trim()) return;
    onSend(text); // the text will be send if anything is written
    setText(""); // text will be ready to rewrite (it will be empty for now)
  };

  return (
    <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2 rounded-b-2xl">
      {/* paperClip */}
      <button
        type="button"
        className="p-2 text-gray-400 hover:text-[#E4007F] transition cursor-pointer"
      >
        <Paperclip size={20} />
      </button>
      {/* form */}
      <form
        onSubmit={handleSubmit}
        className="flex-1 flex gap-2 items-center bg-gray-100 rounded-full px-4 py-2 border border-transparent focus-within:border-[#4B0082]/30 transtion-colors"
      >
        <input
          type="text"
          placeholder="write your question..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="flex-1 bg-transparent text-sm focus:outline-none text-gray-700 placeholder-gray-400"
        />
      </form>
      {/* conditional button (only if text is written even one) if not than show mic */}
      {text.trim() ? (
        <button
          type="submit"
          className="bg=[#4B0082] text-gray-400 p-2 rounded-full hover:bg-purple-900 transition shadow-sm cursor-pointer"
        >
          <Send size={20} />
        </button>
      ) : (
        <button
          type="submit"
          className="text-gray-400 p-1 hover:text-[#4B0082] transition cursor-pointer"
        >
          <Mic size={20} />
        </button>
      )}
    </div>
  );
};

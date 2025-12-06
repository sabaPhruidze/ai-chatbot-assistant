import React, { useState } from "react";
import { Paperclip } from "lucide-react";

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
    <div>
      {/* paperClip */}
      <button>
        <Paperclip size={20} />
      </button>
      {/* form */}
      <form>
        <input type="text" placeholder="write your question..." />
      </form>
      {/* conditional button (only if text is written even one) if not than show mic */}
      {}
    </div>
  );
};

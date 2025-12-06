import React from "react";
import { Paperclip } from "lucide-react";

interface InputProps {
  onSend: (text: string) => void;
}

export const ChatInput = ({ onSend }: InputProps) => {
  return (
    <div>
      {/* paperClip */}
      <button>
        <Paperclip size={20} />
      </button>
    </div>
  );
};

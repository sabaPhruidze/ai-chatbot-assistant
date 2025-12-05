import { X, Phone } from "lucide-react";
interface HeaderProps {
  onClose: () => void; //when x is clicked, for chat closing
}

const ChatHeader = ({ onClose }: HeaderProps) => {
  return (
    <div className="bg-mse-purple p-4 flex justify-between items-center shadow-md text-white rounded-t-2xl">
      {/* logo and info */}
      <div className="flex items-center gap-3">
        <img
          src="./icon.png"
          className="w-13 h-13 bg-white rounded-full flex items-center justify-center border-2 border-mse-magenta relative"
        />

        <div>
          <h3 className="font-bold text-sm tracking-wide">MSE ASSISTANT</h3>
          <p className="text-[11px] opacity-80">Always Active</p>
        </div>
      </div>

      {/* buttons*/}
      <div className="flex gap-2 items-center">
        <button
          className="bg-mse-green hover:bg-green-600 p-2 rounded-full transition shadow-lg animate-pulse"
          title="Voice Call"
        >
          <Phone size={18} />
        </button>

        <button
          onClick={onClose}
          className="text-gray-300 hover:text-white p-1 transition"
        >
          <X size={24} />
        </button>
      </div>
    </div>
  );
};

export default ChatHeader;

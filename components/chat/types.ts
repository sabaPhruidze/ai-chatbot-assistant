//common props
export interface Message {
    id:number;
    text:string;
    sender:"user"|'bot';
    type?:'text'|'rating';
}

export interface ChatProps {
    isOpen:boolean;
    onToggle: () => void;
}
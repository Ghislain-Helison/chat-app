import React, { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";

interface Message {
  id: number;
  sender: string;
  text: string;
}

interface ChatBottombarProps {
  sendMessage: (newMessage: Message) => void;
}

export function ChatBottombar({ sendMessage }: ChatBottombarProps) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      const newMessage: Message = {
        id: Date.now(),
        sender: "User",
        text: message.trim(),
      };
      sendMessage(newMessage);
      setMessage("");
    }
  };

  return (
    <div className="p-4 flex items-center">
      <Textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 border p-2 mr-2"
      />
      <Button onClick={handleSend} >
        Send
      </Button>
    </div>
  );
}

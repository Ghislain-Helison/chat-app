'use client'

import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatBottombar } from "./ChatBottombar";

interface Message {
  id: number;
  sender: string;
  text: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);

  const sendMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex flex-col h-screen">
        <h3>Chat app</h3>
      <ChatList messages={messages} />
      <ChatBottombar sendMessage={sendMessage} />
    </div>
  );
}

'use client'

import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatBottombar } from "./ChatBottombar";
import { ChatSidebar } from "./ChatSidebar";

interface Message {
  id: number;
  sender: string;
  text: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser, setCurrentUser] = useState<string>("User1");

  const sendMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar setCurrentUser={setCurrentUser} />
      <div className="flex flex-col flex-1">
        <h3>Chat app</h3>
        <ChatList messages={messages} />
        <ChatBottombar
          sendMessage={sendMessage}
          currentUser={currentUser} // Passer le nom d'utilisateur à ChatBottombar
        />
      </div>
    </div>
  );
}

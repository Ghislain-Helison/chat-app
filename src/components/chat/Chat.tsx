'use client'

import React, { useState } from "react";
import { ChatList } from "./ChatList";
import { ChatBottombar } from "./ChatBottombar";
import { ChatSidebar } from "./ChatSidebar";
import { ChatTopbar } from "./ChatTopbar";

interface Message {
  id: number;
  sender: string;
  text: string;
}

export function Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser, setCurrentUser] = useState<string>("User1");//Ajout de state pour l'utilisateur connecte actuel
  const [currentChatUser, setCurrentChatUser] = useState<string>("User1"); // Ajout du state pour l'utilisateur de discussion actuel

  const sendMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
  };

  const handleChatUserChange = (user: string) => {
    setCurrentChatUser(user);
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar setCurrentUser={setCurrentUser} onChatUserChange={handleChatUserChange}/>
      <div className="flex flex-col flex-1">
        <ChatTopbar currentChatUser={currentChatUser} />
        <ChatList messages={messages} />
        <ChatBottombar
          sendMessage={sendMessage}
          currentUser={currentUser} // Passer le nom d'utilisateur à ChatBottombar
          currentChatUser={currentChatUser} // Passer l'utilisateur de discussion actuel
        />
      </div>
    </div>
  );
}

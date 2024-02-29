'use client'

import React, { useState, useEffect } from "react";
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
  const [currentChatUser, setCurrentChatUser] = useState<string>("User2"); // Ajout du state pour l'utilisateur de discussion actuel

  const sendMessage = (newMessage: Message) => {
    setMessages([...messages, newMessage]);
    saveMessages([...messages, newMessage]); // Enregistrer les messages dans le stockage local
  };

  const handleChatUserChange = (user: string) => {
    setCurrentChatUser(user);
  };

  useEffect(() => {
    // Charger l'historique des messages depuis le stockage local lors du montage du composant
    const storedMessages = loadMessages();
    if (storedMessages) {
      setMessages(storedMessages);
    }
  }, []);

  const saveMessages = (messagesToSave: Message[]) => {
    localStorage.setItem("chatMessages", JSON.stringify(messagesToSave));
  };

  const loadMessages = (): Message[] | null => {
    const storedMessages = localStorage.getItem("chatMessages");
    return storedMessages ? JSON.parse(storedMessages) : null;
  };

  return (
    <div className="flex h-screen">
      <ChatSidebar setCurrentUser={setCurrentUser} onChatUserChange={handleChatUserChange}/>
      <div className="flex flex-col flex-1">
        <ChatTopbar currentChatUser={currentChatUser} />
        <ChatList messages={messages} currentUser={currentUser}/>
        <ChatBottombar
          sendMessage={sendMessage}
          currentUser={currentUser} // Passer le nom d'utilisateur à ChatBottombar
          currentChatUser={currentChatUser} // Passer l'utilisateur de discussion actuel
        />
      </div>
    </div>
  );
}

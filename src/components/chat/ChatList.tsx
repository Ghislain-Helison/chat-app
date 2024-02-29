'use client'

import React from "react";

interface Message {
  id: number;
  sender: string;
  text: string;
}

interface ChatListProps {
  messages: Message[];
}

export function ChatList({ messages }: ChatListProps) {
  return (
    <div className="flex-1 ">
        <h3>Chat list</h3>
      {messages.map((message) => (
        <div key={message.id} className="mb-2">
          <strong>{message.sender}:</strong> {message.text}
        </div>
      ))}
    </div>
  );
}

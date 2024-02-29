'use client'

import React from "react";

interface Message {
  id: number;
  sender: string;
  text: string;
}

interface ChatListProps {
  messages: Message[];
  currentUser: string;
}

export function ChatList({ messages, currentUser }: ChatListProps) {
  return (
    <div className="flex-1 overflow-y-auto p-4">
        <h3>Discussion</h3>
      {messages.map((message) => (
        <div
        key={message.id}
        className={`mb-2 ${message.sender === currentUser ? "text-right" : "text-left"}`}
      >
        <strong>{message.sender}:</strong> {message.text}
      </div>
      ))}
    </div>
  );
}

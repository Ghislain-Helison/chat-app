import React from "react";

interface TopbarProps {
  currentChatUser: string;
}

export function ChatTopbar({ currentChatUser }: TopbarProps) {
  return (
    <div className="bg-blue-500 text-white p-4">
      <p>Chatting with: {currentChatUser}</p>
    </div>
  );
}
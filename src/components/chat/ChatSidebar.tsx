import React from "react";

interface SidebarProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>; // Ajouter la prop pour setCurrentUser
}

export function ChatSidebar({ setCurrentUser }: SidebarProps) {
  const handleUserChange = (user: string) => {
    setCurrentUser(user);
  };

  return (
    <div className="bg-gray-200 p-4">
      {/* Contenu de la sidebar */}
      <p>Sidebar Content</p>
      <button onClick={() => handleUserChange("User1")}>Switch to User1</button>
      <button onClick={() => handleUserChange("User2")}>Switch to User2</button>
    </div>
  );
}
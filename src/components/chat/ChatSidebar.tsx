import React from "react";

interface SidebarProps {
  setCurrentUser: React.Dispatch<React.SetStateAction<string>>; // Ajouter la prop pour setCurrentUser
  onChatUserChange: (user: string) => void; // Ajouter la fonction de changement d'utilisateur de discussion
}

export function ChatSidebar({ setCurrentUser, onChatUserChange }: SidebarProps) {
  const handleUserChange = (user: string) => {
    setCurrentUser(user);
    onChatUserChange(user); // Appeler la fonction pour mettre à jour l'utilisateur de discussion actuel
  };

  return (
    <div className="bg-gray-200 p-4 min-w-56">
      {/* Contenu de la sidebar */}
      <p>Sidebar Content</p>
      <div className="flex flex-col">
        <button onClick={() => handleUserChange("User1")}>Switch to User1</button>
        <button onClick={() => handleUserChange("User2")}>Switch to User2</button>
        <button onClick={() => handleUserChange("User3")}>Switch to User3</button>
      </div>
    </div>
  );
}
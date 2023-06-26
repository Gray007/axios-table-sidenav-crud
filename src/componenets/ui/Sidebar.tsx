import React from "react";

interface SidebarProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, children }) => {
  return (
    <>
      {isOpen && (
        <div
          className={`absolute right-0 top-0 h-full w-72 bg-white transition-transform ${
            isOpen ? "translate-x-0 transform" : "translate-x-full transform"
          }`}
        >
          <div className="w-1/3 p-4">{children}</div>
        </div>
      )}
    </>
  );
};

export default Sidebar;

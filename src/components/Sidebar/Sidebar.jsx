import { useState } from "react";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* Menu Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 text-primarycolor md:hidden"
        onClick={() => setIsOpen(!isOpen)}
      ></button>

      {/* Sidebar Menu */}
      {isOpen && (
        <div className="fixed top-0 left-0 h-full bg-white text-gray-800 shadow-lg z-40 w-64 p-4">
          {/* Your sidebar content here */}
        </div>
      )}
    </div>
  );
}

import React from "react";
import logo from "../assets/microsoft-loop-line-1yus8lyh1prl1f6a6qjhp.webp";

function Navbar() {
  return (
    <nav className="w-full py-2.5 px-5 border-b border-gray-200 flex items-center justify-between ">
      
      {/* Logo Section */}
      <div className="flex items-center gap-2 ">
        <img
          src={logo}
          alt="ThreadX logo"
          className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
        />
        <span className="text-lg sm:text-xl font-spaceGrotesk font-bold">
          ThreadX
        </span>
      </div>

    </nav>
  );
}

export default Navbar;

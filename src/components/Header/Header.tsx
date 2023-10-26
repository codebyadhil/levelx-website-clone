import React from "react";
import levelxLogo from "../../assets/levelx-logo.svg";

function Header() {
  return (
    <header className="max-w-[70%] mx-auto flex justify-center py-4">
      <img src={levelxLogo} alt="LevelX Logo" className="w-24" />
    </header>
  );
}

export default Header;

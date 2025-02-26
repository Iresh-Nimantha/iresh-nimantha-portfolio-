import React, { useState } from "react";
import Menu from "../public/assets/menu.svg";
import Close from "../public/assets/close.svg";
import { navLinks } from "../constence/index";

const NavItems = () => {
  return (
    <ul className="nav-ul">
      {navLinks.map(({ id, name, href }) => (
        <li key={id} className="nav-li">
          <a href={href} className="nav-li_a" onClick={() => {}}>
            {name}
          </a>
        </li>
      ))}
    </ul>
  );
};

function NavBar() {
  const [isOpen, setIsOpen] = useState(true);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/90">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 md:px-7 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <a
            href="/"
            className="text-white font-bold text-xl hover:text-gray-400 transition-colors"
          >
            Iresh
          </a>
          <button
            onClick={toggleMenu}
            className="text-neutral-400 hover:text-white-500 focus:outline-none sm:hidden flex"
          >
            <img
              src={!isOpen ? Close : Menu}
              alt="Menu"
              className="w-6 h-6 text-white"
            />
          </button>
          <nav className="hidden sm:flex">
            <NavItems />
          </nav>
        </div>
      </div>
      <div className={`nav-sidebar ${!isOpen ? "max-h-screen" : "max-h-0"}`}>
        <nav className="p-5">
          <NavItems />
        </nav>
      </div>
    </header>
  );
}

export default NavBar;

import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";



export  const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 left-0 w-full z-50 text-white bg-[#070707] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Левый блок: имя */}
        <div className="text-2xl font-bold text-white">
          Roman Marchuk
        </div>

        {/* Desktop навигация */}
        <nav className="hidden md:flex gap-6">
          <a href="#about" className="hover:text-emerald-500 transition">About Me</a>
          <a href="#skills" className="hover:text-emerald-500 transition">Skills</a>
          <a href="#projects" className="hover:text-emerald-500 transition">Projects</a>
          <a href="#contact" className="hover:text-emerald-500 transition">Contact</a>
        </nav>

        {/* Mobile гамбургер */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-2xl text-white">
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile меню */}
      {isOpen && (
        <nav className="md:hidden bg-[#070707] px-6 py-4 flex flex-col gap-4">
          <a href="#about" className="hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>About Me</a>
          <a href="#skills" className="hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Skills</a>
          <a href="#projects" className="hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Projects</a>
          <a href="#contact" className="hover:text-emerald-500 transition" onClick={() => setIsOpen(false)}>Contact</a>
        </nav>
      )}
    </header>
  );
}

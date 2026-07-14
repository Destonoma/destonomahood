"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";

type NavbarProps = {
  xp: number;
};

export default function Navbar({ xp }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);

    if (!element) return;

    const yOffset = -100;
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-black/60 border-b border-lime-500/20">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-8 py-5">

        {/* Logo */}
        <Image
          src="/images/logo.png"
          alt="DTM Logo"
          width={170}
          height={55}
          priority
        />

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-10 text-gray-300">
          <button onClick={() => scrollToSection("home")} className="hover:text-lime-400">Home</button>
          <button onClick={() => scrollToSection("about")} className="hover:text-lime-400">About</button>
          <button onClick={() => scrollToSection("roadmap")} className="hover:text-lime-400">Roadmap</button>
          <button onClick={() => scrollToSection("quest")} className="hover:text-lime-400">Quest</button>
          <button onClick={() => scrollToSection("claim")} className="hover:text-lime-400">Claim Pass</button>
          <button onClick={() => scrollToSection("faq")} className="hover:text-lime-400">FAQ</button>
        </nav>

        {/* Desktop Right */}
<div className="hidden md:flex items-center gap-4">

  <div className="flex items-center px-4 py-2 rounded-xl border border-lime-500/30 bg-zinc-900/80">
    <span className="text-yellow-400 mr-2">⭐</span>
    <span className="font-bold text-white">XP {xp}</span>
  </div>

  <button className="bg-lime-400 text-black font-bold px-6 py-3 rounded-xl hover:scale-105 transition">
    Join Now
  </button>

</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={32} /> : <Menu size={32} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-lime-500/20 px-8 py-6 space-y-5 text-center">

          <button onClick={() => scrollToSection("home")} className="block w-full text-white hover:text-lime-400">Home</button>
          <button onClick={() => scrollToSection("about")} className="block w-full text-white hover:text-lime-400">About</button>
          <button onClick={() => scrollToSection("roadmap")} className="block w-full text-white hover:text-lime-400">Roadmap</button>
          <button onClick={() => scrollToSection("quest")} className="block w-full text-white hover:text-lime-400">Quest</button>
          <button onClick={() => scrollToSection("claim")} className="block w-full text-white hover:text-lime-400">Claim Pass</button>
          <button onClick={() => scrollToSection("faq")} className="block w-full text-white hover:text-lime-400">FAQ</button>

          <button className="w-full bg-lime-400 text-black font-bold py-3 rounded-xl">
            Join Now
          </button>
        </div>
      )}
    </header>
  );
}
"use client";

import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      headerRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
    );
  }, []);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(
        menuRef.current,
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, duration: 0.5, ease: "power3.out" }
      );
    }
  }, [isOpen]);

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 bg-zinc-900/80 backdrop-blur-md"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]">
            Magoga
          </span>
        </Link>

        <nav className="hidden md:flex space-x-8">
          {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
            <Link
              key={item}
              href={`#${item.toLowerCase()}`}
              className="relative text-sm uppercase tracking-widest hover:text-[#d76d77] transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-[#d76d77] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div
          ref={menuRef}
          className="md:hidden absolute top-full left-0 w-full bg-zinc-900/95 backdrop-blur-md py-4"
        >
          <nav className="flex flex-col items-center space-y-4">
            {["Home", "Projects", "Skills", "About", "Contact"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-lg uppercase tracking-widest hover:text-[#d76d77] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

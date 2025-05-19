"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const footerRef = useRef(null);
  const topButtonRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      footerRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    );

    // Scroll to top button animation
    const showButton = () => {
      if (window.scrollY > 500) {
        gsap.to(topButtonRef.current, { opacity: 1, y: 0, duration: 0.3 });
      } else {
        gsap.to(topButtonRef.current, { opacity: 0, y: 20, duration: 0.3 });
      }
    };

    window.addEventListener("scroll", showButton);
    return () => window.removeEventListener("scroll", showButton);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="py-12 bg-zinc-900 border-t border-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold tracking-tighter mb-4 block"
            >
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#3a1c71] via-[#d76d77] to-[#ffaf7b]">Fabricio</span> Magoga
            </Link>
            <p className="text-gray-400 max-w-md">
              Full-Stack Developer and Software Engineering Student, I am
              passionate about studying technology until I understand it.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "Projects", "Skills", "About", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <Link
                      href={`#${item.toLowerCase()}`}
                      className="text-gray-400 hover:text-[#ffaf7b] transition-colors duration-300"
                    >
                      {item}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:contato.fabriciomagoga@gmail.com"
                  className="hover:text-[#ffaf7b] transition-colors duration-300"
                >
                  contato.fabriciomagoga@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+5511993910804"
                  className="hover:text-[#ffaf7b] transition-colors duration-300"
                >
                  +55 11 99391-0804
                </a>
              </li>
              <li>Jundiaí - SP, Brazil</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Fabricio Magoga. All rights reserved.
          </p>

          <div className="flex space-x-6 mt-4 md:mt-0">
            <a
              href="https://github.com/magoga-br"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ffaf7b] transition-colors duration-300"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/fabriciomagoga/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#ffaf7b] transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>

      <button
        ref={topButtonRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-[#ffaf7b] flex items-center justify-center opacity-0 translate-y-20"
      >
        <ArrowUp className="h-5 w-5 text-white" />
      </button>
    </footer>
  );
}

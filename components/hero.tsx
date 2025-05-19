"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import { ArrowDown, Github, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const socialRef = useRef(null);
  const circleRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline();

    tl.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 1 }
    )
      .fromTo(
        textRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        ctaRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        socialRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out" },
        "-=0.5"
      )
      .fromTo(
        circleRef.current,
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 0.2, duration: 1.5, ease: "elastic.out(1, 0.3)" },
        "-=1"
      );

    // Parallax effect on scroll
    gsap.to(circleRef.current, {
      y: 200,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      <Header />

      <div
        ref={circleRef}
        className="absolute w-[600px] h-[600px] rounded-full bg-gtavi-gradient opacity-20 blur-3xl"
        style={{ top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}
      />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="max-w-3xl">
          <h1
            ref={headingRef}
            className="text-5xl md:text-7xl font-bold leading-tight"
          >
            Hi, I'm
            <br />
            <span className="text-transparent bg-clip-text bg-gtavi-gradient">
              Fabrício Magoga
            </span>
          </h1>

          <p
            ref={textRef}
            className="mt-6 text-xl text-gray-300 leading-relaxed"
          >
            Full-Stack Developer and Software Engineering Student, I am
            passionate about studying technology until I understand it.
          </p>

          <div ref={ctaRef} className="mt-10 flex flex-wrap gap-4">
            <a href="#projects">
              <Button className="bg-gtavi-gradient hover:brightness-110 text-white px-8 py-6 rounded-full text-lg">
                View Projects
              </Button>
            </a>
            <a href="#contact">
              <Button
                variant="outline"
                className="border-white/20 hover:bg-white/10 text-black px-8 py-6 rounded-full text-lg"
              >
                Contact Me
              </Button>
            </a>
          </div>

          <div ref={socialRef} className="mt-10 flex items-center space-x-4">
            <Link
              href="https://github.com/magoga-br"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#d76d77] transition-colors duration-300"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/fabriciomagoga/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-[#d76d77] transition-colors duration-300"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
        <span className="text-sm uppercase tracking-widest text-gray-400 mb-2">
          Scroll Down
        </span>
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <ArrowDown className="w-3 h-3 text-white animate-bounce mt-2" />
        </div>
      </div>
    </section>
  );
}

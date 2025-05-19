"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animate heading
    gsap.fromTo(
      headingRef.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate image
    gsap.fromTo(
      imageRef.current,
      { x: -50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );

    // Animate content
    gsap.fromTo(
      contentRef.current,
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top bottom-=50",
          toggleActions: "play none none none",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gradient-to-b from-zinc-800 to-zinc-900"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">About Me</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get to know more about my journey, experience, and passion for
            software development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className="relative">
            <div className="relative h-[500px] w-full rounded-xl overflow-hidden">
              <Image
                src="/profile.jpg"
                alt="Fabricio Magoga"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-48 h-24 bg-gradient-to-b from-zinc-800 to-zinc-800 rounded-xl flex items-center justify-center text-white text-lg font-bold shadow-lg">
              <span className="text-transparent bg-clip-text bg-gtavi-gradient -rotate-6">
                Full-Stack Dev
              </span>
            </div>
          </div>

          <div ref={contentRef} className="space-y-6">
            <h3 className="text-3xl font-bold text-transparent bg-clip-text bg-gtavi-gradient">
              Fabrício Magoga
            </h3>
            <p className="text-lg text-gray-300 break-words max-w-full overflow-auto whitespace-pre-line">
              <span className="block mb-4">
                I am a software engineering student from Jundiaí, SP, Brazil,
                passionate about crafting elegant solutions for complex
                challenges.
              </span>
              <span className="block mb-4">
                My academic journey has allowed me to develop strong skills in{" "}
                <strong>Object-Oriented Programming (Java, C#)</strong>,{" "}
                <strong>mobile development</strong> (Flutter, Dart), and{" "}
                <strong>web development</strong> (HTML, CSS, JavaScript). I have
                also built a solid foundation in{" "}
                <strong>MySQL databases</strong>, hardware fundamentals, network
                configuration, and embedded systems (Arduino, C++).
              </span>
              <span className="block mb-4">
                I am well-versed in <strong>Agile Methodologies</strong> and{" "}
                <strong>UX/UI Design</strong>, always aiming to create intuitive
                and user-friendly interfaces.
              </span>
              <span className="block mb-4">
                I truly enjoy studying technology until I fully understand how
                it works, always seeking to deepen my knowledge and master new
                concepts.
              </span>
              <span className="block">
                Currently, I am focused on building applications with
                JavaScript, Node.js, Python, and C#, with a commitment to clean,
                sustainable code and continuous learning.
              </span>
            </p>
            <div className="pt-4">
              <a href="/CV_FABRICIO_MAGOGA.pdf" download>
                <Button className="bg-[#d76d77] hover:bg-[#ffaf7b] text-white px-6 py-6 rounded-lg text-lg transition-colors duration-300 shadow-md">
                  <FileText className="mr-2 h-5 w-5" /> Download Resume
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

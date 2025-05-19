"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    title: "Url-shorter",
    description:
      "A simple and efficient project to shorten URLs, making it easier to share long links.",
    tags: ["JavaScript", "Node.js", "Express", "MongoDB", "HTML", "CSS"],
    image: "/url.png",
    github: "https://github.com/magoga-br/url-shorter",
    demo: "https://github.com/magoga-br/url-shorter",
  },
  {
    id: 2,
    title: "Real-time-chat",
    description:
      "This project is a real-time chat, with a frontend in HTML, CSS and pure JavaScript, and a backend in Node.js using WebSocket. It allows multiple users to chat simultaneously in a simple and fast way.",
    tags: ["Node.js", "JavaScript", "WebSocket", "HTML", "CSS"],
    image: "/chat.png?width=550",
    github: "https://github.com/magoga-br/chat",
    demo: "https://chat-frontend-2dvg.onrender.com",
  },
  {
    id: 3,
    title: "TechTaste",
    description:
      "TechTaste is an app that presents restaurants, their menus and allows the user to place an order (bag). The project uses the Provider pattern for state management and follows good Flutter architecture practices.",
    tags: ["Flutter", "Dart"],
    image: "/tech.png",
    github: "https://github.com/magoga-br/flutter_techtaste",
    demo: "https://github.com/magoga-br/flutter_techtaste",
  },
];

export default function Projects() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const projectRefs = useRef([]);

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

    // Animate projects
    projectRefs.current.forEach((project, index) => {
      gsap.fromTo(
        project,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          delay: index * 0.2,
          scrollTrigger: {
            trigger: project,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 md:py-32 bg-gtavi-gradient bg-cover bg-center"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A selection of my most recent and impactful work, showcasing
            creative solutions and technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              className="group relative bg-zinc-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-zinc-700 hover:border-[#d76d77] transition-all duration-500"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#d76d77] transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs px-2 py-1 rounded-full bg-zinc-700 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <Link
                    href={project.demo}
                    className="flex items-center text-sm font-medium text-[#d76d77] hover:text-[#ffaf7b] transition-colors duration-300"
                  >
                    View Demo <ArrowUpRight className="ml-1 h-4 w-4" />
                  </Link>
                  <Link
                    href={project.github}
                    className="flex items-center text-sm font-medium text-gray-300 hover:text-[#ffaf7b] transition-colors duration-300"
                  >
                    <Github className="h-4 w-4 mr-1" /> Code
                  </Link>
                </div>
              </div>

              <Link
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-zinc-800/80 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0 cursor-pointer hover:bg-[#d76d77]"
                aria-label={`Ver código de ${project.title} no GitHub`}
              >
                <ArrowUpRight className="h-5 w-5 text-white" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Server, Database, Braces, Cpu, Globe } from "lucide-react";

const skills = [
  {
    icon: <Code className="h-8 w-8" />,
    title: "JavaScript",
    description:
      "Experience in modern JavaScript, including ES6+ features, async programming, and functional concepts.",
    level: 70,
  },
  {
    icon: <Server className="h-8 w-8" />,
    title: "Node.js",
    description:
      "Experience in NodeJS, Building scalable backend services, RESTful APIs, and real-time applications with Node.js.",
    level: 55,
  },
  {
    icon: <Braces className="h-8 w-8" />,
    title: "Python",
    description:
      "Developing data analysis tools, automation scripts, and backend services with Python.",
    level: 65,
  },
  {
    icon: <Cpu className="h-8 w-8" />,
    title: "C#",
    description:
      "Creating desktop applications and backend services with .NET.",
    level: 60,
  },
  {
    icon: <Database className="h-8 w-8" />,
    title: "Databases",
    description: "Working with SQL databases including MySQL and MongoDB.",
    level: 70,
  },
  {
    icon: <Globe className="h-8 w-8" />,
    title: "Web Development",
    description:
      "Building responsive, accessible, and performant web applications with modern frameworks.",
    level: 70,
  },
];

export default function Skills() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const skillRefs = useRef([]);
  const progressRefs = useRef([]);

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

    // Animate skills
    skillRefs.current.forEach((skill, index) => {
      gsap.fromTo(
        skill,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          delay: index * 0.1,
          scrollTrigger: {
            trigger: skill,
            start: "top bottom-=50",
            toggleActions: "play none none none",
          },
        }
      );
    });

    // Animate progress bars
    progressRefs.current.forEach((progress, index) => {
      gsap.fromTo(
        progress,
        { width: 0 },
        {
          width: `${skills[index].level}%`,
          duration: 1.5,
          ease: "power3.out",
          delay: 0.2 + index * 0.1,
          scrollTrigger: {
            trigger: progress,
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
      id="skills"
      ref={sectionRef}
      className="py-20 md:py-32 bg-zinc-800"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Combining technical knowledge with creative problem-solving to
            deliver exceptional digital experiences.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              ref={(el) => (skillRefs.current[index] = el)}
              className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700 rounded-xl p-8 transition-all duration-500 group hover:border-transparent hover:bg-clip-padding hover:bg-origin-border hover:border-[3px] hover:bg-none hover:shadow-lg hover:ring-2 hover:ring-gtavi-gradient"
            >
              <div className="flex items-start mb-4">
                <div className="w-16 h-16 rounded-lg bg-[#d76d77] flex items-center justify-center mr-4 transform group-hover:rotate-6 transition-transform duration-500 shadow-md">
                  {skill.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-1 group-hover:text-[#d76d77] transition-colors duration-300">
                    {skill.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {skill.description}
                  </p>
                </div>
              </div>
              <div className="w-full h-2 bg-zinc-700 rounded-full overflow-hidden">
                <div
                  ref={(el) => (progressRefs.current[index] = el)}
                  className="h-full bg-gtavi-gradient rounded-full transition-all duration-500"
                  style={{ width: "0%" }}
                ></div>
              </div>
              <div className="mt-2 text-right text-sm text-gray-400">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

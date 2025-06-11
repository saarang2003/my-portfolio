"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { GithubGraph } from "@/components/ui/github";
import { Card } from "@/components/ui/card";
import { useState } from "react";

const skills = {
  Languages: ["Typescript", "JavaScript", "HTML", "CSS", "SQL"],
  Frameworks: [
    "React",
    "Node.js",
    "Express",
    "Next.js",
    "Mongoose",
    "Tailwind CSS",
  ],
  "Dev Tools": [
    "Git",
    "GitHub",
    "VS Code",
    "Firebase",
    "Vercel",
    "MongoDB",
    "PostgreSQL",
  ],
};

const projects = [
  {
    title: "Coiny",
    description:
      "Coiny is a secure, real-time digital wallet app that enables seamless and secure payments with chat functionality , QR code-based transactions, and user rewards.",
    tech: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
    githubLink: "https://github.com/saarang2003/Coiny",
    liveLink: "https://coiny-frontend.onrender.com/",
  },
  {
    title: "Dev Blog",
    description: "FullStack Blog App with minimalistic UI.",
    tech: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
    githubLink: "https://dev-blogg.vercel.app/",
    liveLink: "https://github.com/faizanr27/Dev-Blog",
  },
  {
    title: "Shortsy",
    description:
      "A full-stack URL shortener with JWT authentication and bcrypt for password hashing. Uses MongoDB as the database and features a clean interface with Shadcn UI.",
    tech: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
    githubLink: "https://shrtsy.vercel.app/signin",
    liveLink: "https://github.com/faizanr27/Shortsy",
  },
  {
    title: "WEB2MD",
    description:
      "This project is a web scraper that uses Puppeteer and Cheerio to extract webpage content, convert it into Markdown, and cache results in Redis for improved performance.",
    tech: ["Node.js", "Express", "Redis", "Puppeteer"],
    githubLink: "https://web2-md.vercel.app/",
    liveLink: "https://github.com/faizanr27/Web2MD",
  },
];

const navItems = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

export default function Home() {
  const [activeSection, setActiveSection] = useState("Home");

  return (
    <main className="min-h-screen b bg-black text-zinc-50 relative overflow-hidden">
      {/* {Navigation} */}
      <nav className="left-0 right-0 border-zinc-800/50 z-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center h-16 gap-8">
            {navItems.map((item) => (
              <Link key={item.label} href={item.link}>
                <button
                  onClick={() => setActiveSection(item.link)}
                  className={`flex items-center gap-2 px-3 py-2 transition-colors ${
                    activeSection === item.label
                      ? "text-white"
                      : "hover:text-white"
                  }`}
                >
                  <span
                    className={`text-sm ${
                      activeSection === item.label
                        ? "border-b border-orange-400"
                        : ""
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Floating Blobs */}

      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div
          className="absolute top-5 right-0 w-[300px] h-[300px] rounded-fu;; bg-[#059212] blur-[120px]"
          style={{ animation: "float-blob-2 20s infinite ease-in-out" }}
        />
        <div
          className="absolute bottom-0 left-10 w-[300px] h-[300px] rounded-full bg-[#059212] blur-[120px]"
          style={{ animation: "float-blob-2 15s infinite ease-in-out" }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-4 py-28 -mt-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl font-bold mb-4 text-white inline-block">
            <span className="flex gap-2">
              Hello, I&apos;m
              <RoughNotation
                type="highlight"
                color="#059212"
                show={true}
                animationDelay={800}
                strokeWidth={2}
              >
                <span>Sarang Patil</span>
              </RoughNotation>
            </span>
          </h1>

          <p className="text-xl text-zinc-200 mb-8">
            A passionate front-end developer dedicated to building high-quality,
            scalable web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 mb-12"
        >
          <Link href="mailto:sarang18work@gmail.com">
            <Button
              variant={"outline"}
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Mail className="mr-2 h-4 w-4" />
              Email
            </Button>
          </Link>

          <Link
            href="https://github.com/saarang2003"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"outline"}
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Github className="mr-2 h-4 w-4" />
              Github
            </Button>
          </Link>

          <Link
            href="https://www.linkedin.com/in/sarang-patil-707a58334/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              variant={"outline"}
              className="border-zinc-700 hover:border-zinc-500 hover:bg-black/80 hover:text-white/50 bg-black rounded-lg"
            >
              <Linkedin className="mr-2 w-4 h-4" />
              LinkedIn
            </Button>
          </Link>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Skills</h2>
          <div className="grid gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-lg font-medium mb-3 text-zinc-200">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <Badge
                      key={skill}
                      variant={"secondary"}
                      className="bg-[#059212] hover:bg-black text-white border-zinc-700 hover:text-zinc-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.section>

        {/* motion github */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16"
        >
          <h2 className="text-2xl font-semibold mb-6 text-white relative inline-block">
            <RoughNotation
              type="circle"
              color="#059212"
              show={true}
              animationDelay={600}
              strokeWidth={2}
              padding={[8, 8, 4, 6]}
            >
              <span>Github Contribution</span>
            </RoughNotation>
          </h2>
          <a href="https://github.com/saarang2003">
            <GithubGraph
              username="saarang2003"
              blockMargin={2}
              colorPallete={[
                "#e0e0e0",
                "#9be9a8",
                "#40c463",
                "#30a14e",
                "#216e39",
              ]}
            />
          </a>
        </motion.section>

        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h2 className="text-2xl font-semibold mb-6 text-white">Projects</h2>
          <div className="grid gap-6">
            {projects.map((project) => (
              <Card
                key={project.title}
                className="p-6 bg-zinc-900/50 border-zinc-800 backdrop-blur-sm hover:border-zinc-700 transition-colors"
              >
                <h2 className="text-2xl font-semibold mb-6 text-white relative inline-block">
                  <RoughNotation
                    type="underline"
                    color="#059212"
                    show={true}
                    animationDelay={600}
                    strokeWidth={2}
                    padding={[8, 8, 4, 6]}
                  >
                    <span>{project.title}</span>
                  </RoughNotation>
                </h2>

                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge
                        key={tech}
                        variant={"secondary"}
                        className="bg-[#059212] hover:bg-black text-white hover:border-zinc-700  hover:text-zinc-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex flex-row gap-2 text-zinc-300">
                    <Link href={project.githubLink}>
                      <Globe
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                    <Link href={project.liveLink}>
                      <Github
                        size={20}
                        className="hover:scale-125 transition-all"
                      />
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </motion.section>

        <footer className="mt-20 text-center text-zinc-400">
          © 2025 Sarang Patil. All rights reserved.
        </footer>
      </div>
    </main>
  );
}

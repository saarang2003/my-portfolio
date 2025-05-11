import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";

const projects = [
  {
    title: "Hive Mind",
    description:
      "Your personal knowledge hub to store, organize, and retrieve ideas effortlessly. Easily categorize notes, ideas, and files for quick access.",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "https://github.com/faizanr27/hive-Mind-fe",
  },
  {
    title: "Web Scraper",
    description: "This is a web scraper built using Puppeteer that can extract data from YouTube videos, websites, and tweets. It automates browser interactions to fetch relevant details efficiently.",
    technologies: ["Node js", "Express", "Puppeteer"],
    github: "https://github.com/faizanr27/Web-scrapper",
  },
  {
    title: "Dev Blog",
    description: "FullStack Blog App with minimalistic UI.",
    technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "https://github.com/faizanr27/Dev-Blog",
  },
  {
    title: "Shortsy",
    description:
      "A full-stack URL shortener with JWT authentication and bcrypt for password hashing. Uses MongoDB as the database and features a clean interface with Shadcn UI.",
    technologies: ["React.js", "Tailwind CSS", "Shadcn/ui", "Node.js", "MongoDB", "Express.js", "Mongoose"],
    github: "https://github.com/faizanr27/shortsy/",
  },

  {
    title: "TubeSage",
    description: "Tube Sage makes it easy to paste blog or YouTube links and get the key information in seconds using AI.",
    technologies: ["Work in progress","React", "Tailwind CSS", "Framer Motion", "Gemini", "Nodejs", "Express js"],
    github: "https://github.com/faizanr27/TubeSage",
  },
  {
    title: "Chat App using websockets",
    description:
      "A simple chat app built using WEBSOCKETS",
    technologies: ["React.js", "Tailwind CSS", "websockets", 'Nodejs', 'Express'],
    github: "https://github.com/faizanr27/Ws-chat-app",
  },
  // {
  //   title: "Blogr Landing Page",
  //   description:
  //     "A responsive landing page built using React with custom CSS for styling. The page is fully responsive and optimized for different screen sizes.",
  //   technologies: ["React", "CSS", "JavaScript"],
  //   github: "#",
  // },
  // {
  //   title: "Campus Connect",
  //   description:
  //     "A web-based application to help students manage shared resources, plan group activities, and communicate when working on academic projects.",
  //   technologies: ["React", "Firebase"],
  //   github: "#",
  // },
]



export default function ProjectsPage(){

    return (

        <main>
            <div>
               <Link href = '/' >
                <ArrowLeft />
                Back to Home
               </Link>



               <h1>
                <RoughNotation type="highlight" >

                <span>Projects</span>
                </RoughNotation>
               </h1>



               <div >
                {
                    projects.map((project , index) =>(
                        <div key={project.title}>
                            <div>
                            <h2>
                                <RoughNotation type="underline" >

                                    <span>{project.title}</span>
                                </RoughNotation>

                            </h2>

                            <p>{project.description}</p>


                            <div>
                                {
                                    project.technologies.map((tech) =>(
                                     <span key={tech} >
                                        {tech}
                                     </span>
                                    ))}
                            </div>


                            <Link href={project.github} >
                            View ON Github
                            </Link>
                            </div>


                            {index < projects.length -1 &&  < Separator  />}
                        </div>
                    ))
                
                }
               </div>




            </div>
        </main>
    )
}
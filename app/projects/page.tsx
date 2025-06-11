import { Separator } from "@/components/ui/separator";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";



const projects = [
  {
    title: "Coiny",
    description:
      "Coiny is a secure, real-time digital wallet app that enables seamless and secure payments with chat functionality , QR code-based transactions, and user rewards.",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Node.js",
      "Shadcn",
      "MongoDB",
      "Express.js",
      "Mongoose",
      "Recoil"
    ],
    github: "https://coiny-frontend.onrender.com/",
  },
  {
    title: "ClickCart",
    description: "ClickArt is a full-featured eCommerce web application built using the MERN stack. It allows users to browse products by categories and brands, make orders, and pay securely through PayPal.",
    technologies: [
      "React",
      "Tailwind CSS",
      "Node.js",
      "MongoDB",
      "Express.js",
      "Mongoose",
      "Shadcn",
      "Cloudinary",
      "PayPal js sdk",
      "Redux Toolkit"
    ],
    github: "https://clickcart-1-7ywd.onrender.com/",
  },
  {
    title: "ForestIQ",
    description:
      "A full-stack Forest Management Software for green cover analysis , tree enumeration , Optimal Path finding.",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Node.js",
      "Flask",
      "OpenCv",
      "YOLO",
      "RobofLow",
      "MongoDB",
      "Express.js",
      "Mongoose",
    ],
    github: "https://forestiq-frontend.onrender.com/",
  },
  {
    title: "PDF Chat",
    description:
      "An AI-powered web app that lets users upload PDF files and chat to ask questions about their content.",
    technologies: ["Node.js","Nextjs", "Express", "Bullmq" , "qdrant" , "openai"],
    github: "https://github.com/faizanr27/Web2MD",
  },
   {
    title: "Switch-it",
    description:
      "A simple web app that allows users to switch between different themes with a smooth, user-friendly interface.",
    technologies: ["Nextjs","tailwindcss", "css-variables"],
    github: "https://switch-it.vercel.app/",
  },
  {
    title: "Plan-it",
    description:
      "A collaborative whiteboard app that lets users draw, write, and brainstorm ideas in real time—just like Eraser.io.",
    technologies: ["Nextjs","tailwindcss", "Clerk" ,"excalidraw-api","typescript"],
    github: "https://github.com/saarang2003/plan-it",
  },
];


export default function ProjectsPage(){

    return (

        <main className="relative min-h-screen bg-black  text-white overflow-hidden">
            <div className="container mx-auto px-4 py-8 relative z-10 max-w-3xl">

               <Link href = '/' className="inline-flex items-center text-zinc-400 hover:text-white mb-8"  >
                <ArrowLeft  size={16} className="mr-2" />
                Back to Home
               </Link>



               <h1 className="text-3xl font-semibold mb-8" >
                <RoughNotation  type="highlight"
                              color="#059212"
                              show={true}
                              animationDelay={600}
                              strokeWidth={2}
                              padding={[8, 10, 8, 12]}
                              >

                <span>Projects</span>
                </RoughNotation>
               </h1>



               <div className="space-y-12" >
                {
                    projects.map((project , index) =>(
                        <div key={project.title}>
                            <div className="mb-6">
                            <h2 className="text-2xl font-medium mb-2 relative inline-block" >
                                <RoughNotation   type="underline"
                              color="#059212"
                              show={true}
                              animationDelay={600}
                              strokeWidth={2}
                              padding={[8, 8, 4, 6]} >

                                    <span>{project.title}</span>
                                </RoughNotation>

                            </h2>

                            <p className="text-zinc-400 mb-4" >{project.description}</p>


                            <div className="flex flex-wrap gap-2 mb-4" >
                                {
                                    project.technologies.map((tech) =>(
                                     <span key={tech}  className="px-3 py-1 bg-zinc-900 border border-zinc-800 rounded-full text-sm text-zinc-400"  >
                                        {tech}
                                     </span>
                                    ))}
                            </div>


                            <Link href={project.github} className="text-zinc-400 hover:text-white underline underline-offset-4"  >
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
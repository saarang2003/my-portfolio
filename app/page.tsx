import Link from "next/link";
import { motion } from "motion/react";
import { RoughNotation } from "react-rough-notation";
import { Button } from "@/components/ui/button";
import { Github, Globe, Linkedin, Mail } from "lucide-react";
import { div } from "motion/react-client";
import { Badge } from "@/components/ui/badge";
import { GithubGraph } from "@/components/ui/github";
import { Card } from "@/components/ui/card";


const skills = {
  Languages: ['Typescript', 'JavaScript', 'HTML', 'CSS', 'SQL'],
  Frameworks: ['React', 'Node.js', 'Express', 'Next.js', 'Mongoose', 'Tailwind CSS'],
  'Dev Tools': ['Git', 'GitHub', 'VS Code', 'Firebase', 'Vercel', 'MongoDB', 'PostgreSQL'],
};

const projects = [
  {
    title: 'Hive Mind',
    description: 'Your personal knowledge hub to store, organize, and retrieve ideas effortlessly. Easily categorize notes, ideas, and files for quick access.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://hivee-mind.vercel.app",
    liveLink: 'https://github.com/faizanr27/Hive-Mind-FE',
  },
  {
    title: 'Dev Blog',
    description: 'FullStack Blog App with minimalistic UI.',
    tech: ['React', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://dev-blogg.vercel.app/",
    liveLink: 'https://github.com/faizanr27/Dev-Blog',
  },
  {
    title: 'Shortsy',
    description: 'A full-stack URL shortener with JWT authentication and bcrypt for password hashing. Uses MongoDB as the database and features a clean interface with Shadcn UI.',
    tech: ['React.js', 'Tailwind CSS', 'Shadcn/ui', 'Node.js', 'MongoDB', 'Express.js', 'Mongoose'],
    githubLink: "https://shrtsy.vercel.app/signin",
    liveLink: 'https://github.com/faizanr27/Shortsy',
  },
  {
    title: 'WEB2MD',
    description: 'This project is a web scraper that uses Puppeteer and Cheerio to extract webpage content, convert it into Markdown, and cache results in Redis for improved performance.',
    tech: ['Node.js', 'Express', 'Redis', 'Puppeteer'],
    githubLink: "https://web2-md.vercel.app/",
    liveLink: 'https://github.com/faizanr27/Web2MD',
  },
];


const navItems = [
  { label: 'Home', link: '/' },
  { label: 'Projects', link: '/projects' },
  { label: 'Contact', link: '/contact' },
];


export default function Home() {
  return (
   <main>

    {/* {Navigation} */}
    <nav>
      <div>
        <div>
          {navItems.map((item) =>(
            <Link key={item.label} href={item.link} >

              <button>

                <span>
                  {item.label}
                </span>

              </button>

            </Link>
          ))}
        </div>
      </div>
    </nav>

          {/* Floating Blobs */}

       <div>

        <div>

        </div>
       </div>


       <div>
        <motion.div>
          <h1>
           
              <span>
                Hello, I'm 
                <RoughNotation type="highlight">
                <span>
                  Sarang Patil
                </span>
                </RoughNotation>
              </span>
          </h1>


          <p>
              A passionate front-end developer dedicated to building high-quality,
            scalable web applications.
          </p>
        </motion.div>

        <motion.div>
          <Link href="mailto:sarang18work@gmail.com">
          <Button>

            <Mail />
            Email
          </Button>        
          </Link>

          <Link href="github.com/saarang2003">
          <Button>
            <Github />
            Github
          </Button>         
          </Link>

          <Link href="https://www.linkedin.com/in/sarang-patil-707a58334/">
            <Button>

              <Linkedin />
              LinkedIn
            </Button>
          </Link>

        </motion.div>

        <motion.section>

          <h2>Skills</h2>
          <div>
            {
              Object.entries(skills).map(([category , items]) =>(
                <div key={category}>
                  <h3>{category}</h3>
                  <div>
                    {
                      items.map((skill) =>(
                       <Badge  key = {skill} >
                        {skill}
                       </Badge>
                      ))
                    }
                  </div>
                </div>
              ))
            }
          </div>

        </motion.section>
       </div>
       
       {/* motion github */}
            <motion.section>
              <h2>
                <RoughNotation type="circle">
                <span>Github Contribution</span>
                </RoughNotation>
              </h2>
              <a href="https://github.com/saarang2003">
              <GithubGraph
              username="saarang2003"
              blockMargin={2}
              colorPallete={[
                 "#2b1a0b",
                "#7a3e1d",
                "#b85c2e",
                "#e67342",
                "#ff9248",
              ] 
              }
              />         
              </a>
            </motion.section>

            <motion.section>
              <h2>Projects</h2>
              <div>
               {
                projects.map((project) =>(
                  <Card
                  key={project.title}



                  >
                    <h2>
                      <RoughNotation type="underline" >
                        <span>{project.title}</span>
                      </RoughNotation>
                    </h2>

                    <p>{project.description}</p>
                    <div>
                      <div>
                        {
                          project.tech.map((tech) => (
                            <Badge  key={tech} >
                                {tech}
                            </Badge>
                          ))
                        }
                      </div>

                      <div>
                        <Link href={project.githubLink} >
                        <Globe  />
                        </Link>
                        <Link href={project.liveLink}>
                        <Github />
                        </Link>
                      </div>
                    </div>
                  </Card>    
                ))
               }
              </div>
            </motion.section>

            <footer>
  © 2025 Sarang Patil. All rights reserved.
            </footer>
   </main>
  );
}

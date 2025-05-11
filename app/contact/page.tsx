import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import { RoughNotation } from "react-rough-notation";



export default function ContactPage() {

    return(
        <main>
            <div>
                <Link  href="/">
                 <ArrowLeft  />
                 Back to Home 
                </Link>


                <h1>
                    <RoughNotation type="highlight" >
                        <span>
                        Contact Me 
                        </span>
                    </RoughNotation>
                </h1>


                <div>
                    <div>
                        <h2>
                            Get in Touch
                        </h2>

                        <p>
                        Feel free to reach out through the platforms below or send an
              email. I'm always open to discussing new projects, creative ideas,
              or opportunities.
                        </p>



                        <div>
                            <a href="mailto:sarang18work@gmail.com">

                                <Mail />
                                sarang18work@gmail.com
                            </a>

                            <a href="https://github.com/saarang2003">
                            <Github />
                            Sarang2003
                            </a>

                            <a href="https://www.linkedin.com/in/sarang-patil-707a58334/">
                            <Linkedin />
                            Linkedin
                            </a>
                        </div>
                    </div>


                    <div>
                        <h2>
                            Send a Message
                        </h2>
                        <form action="">

                            <div>
                                <Input 
                                type="text"
                                name="name"
                                placeholder="Enter your name"
                                required
                                />
                            </div>


                            <div>
                                <Input
                                type="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                />
                            </div>


                            <div>
                                <Textarea
                                name="message"
                                placeholder="Enter your message"
                                required
                                />
                            </div>

                    <input type="text" name="_honey" style={{ display: "none" }} />

                    <input type="hidden" name="_captcha" value="false" />

                    <Button>
                        Send Message
                    </Button>
                        </form>
                    </div>




                </div>
            </div>
        </main>
    )
}
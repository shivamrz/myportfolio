import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Github, Linkedin, Mail, ExternalLink, Code, User, Briefcase, Cpu, Send } from "lucide-react"
import Link from "next/link"
import ContactForm from "./pages/ContactForm"
import Header from "./pages/Header"
import Footer from "./pages/Footer"
import Projects from "./project/page"

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <Header/>

      <main className="container py-8 md:py-12 px-4 md:px-6">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
          <div className="mx-auto max-w-[58rem] space-y-6">
            <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
              Full Stack Developer
            </h1>
            <p className="text-muted-foreground md:text-xl">
              Building elegant solutions to complex problems with modern technologies.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                View Projects
                <ExternalLink href="/project" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                <a href="https://drive.google.com/file/d/1XSANXFgdlqK76ChHaS4LgougXT9Mp1V3/view?usp=sharing">
                  Download Resume
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="md:w-1/2">
                <div className="relative w-full aspect-square overflow-hidden rounded-full md:rounded-2xl border-4 border-background bg-muted">
                  <img src="/pp1.jpeg?height=400&width=400" alt="Shivam Raj" className="object-cover" />
                </div>
              </div>
              <div className="md:w-1/2 space-y-4">
                <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium">
                  <User className="mr-1 h-4 w-4" />
                  About Me
                </div>
                <h2 className="text-3xl font-bold tracking-tight">Hi, I'm Shivam Raj</h2>
                <p className="text-muted-foreground">
                I'm a passionate full-stack developer with expertise in React, Node.js, Express.js, MongoDB, PostgreSQL, Prisma, and TypeScript. I specialize in building scalable, high-performance web applications with a strong focus on backend development and database management.
                </p>
                <p className="text-muted-foreground">
                My journey in software development began with Java and problem-solving, which led me to explore full-stack development. Since then, I've worked on projects like Cash Karo App and Medium App, honing my skills in API development, authentication, and deployment.
                </p>
                <p className="text-muted-foreground">
                When I'm not coding, you can find me solving DSA problems, exploring new technologies, or refining my project management skills.🚀 
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-12 md:py-24 bg-muted/50 rounded-2xl">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center text-center mb-12">
              <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
                <Cpu className="mr-1 h-4 w-4" />
                Skills & Technologies
              </div>
              <h2 className="text-3xl font-bold tracking-tight">My Technical Toolkit</h2>
              <p className="text-muted-foreground mt-4 max-w-[58rem]">
                I've worked with a variety of technologies across the full stack. Here are some of my core competencies:
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Frontend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>React</Badge>
                    <Badge>Next.js</Badge>
                    <Badge>TypeScript</Badge>
                    <Badge>Tailwind CSS</Badge>
                    <Badge>Redux</Badge>
                    <Badge>HTML/CSS</Badge>
                    <Badge>JavaScript</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Backend</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Node.js</Badge>
                    <Badge>Express</Badge>
                    <Badge>Python</Badge>
                    <Badge>Java</Badge>
                    <Badge>MongoDB</Badge>
                    <Badge>REST APIs</Badge>
                    <Badge>PostgreSQL</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>DevOps & Tools</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex flex-wrap gap-2">
                    <Badge>Git</Badge>
                    <Badge>Docker</Badge>
                    <Badge>AWS</Badge>
                    <Badge>Vercel</Badge>
                    <Badge>CI/CD</Badge>
                    <Badge>Postman</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <Projects/>

        {/* Contact Section */}
        <ContactForm/>
      </main>

      {/* Footer */}
      <Footer/>
    </div>
  )
}


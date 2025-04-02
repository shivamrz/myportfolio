import { Briefcase, Github, ExternalLink } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Projects() {
  return (
    <section id="projects" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Briefcase className="mr-1 h-4 w-4" />
            Projects
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Featured Work</h2>
          <p className="text-muted-foreground mt-4 max-w-[58rem]">
            Here are some of the projects I&apos;ve worked on. Each one presented unique challenges and opportunities for growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/maxresdefault.jpg" height={300} width={600}
                alt="Cash Karo App"
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>Cash Karo App</CardTitle>
              <CardDescription>
                A secure digital wallet for seamless cash deposits, withdrawals, and transfers with real-time balance updates.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Node.js</Badge>
                <Badge variant="outline">Express.js</Badge>
                <Badge variant="outline">MongoDB</Badge>
                <Badge variant="outline">TailwindCSS</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
                Built a reliable fintech solution that improved transaction efficiency by 50% and enhanced user security with encrypted authentication. 
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button  variant="outline" size="sm">
              <a href="https://github.com/shivamrz" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>
              </Button>
              <Button size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>

          <Card className="overflow-hidden">
            <div className="aspect-video w-full overflow-hidden">
              <Image
                src="/business-blogging-img1.jpg" height={300} width={600}
                alt="Task Management App"
                className="object-cover w-full h-full"
              />
            </div>
            <CardHeader>
              <CardTitle>Blogging Platform</CardTitle>
              <CardDescription>
              A feature-rich platform allowing users to create, edit, and publish blogs with user authentication and rich text formatting.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge variant="outline">React.js</Badge>
                <Badge variant="outline">Typescript</Badge>
                <Badge variant="outline">TailwindCSS</Badge>
                <Badge variant="outline">Prisma</Badge>
                <Badge variant="outline">PostgreSQL</Badge>
              </div>
              <p className="text-sm text-muted-foreground">
              Developed a scalable blogging platform that enhanced user engagement by 35% and improved content discoverability through SEO optimization.
              </p>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline" size="sm" >
                <a href="https://github.com/shivamrz/medium-app/" 
                  target="_blank"
                  rel="noopener noreferrer">
                  <Github className="mr-2 h-4 w-4" />
                  Code
                </a>                
              </Button>
              <Button size="sm">
                <ExternalLink className="mr-2 h-4 w-4" />
                Live Demo
              </Button>
            </CardFooter>
          </Card>
        </div>

        <div className="flex justify-center mt-8">
          <Button variant="outline">
            View All Projects
            <ExternalLink className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

import Link from "next/link";
import { Github, Linkedin, Mail, Code } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t py-6 md:py-8">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-5 w-5" />
          <span className="text-sm font-medium">Shivam Raj</span>
        </div>
        <p className="text-center text-sm text-muted-foreground md:text-left">
          &copy; {new Date().getFullYear()} Shivam Raj. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/shivamrz" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/shivamrz/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=rajshivam0118@gmail.com" target="_blank" rel="noopener noreferrer">
            <Mail className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">Email</span>
          </Link>
        </div>
      </div>
    </footer>
  );
}

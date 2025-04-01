'use client';

import Link from 'next/link';
import { Code, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThemeToggle from '@/components/ThemeToggle'; // Import ThemeToggle

const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between py-4 px-4 md:px-6">
        <div className="flex items-center gap-2">
          <Code className="h-6 w-6" />
          <span className="text-lg font-bold">Shivam Raj</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#about" className="text-sm font-medium hover:text-primary">
            About
          </Link>
          <Link href="#skills" className="text-sm font-medium hover:text-primary">
            Skills
          </Link>
          <Link href="#projects" className="text-sm font-medium hover:text-primary">
            Projects
          </Link>
          <Link href="#contact" className="text-sm font-medium hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link href="https://github.com/shivamrz" target="_blank" rel="noopener noreferrer">
            <Github className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">GitHub</span>
          </Link>
          <Link href="https://www.linkedin.com/in/shivamrz/" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-5 w-5 hover:text-primary" />
            <span className="sr-only">LinkedIn</span>
          </Link>
          <Button asChild>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajshivam0118@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              Email
            </a>
          </Button>
          <ThemeToggle /> {/* Theme toggle button added here */}
        </div>
      </div>
    </header>
  );
};

export default Header;

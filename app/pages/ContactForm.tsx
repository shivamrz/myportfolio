"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Send, Mail, Github, Linkedin } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("Error sending message.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Something went wrong!");
    }
  };

  return (
    <section id="contact" className="py-12 md:py-24">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="inline-flex items-center rounded-lg bg-muted px-3 py-1 text-sm font-medium mb-4">
            <Send className="mr-1 h-4 w-4" /> Contact
          </div>
          <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
          <p className="text-muted-foreground mt-4 max-w-[58rem]">
            Have a project in mind or want to discuss potential opportunities? I'd love to hear from you!
          </p>
        </div>

        <div className="mx-auto max-w-[58rem]">
          <Card>
            <CardHeader>
              <CardTitle>Send Me a Message</CardTitle>
              <CardDescription>Fill out the form below and I'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="grid gap-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">Name</label>
                    <input id="name" value={formData.name} onChange={handleChange} placeholder="Your name" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">Email</label>
                    <input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="Your email" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                  <input id="subject" value={formData.subject} onChange={handleChange} placeholder="Subject" className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">Message</label>
                  <textarea id="message" value={formData.message} onChange={handleChange} placeholder="Your message" rows={4} className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus-visible:ring-2" />
                </div>
                <CardFooter>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </Button>
                </CardFooter>
              </form>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Mail className="h-5 w-5" />
                <CardTitle className="text-base">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://mail.google.com/mail/?view=cm&fs=1&to=rajshivam0118@gmail.com" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  rajshivam0118@gmail.com
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Github className="h-5 w-5" />
                <CardTitle className="text-base">GitHub</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://github.com/shivamrz" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  github.com/shivamrz
                </a>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-2">
                <Linkedin className="h-5 w-5" />
                <CardTitle className="text-base">LinkedIn</CardTitle>
              </CardHeader>
              <CardContent>
                <a href="https://www.linkedin.com/in/shivamrz/" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                  linkedin.com/in/shivamrz
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

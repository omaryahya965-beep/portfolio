"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Navbar } from "@/components/navbar"
import { TypingAnimation } from "@/components/typing-animation"
import { ContactForm } from "@/components/contact-form"
import {
  Github,
  Linkedin,
  Instagram,
  Facebook,
  Code,
  Smartphone,
  Brain,
  Mail,
  MapPin,
  ExternalLink,
  Server,
} from "lucide-react"
import Image from "next/image"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section id="home" className="min-h-[100dvh] flex items-center justify-center px-4 pt-16">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Hero Text */}
            <div className="order-2 lg:order-1 space-y-6 animate-fade-in-up text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-serif font-bold text-foreground">
                Hello, It's Me
                <br />
                <span className="text-primary">Omar Yahya</span>
              </h1>

              <div className="text-xl md:text-2xl text-muted-foreground">
                I'm a{" "}
                <TypingAnimation
                  texts={["Full-Stack Developer", "Computer Engineering Student", "Problem Solver"]}
                  className="text-secondary font-semibold"
                />
              </div>

              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                A Computer Engineering student at Birzeit University, currently in my fourth year, with solid
                experience in full-stack web development, backend systems, and digital systems design. I am
                dedicated to engineering practical, high-quality solutions and continuously advancing my technical
                expertise.
              </p>

              {/* Social Links */}
              <div className="flex gap-4 justify-center lg:justify-start">
                <a
                  href="https://github.com/omaryahya965-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full border-2 border-primary flex items-center justify-center text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                >
                  <Facebook size={20} />
                </a>
              </div>

              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg"
                onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              >
                Get in Touch
              </Button>
            </div>

            {/* Hero Image */}
            <div className="order-1 lg:order-2 flex justify-center">
              <div className="relative">
                <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-2xl overflow-hidden border-4 border-primary shadow-2xl animate-float">
                  <Image
                    src="/images/omar-profile.png"
                    alt="Omar Yahya - Computer Engineering Student"
                    width={384}
                    height={384}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 border-4 border-secondary border-l-0 border-b-0"></div>
                <div className="absolute -bottom-4 -left-4 w-8 h-8 border-4 border-secondary border-r-0 border-t-0"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">About Me</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* About Text */}
            <Card className="shadow-lg border-0 h-full bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary text-center">Who I Am</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  I am a Computer Engineering student at Birzeit University, currently in my fourth year, with solid
                  experience in full-stack web development, backend systems, and digital systems design. I have
                  independently designed, built, and deployed production-ready applications from the ground up —
                  spanning responsive user interfaces, database architecture, and secure authentication — and I
                  remain committed to continuously expanding my technical expertise through hands-on, real-world
                  projects.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-foreground">Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "HTML",
                      "CSS",
                      "JavaScript",
                      "React",
                      "Next.js",
                      "Node.js",
                      "Express.js",
                      "Django",
                      "REST APIs",
                      "PostgreSQL",
                      "Supabase",
                      "Verilog HDL",
                      "C",
                      "Java",
                    ].map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-primary text-primary-foreground px-4 py-2 text-sm font-medium hover:bg-primary/90 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="shadow-lg border-0 h-full flex flex-col bg-background">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-secondary text-center">Interests</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 flex-1 flex flex-col justify-center">
                {[
                  { icon: Code, text: "Full-Stack Web Development" },
                  { icon: Server, text: "Backend & Database Design" },
                  { icon: Brain, text: "Digital Systems & Hardware Design" },
                  { icon: Smartphone, text: "Application Deployment" },
                ].map((interest, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 p-4 bg-muted rounded-lg hover:bg-accent hover:text-accent-foreground transition-all duration-300 hover:translate-x-2"
                  >
                    <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                      <interest.icon size={18} className="text-primary-foreground" />
                    </div>
                    <span className="font-medium">{interest.text}</span>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">What I Do</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              I focus on creating modern, efficient solutions using the latest technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: "Frontend Development",
                description: "Building responsive, modern interfaces with React, Next.js, and JavaScript.",
                color: "bg-chart-1",
              },
              {
                icon: Server,
                title: "Backend Development",
                description: "Designing REST APIs and server-side logic with Node.js, Express.js, and Django.",
                color: "bg-chart-2",
              },
              {
                icon: Brain,
                title: "Database & Deployment",
                description: "Architecting and deploying full systems with PostgreSQL and Supabase.",
                color: "bg-chart-3",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <CardContent className="p-8 text-center">
                  <div
                    className={`w-16 h-16 ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 bg-card">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Projects</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A look at what I've built while learning and applying new technologies
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "School Management System",
                description:
                  "A full-stack, bilingual (Arabic/English) platform built for a real school — a public site for browsing grades, schedules, and study materials, plus role-based dashboards for admins and teachers to manage classes, grades, attendance, and files. Includes JWT authentication, QR-code access, and an admin analytics dashboard.",
                tags: ["Next.js", "React", "TypeScript", "Express.js", "Prisma", "PostgreSQL"],
                github: "https://github.com/omaryahya965-beep/School_Test",
                demo: "https://kafraqab-school.vercel.app",
                demoLabel: "Live Demo",
              },
              {
                title: "Internal Audit Recommendations Tracker",
                description:
                  "A full-stack, Arabic-first (RTL) platform for tracking the implementation of internal audit recommendations across local government units. Models a complete workflow — from audit reporting through department response, council ratification, action plans, and final verification — with a pluggable AI similarity engine to flag recurring recommendations.",
                tags: ["Next.js", "TypeScript", "Django", "DRF", "PostgreSQL", "JWT"],
                github: "https://github.com/omaryahya965-beep/Recommendation",
                demo: "https://recommendation-frontend-theta.vercel.app",
                demoLabel: "Live Demo",
              },
              {
                title: "Portfolio — First Edition",
                description:
                  "My first personal portfolio website, marking the starting point of my web development journey and the foundation that led to my current, more advanced work.",
                tags: ["HTML", "CSS"],
                github: "https://github.com/OmarYahya2/FirstProject",
                demo: "https://omaryahya2.github.io/FirstProject",
                demoLabel: "Live Site",
              },
            ].map((project) => (
              <Card
                key={project.title}
                className="shadow-lg border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col bg-background"
              >
                <CardHeader>
                  <CardTitle className="text-xl font-semibold text-foreground">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-col flex-1 space-y-4">
                  <p className="text-muted-foreground leading-relaxed flex-1">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                    >
                      <Github size={18} />
                      Source Code
                    </a>
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
                      >
                        {project.demoLabel}
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">Get in Touch</h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <h3 className="font-serif font-bold text-2xl mb-4">
                OmarYahya<span className="text-primary">.</span>
              </h3>
              <p className="text-background/80 mb-6 max-w-md">
                Computer Engineering student at Birzeit University, dedicated to full-stack web development and
                building well-engineered, production-ready software.
              </p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/omaryahya965-beep"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://www.linkedin.com/in/omar-yahya-48286a316/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="https://www.instagram.com/omar.yahya1/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Instagram size={18} />
                </a>
                <a
                  href="https://www.facebook.com/omar.yahya.7370"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center text-background hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <Facebook size={18} />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-background/80">
                <li>
                  <button
                    onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Home
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    About
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Services
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Projects
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                    className="hover:text-primary transition-colors"
                  >
                    Contact
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>omar.yahya965@gmail.com</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Ramallah, Palestine</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-background/20 mt-8 pt-8 text-center text-background/60">
            <p>&copy; 2026 Omar Yahya. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

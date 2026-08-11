import type { SVGProps } from "react";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Github,
  Linkedin,
  Mail,
  Phone,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import PortfolioStats from "@/components/portfolio-stats";

function MediumIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M4 6h3.2l4.8 8 4.8-8H21v12h-3.2v-8.8l-4.8 8.4-4.8-8.4V18H4V6Z" />
    </svg>
  );
}

function LinktreeIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <circle cx="12" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="18" r="3" />
      <path d="M12 9v3.5" />
      <path d="M8.5 15.5L12 12" />
      <path d="M15.5 15.5L12 12" />
    </svg>
  );
}

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* Hero Section */}
      <section className="relative md:min-h-screen flex items-center justify-center overflow-hidden md:pb-0 pb-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-block">
              <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                <span className="relative z-10">Software Developer</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 animate-pulse"></span>
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
              <span className="block">Hi, I'm</span>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Sai Teja
              </span>
            </h1>
            <p className="text-xl text-zinc-400 max-w-full sm:max-w-[600px]">
              I build scalable, enterprise-grade web applications with React and
              Spring Boot.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Button
                asChild
                className="relative overflow-hidden group bg-gradient-to-r from-purple-500 to-pink-500 border-0"
              >
                <Link
                  href="#projects"
                  className="relative z-10 flex items-center"
                >
                  View Projects{" "}
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
              >
                <Link href="#contact">Contact Me</Link>
              </Button>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                href="https://www.linkedin.com/in/saiteja1403/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link
                href="https://github.com/teja-1403"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://medium.com/@teja1403"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <MediumIcon className="h-5 w-5" />
                  <span className="sr-only">Medium</span>
                </Button>
              </Link>
              <Link
                href="https://linktr.ee/teja1403"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <LinktreeIcon className="h-5 w-5" />
                  <span className="sr-only">Linktree</span>
                </Button>
              </Link>
              <Link href="mailto:tejathelegend7@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <CreativeHero />
          </div>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 animate-bounce md:bottom-10 bottom-2">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="About Me"
            subtitle="My background and journey"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800">
                <img
                  src="/images/aboutme.png"
                  alt="Sai Teja"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-sm font-medium">
                      Available for work
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">
                  I’m a software developer with hands-on experience building
                  scalable, production-ready applications and contributing
                  across the full development lifecycle.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  My background spans Java full-stack development, React-based
                  frontend work, and Agile collaboration in environments that
                  value reliability and impact.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  I’m especially interested in building practical, user-focused
                  solutions and continuously growing as a developer.
                </p>
                <p className="text-lg text-zinc-300 mt-4">
                  Beyond coding, I’m passionate about weighted calisthenics,
                  community building, and documenting my learning journey.
                </p>

                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Name</div>
                    <div className="font-medium">Sai Teja T B V</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">tejathelegend7@gmail.com</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Location</div>
                    <div className="font-medium">Chennai, India</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">Availability</div>
                    <div className="font-medium text-green-500">
                      Open to opportunities
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-pink-500 hover:to-purple-500 border-0"
                  >
                    <a href="/resume.pdf" download>
                      Download Resume
                    </a>
                  </Button>
                  <Button
                    asChild
                    variant="outline"
                    className="border-zinc-700 text-pink-500 hover:text-pink-700 hover:border-zinc-500"
                  >
                    <a
                      href="https://flowcv.com/resume-template/69f1a3dbd09e8d4131574c52"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Get my resume template
                    </a>
                  </Button>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Medium posts Section */}
      <section id="medium-posts" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Articles"
            subtitle="Some of my recent posts"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Master Sliding Window with my Practice Sheet 🚀"
              description="A practical guide to mastering Sliding Window patterns with LeetCode problems and a curated practice sheet."
              tags={[
                "Data Structures",
                "Sliding Window Algorithm",
                "Programming",
                "LeetCode",
              ]}
              image="/images/post1.png"
              repoUrl="https://medium.com/@teja1403/master-sliding-window-with-my-practice-sheet-2e5186acfe99"
              primaryLabel="Read"
              primaryIcon="book"
            />
            <ProjectCard
              title="What 700+ LeetCode Problems Taught Me: Honest Reflections & Advice 😮‍💨"
              description="Lessons from 700+ LeetCode problems on DSA, problem-solving, consistency, AI, and interview preparation."
              tags={["LeetCode", "Programming", "Data Structures", "Coding"]}
              image="/images/post2.png"
              repoUrl="https://medium.com/@teja1403/what-600-leetcode-problems-taught-me-honest-reflections-advice-3122deb44b42"
              primaryLabel="Read"
              primaryIcon="book"
            />
            <ProjectCard
              title="Why Programming Uses Single Quotes for Characters and Double Quotes for Strings?"
              description="An easy explanation of characters vs. strings, covering quotes, types, compiler clarity, and history."
              tags={["Character", "String", "Programming", "Syntax", "Coding"]}
              image="/images/post3.png"
              repoUrl="https://medium.com/@teja1403/why-programming-uses-single-quotes-for-characters-and-double-quotes-for-strings-5482432ede44"
              primaryLabel="Read"
              primaryIcon="book"
            />
            <ProjectCard
              title="How to Start a Journaling Habit You’ll Actually Stick To"
              description="A simple journaling system using monthly goals, daily highlights, habit tracking, and reflection."
              tags={[
                "Journaling",
                "Self Improvement",
                "Habits",
                "Productivity",
                "Daily Life",
              ]}
              image="/images/post4.png"
              repoUrl="https://medium.com/@teja1403/how-to-start-a-journaling-habit-youll-actually-stick-to-f38c560d629c"
              primaryLabel="Read"
              primaryIcon="book"
            />
            <ProjectCard
              title="Why Are Sorting Algorithms Still Asked in Interviews?"
              description="Why sorting algorithms remain common in interviews and what they reveal about problem-solving and optimization."
              tags={[
                "Sorting Algorithms",
                "Interview Tips",
                "Interview",
                "Data Structures",
                "Quick Sort",
              ]}
              image="/images/post5.png"
              repoUrl="https://medium.com/@teja1403/why-are-sorting-algorithms-still-asked-in-interviews-9178beb8ac05"
              primaryLabel="Read"
              primaryIcon="book"
            />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="My Skills"
            subtitle="Technologies I work with"
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            <SkillBadge name="Java" level={90} />
            <SkillBadge name="Spring Boot" level={88} />
            <SkillBadge name="React.js" level={88} />
            <SkillBadge name="TypeScript" level={90} />
            <SkillBadge name="JavaScript" level={85} />
            <SkillBadge name="HTML/CSS" level={85} />
            <SkillBadge name="Python" level={85} />
            <SkillBadge name="SQL" level={88} />
            <SkillBadge name="PostgreSQL" level={85} />
            <SkillBadge name="Git & GitHub" level={92} />
            <SkillBadge name="Azure DevOps" level={85} />
            <SkillBadge name="AWS" level={75} />
            <SkillBadge name="CI/CD" level={82} />
            <SkillBadge name="Selenium" level={80} />
            <SkillBadge name="Postman" level={82} />
            <SkillBadge name="OOP" level={90} />
            <SkillBadge name="Data Structures & Algorithms" level={91} />
            <SkillBadge name="Agile SDLC" level={87} />
            <SkillBadge name="Machine Learning" level={82} />
            <SkillBadge name="Deep Learning" level={78} />
            <SkillBadge name="NLP" level={80} />
            <SkillBadge name="EDA" level={80} />
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-yellow-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Featured Projects"
            subtitle="Some of my recent work"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            <ProjectCard
              title="Personal Portfolio Website"
              description="A responsive developer portfolio showcasing my skills, projects, experience, and learning journey."
              tags={["Next.js", "Tailwind CSS", "Framer Motion", "TypeScript"]}
              image="/images/project1.png"
              demoUrl="https://github.com/teja-1403/portfolio-website"
              repoUrl="https://github.com/teja-1403/portfolio-website"
            />
            <ProjectCard
              title="Breast Cancer Detection using Machine Learning"
              description="A machine learning system for classifying breast thermal images as Benign, Malignant, or Normal."
              tags={["Python", "Scikit-learn", "Machine Learning", "OpenCV"]}
              image="/images/project2.png"
              repoUrl="https://github.com/teja-1403/Breast-Cancer-Detection-using-Python"
            />
            <ProjectCard
              title="Multilingual Translation using NLP"
              description="A context-aware translation system for Indian languages using deep learning and speech technologies."
              tags={["Python", "NLP", "Deep Learning", "BERT"]}
              image="/images/project3.png"
              repoUrl="https://github.com/teja-1403/Multilingual-Translation-NLP"
            />
            <ProjectCard
              title="Cervical Cancer Detection using Deep Learning"
              description="A deep learning system for multiclass cervical cell classification using image segmentation and computer vision."
              tags={["Python", "TensorFlow", "Keras", "Computer Vision"]}
              image="/images/project4.png"
              repoUrl="https://github.com/teja-1403/Cervical_Cancer-Detection-using-Python"
            />
            <ProjectCard
              title="News Article Summarization"
              description="A comparative NLP project evaluating PEGASUS and BART for automated news article summarization."
              tags={["Python", "NLP", "PEGASUS", "BART"]}
              image="/images/project5.png"
              repoUrl="https://github.com/teja-1403/TextSummarization-Using-PEGASUS-BART"
            />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading
            title="Work Experience"
            subtitle="My professional journey"
          />

          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="container relative z-10">
          <SectionHeading title="Get In Touch" subtitle="Let's work together" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">tejathelegend7@gmail.com</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Phone className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Phone</div>
                    <div className="font-medium">+91 93633 31206</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">
                      linkedin.com/in/saiteja1403
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">github.com/teja-1403</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">Current Status</h4>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span>Available for full-time Software Engineer roles</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                S
              </span>
              <span className="text-white">T</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} Sai Teja. All rights reserved.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href="https://www.linkedin.com/in/saiteja1403/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </Link>
            <Link
              href="https://github.com/teja-1403"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
            </Link>
            <Link
              href="https://medium.com/@teja1403"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <MediumIcon className="h-5 w-5" />
                <span className="sr-only">Medium</span>
              </Button>
            </Link>
            <Link
              href="https://linktr.ee/teja1403"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <LinktreeIcon className="h-5 w-5" />
                <span className="sr-only">Linktree</span>
              </Button>
            </Link>
            <Link href="mailto:tejathelegend7@gmail.com">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
              >
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </Button>
            </Link>
          </div>
        </div>
      </footer>

      {/* Public Portfolio Analytics */}
      <PortfolioStats />
    </div>
  );
}

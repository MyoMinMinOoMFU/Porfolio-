"use client";

import { useState } from "react";
import Image from "next/image";
import profilePhoto from "../../photos/745522224_1336557091412622_1441715904682668060_n.jpg";
import linuxFoundationCertificatePhoto from "../../photos/1784137287492-0c523930-29f0-41e4-b4ef-f171761c9548_1.jpg";
import ibmCertificatePhoto from "../../photos/1784135999525-273fe371-81d9-4d92-9d35-a6daa5087a39_1.jpg";
import umichCertificatePhoto from "../../photos/1784136498812-5cccc834-d646-41e7-b120-6cb251615952_1.jpg";
import deeplearningCertificatePhoto from "../../photos/1784136879391-acecc4ad-f650-49bf-8a66-f118b004939a_1.jpg";
import sequenceModelsCertificatePhoto from "../../photos/1784137922107-11a54c7b-5dcf-4aef-8ea5-f803010017af_1.jpg";
import googleFoundationsCertificatePhoto from "../../photos/1784138484461-abd5f056-9ad9-4e9a-8788-20648ab856c0_1.jpg";
import googleAskQuestionsCertificatePhoto from "../../photos/1784138895235-0d4539df-c306-4e1a-b4d0-9cdaf8e2b015_1.jpg";

const education = [
  {
    school: "Mae Fah Luang University",
    degree: "Bachelor of Engineering in Software Engineering",
    detail: "Thailand | Current Student",
    notes: [
      "Data Structures and Algorithms",
      "Software Engineering",
      "Database Systems",
      "Object-Oriented Programming",
      "Mobile Application Development",
    ],
  },
  {
    school: "University of Medicine 2, Yangon",
    degree: "Medicine Program (Completed 2.5 Years)",
    detail: "Myanmar",
    notes: [
      "Completed foundational medical and clinical coursework before transitioning to software engineering.",
      "Strengthened critical thinking, teamwork, communication, and problem-solving skills.",
    ],
  },
];

const skillGroups = [
  {
    title: "Programming Languages",
    items: ["Python", "Dart", "SQL"],
  },
  {
    title: "Mobile Development",
    items: ["Flutter"],
  },
  {
    title: "Cloud & Operating Systems",
    items: [
      "Linux (LFS101 Certified)",
      "Linux Command Line",
      "Bash Shell",
      "Bash Scripting (Fundamentals)",
      "Linux Networking Fundamentals",
      "Cloud Computing Fundamentals (Learning)",
    ],
  },
  {
    title: "Software Development Tools",
    items: ["Git", "GitHub", "VS Code", "Android Studio", "Postman"],
  },
  {
    title: "Software Engineering Concepts",
    items: ["Object-Oriented Programming", "REST API", "SDLC", "Probability and Statistics", "Version Control with Git"],
  },
];

const projects = [
  {
    name: "MatchForU",
    overview:
      "A mobile application designed to connect users based on shared interests and preferences through a clean and user-friendly interface.",
    features: [
      "User authentication",
      "User profile management",
      "Interest-based matching",
      "Responsive mobile interface",
      "Smooth navigation",
    ],
    tech: ["Flutter", "Dart", "SQL", "Git & GitHub", "Figma"],
    learned: [
      "Mobile application architecture",
      "Flutter UI development",
      "State management",
      "Team collaboration using Git",
      "Software development best practices",
    ],
  },
  {
    name: "TripNest",
    overview:
      "A travel planning mobile application that helps users organize trips, manage itineraries, and explore destinations efficiently.",
    features: [
      "Trip planning",
      "Travel itinerary management",
      "Destination browsing",
      "Responsive mobile design",
      "User-friendly interface",
    ],
    tech: ["Flutter", "Dart", "SQL", "Postman", "Git & GitHub", "Figma"],
    learned: [
      "API testing and integration",
      "Mobile application navigation",
      "UI/UX implementation",
      "Project organization",
      "Software engineering workflow",
    ],
  },
];

const certifications = [
  {
    provider: "The Linux Foundation",
    title: "Introduction to Linux (LFS101)",
    skills: ["Linux", "Bash", "Operating Systems", "Networking Fundamentals"],
  },
  {
    provider: "IBM",
    title: "Databases and SQL for Data Science with Python",
    skills: ["SQL", "Relational Databases", "Python", "Database Queries"],
  },
  {
    provider: "University of Michigan",
    title: "Python for Everybody Specialization",
    skills: ["Python Programming", "APIs", "Databases", "Data Structures"],
  },
  {
    provider: "DeepLearning.AI",
    title: "Neural Networks and Deep Learning",
    skills: ["Deep Learning", "TensorFlow", "Neural Networks"],
  },
  {
    provider: "DeepLearning.AI",
    title: "Sequence Models",
    skills: ["RNN", "LSTM", "GRU", "Natural Language Processing"],
  },
  {
    provider: "Google",
    title: "Foundations: Data, Data, Everywhere",
    skills: ["Data Analysis", "Analytical Thinking", "Data-Driven Decision Making"],
  },
  {
    provider: "Google",
    title: "Ask Questions to Make Data-Driven Decisions",
    skills: ["Data Analysis", "Analytical Thinking", "Data-Driven Decision Making"],
  },
];

const softSkills = [
  "Problem Solving",
  "Analytical Thinking",
  "Teamwork",
  "Communication",
  "Adaptability",
  "Time Management",
  "Continuous Learning",
  "Attention to Detail",
];

const languages = ["English (Professional Working Proficiency)", "Burmese (Native)"];

const goals = [
  "Software Engineering Internship",
  "Backend Development",
  "Cloud Computing",
  "Scalable Software Systems",
];

export default function Home() {
  const [activeCertificate, setActiveCertificate] = useState<null | "linuxfoundation" | "ibm" | "umich" | "deeplearning" | "sequence" | "googleFoundations" | "googleAskQuestions">(null);

  return (
    <main className="min-h-screen text-slate-100">
      <div className="mx-auto min-h-screen w-full max-w-7xl px-6 py-6 sm:px-8 lg:px-10">
        <div className="rounded-[2.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)]/70 p-4 shadow-2xl shadow-slate-950/30 backdrop-blur sm:p-6">
          <header className="flex flex-col gap-6 rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface)] px-6 py-5 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-slate-400">Portfolio</p>
              <p className="mt-1 text-lg font-semibold text-white">Myo Min Min Oo</p>
              <p className="mt-1 text-sm text-slate-400">Software Engineering Student | Flutter Developer | Aspiring Cloud Engineer</p>
            </div>
            <nav className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-400">
              <a className="transition-colors hover:text-cyan-300" href="#about">
                About
              </a>
              <a className="transition-colors hover:text-cyan-300" href="#education">
                Education
              </a>
              <a className="transition-colors hover:text-cyan-300" href="#projects">
                Projects
              </a>
              <a className="transition-colors hover:text-cyan-300" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <section className="grid gap-8 py-10 lg:grid-cols-[1.25fr_0.75fr] lg:items-center lg:py-16">
            <div className="space-y-8">
              <div className="inline-flex w-fit items-center gap-3 rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-2 text-sm text-cyan-100">
                Software Engineering Student | Flutter Developer | Aspiring Cloud Engineer
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
              </div>

              <div className="space-y-5">
                <h1 className="max-w-4xl text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
                  Software Engineering Student passionate about Flutter, Cloud Computing, and Scalable Software Systems.
                </h1>
                <p className="max-w-2xl text-lg leading-8 text-slate-400 sm:text-xl">
                  Hello! I am Myo Min Min Oo, a Software Engineering student at Mae Fah Luang University. I focus on Flutter, Python, SQL, Linux, cloud fundamentals, and software engineering principles while continuously learning how to build reliable and scalable systems.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="/mmmoresume.pdf"
                  download
                  className="inline-flex h-12 items-center justify-center rounded-full bg-cyan-400 px-6 text-sm font-semibold text-slate-950 transition-transform hover:-translate-y-0.5 hover:bg-cyan-300"
                >
                  Download Resume
                </a>
                <a
                  href="#projects"
                  className="inline-flex h-12 items-center justify-center rounded-full border border-slate-600 bg-[color:var(--surface)] px-6 text-sm font-semibold text-white transition-colors hover:border-violet-400/50 hover:bg-[color:var(--surface)]/90"
                >
                  View Projects
                </a>
              </div>
            </div>

            <aside className="space-y-4 rounded-[2rem] border border-slate-700/40 bg-[color:var(--surface)] p-6">
              <div className="overflow-hidden rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface-strong)]">
                <Image
                  src={profilePhoto}
                  alt="Myo Min Min Oo portrait"
                  className="h-48 w-full object-cover object-center sm:h-64 md:h-72"
                  priority
                />
              </div>

              <div className="rounded-[1.5rem] border border-slate-700/40 bg-[color:var(--surface-strong)] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Location</p>
                <p className="mt-4 text-2xl font-semibold text-white">Chiang Rai, Thailand</p>
                <p className="mt-3 text-sm leading-7 text-slate-400">
                  Long-term goal: become a Cloud Engineer designing secure, reliable, and high-performance cloud solutions.
                </p>
              </div>

            </aside>
          </section>

          <section id="about" className="grid gap-4 border-t border-slate-700/40 py-8 lg:grid-cols-[1fr_1fr] lg:py-12">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">About Me</p>
              <p className="mt-3 max-w-xl text-lg leading-8 text-slate-400">
                Hello! I&apos;m Myo Min Min Oo, a Software Engineering student at Mae Fah Luang University with a passion for building mobile applications, learning cloud technologies, and solving real-world problems through software.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
                Before pursuing software engineering, I studied Medicine for 2.5 years at the University of Medicine 2, Yangon, Myanmar. This experience developed my analytical thinking, discipline, attention to detail, and problem-solving abilities. Inspired by technology and its ability to create meaningful impact, I decided to transition into software engineering.
              </p>
              <p className="mt-4 max-w-xl text-lg leading-8 text-slate-400">
                I enjoy developing mobile applications using Flutter, learning modern software engineering practices, and continuously expanding my knowledge in backend development, Linux, cloud computing, and software architecture.
              </p>
            </div>

            <div className="rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface)] p-6">
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Career Objective</p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I am seeking a Software Engineering Internship where I can apply my knowledge of Flutter, Python, SQL, and software engineering principles while learning from experienced developers.
              </p>
              <p className="mt-4 text-sm leading-7 text-slate-400">
                I am particularly interested in backend development, cloud computing, and scalable software systems.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <span key={goal} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                    {goal}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="education" className="py-8 lg:py-12">
            <div className="flex items-end justify-between gap-6 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Education</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Academic background and relevant coursework.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {education.map((item) => (
                <article key={item.school} className="rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface)] p-6">
                  <p className="text-sm text-cyan-300">{item.detail}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{item.school}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-400">{item.degree}</p>
                  <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-400">
                    {item.notes.map((note) => (
                      <li key={note}>• {note}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 border-t border-slate-700/40 py-8 sm:grid-cols-2 lg:grid-cols-4">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl border border-slate-700/40 bg-[color:var(--surface)] p-5">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">{group.title}</p>
                <ul className="mt-4 space-y-2 text-sm leading-7 text-slate-300">
                  {group.items.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </section>

          <section id="projects" className="py-8 lg:py-12">
            <div className="flex items-end justify-between gap-6 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/80">Projects</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Mobile app work focused on Flutter, SQL, and clean user experience.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {projects.map((project) => (
                <article key={project.name} className="rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface)] p-6">
                  <p className="text-sm text-cyan-300">Project</p>
                  <h3 className="mt-3 text-2xl font-semibold text-white">{project.name}</h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{project.overview}</p>

                  <div className="mt-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Features</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                      {project.features.map((feature) => (
                        <li key={feature}>• {feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Technologies</p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tech.map((tech) => (
                        <span key={tech} className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-medium text-cyan-100">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-sm uppercase tracking-[0.24em] text-slate-400">What I learned</p>
                    <ul className="mt-3 space-y-2 text-sm leading-7 text-slate-300">
                      {project.learned.map((item) => (
                        <li key={item}>• {item}</li>
                      ))}
                    </ul>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section id="certifications" className="py-8 lg:py-12">
            <div className="flex items-end justify-between gap-6 pb-6">
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Certifications</p>
                <h2 className="mt-3 text-3xl font-semibold text-white sm:text-4xl">
                  Learning across data, deep learning, Python, and Linux.
                </h2>
              </div>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {certifications.map((cert) => (
                <article key={cert.title} className="rounded-[1.75rem] border border-slate-700/40 bg-[color:var(--surface)] p-6">
                  <p className="text-sm text-cyan-300">{cert.provider}</p>
                  {cert.provider === "The Linux Foundation" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("linuxfoundation")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Introduction to Linux certificate"
                    >
                      <Image
                        src={linuxFoundationCertificatePhoto}
                        alt="Introduction to Linux certificate"
                        className="h-56 w-full object-cover object-center"
                      />
                    </button>
                  ) : null}
                  {cert.provider === "IBM" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("ibm")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Databases and SQL for Data Science with Python certificate"
                    >
                      <Image
                        src={ibmCertificatePhoto}
                        alt="Databases and SQL for Data Science with Python certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : cert.provider === "DeepLearning.AI" && cert.title === "Neural Networks and Deep Learning" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("deeplearning")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Neural Networks and Deep Learning certificate"
                    >
                      <Image
                        src={deeplearningCertificatePhoto}
                        alt="Neural Networks and Deep Learning certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : cert.provider === "DeepLearning.AI" && cert.title === "Sequence Models" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("sequence")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Sequence Models certificate"
                    >
                      <Image
                        src={sequenceModelsCertificatePhoto}
                        alt="Sequence Models certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : cert.provider === "University of Michigan" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("umich")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Python for Everybody Specialization certificate"
                    >
                      <Image
                        src={umichCertificatePhoto}
                        alt="Python for Everybody Specialization certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : cert.provider === "Google" && cert.title === "Foundations: Data, Data, Everywhere" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("googleFoundations")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Foundations: Data, Data, Everywhere certificate"
                    >
                      <Image
                        src={googleFoundationsCertificatePhoto}
                        alt="Foundations: Data, Data, Everywhere certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : cert.provider === "Google" && cert.title === "Ask Questions to Make Data-Driven Decisions" ? (
                    <button
                      type="button"
                      onClick={() => setActiveCertificate("googleAskQuestions")}
                      className="mt-4 block w-full overflow-hidden rounded-[1.25rem] border border-slate-700/40 bg-[color:var(--surface-strong)] text-left transition-transform hover:-translate-y-0.5 hover:border-cyan-400/40 focus:outline-none focus:ring-2 focus:ring-cyan-300/70"
                      aria-label="View Ask Questions to Make Data-Driven Decisions certificate"
                    >
                      <Image
                        src={googleAskQuestionsCertificatePhoto}
                        alt="Ask Questions to Make Data-Driven Decisions certificate"
                        className="h-40 w-full object-cover object-center sm:h-48 md:h-56"
                      />
                    </button>
                  ) : null}
                  <h3 className="mt-2 text-xl font-semibold text-white">{cert.title}</h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <span key={skill} className="rounded-full border border-slate-600 bg-[color:var(--surface-strong)] px-3 py-1 text-xs text-slate-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="grid gap-4 border-t border-slate-700/40 py-8 lg:grid-cols-[1fr_1fr] lg:py-12">
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Soft Skills</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span key={skill} className="rounded-full border border-slate-600 bg-[color:var(--surface)] px-3 py-2 text-sm text-slate-200">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Languages</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {languages.map((language) => (
                  <span key={language} className="rounded-full border border-slate-600 bg-[color:var(--surface)] px-3 py-2 text-sm text-slate-200">
                    {language}
                  </span>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-8 lg:py-12">
            <div className="rounded-[2rem] border border-cyan-400/20 bg-cyan-400/10 p-8 sm:p-10">
              <p className="text-sm uppercase tracking-[0.24em] text-cyan-200/90">Contact</p>
              <div className="mt-4 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
                <div>
                  <h2 className="max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                    Thank you for taking the time to review my portfolio.
                  </h2>
                  <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-400">
                    I look forward to contributing my skills, enthusiasm, and commitment as a Software Engineering Intern.
                  </p>
                </div>
                <div className="flex flex-col gap-3">
                  <a
                    href="mailto:thihadana9999@gmail.com"
                    className="inline-flex h-12 items-center justify-center rounded-full bg-violet-500 px-6 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-violet-400"
                  >
                    thihadana9999@gmail.com
                  </a>
                  <a
                    href="https://github.com/MyoMinMinOoMFU"
                    className="inline-flex h-12 items-center justify-center rounded-full border border-slate-600 bg-[color:var(--surface)] px-6 text-sm font-semibold text-white transition-colors hover:border-cyan-400/50 hover:bg-[color:var(--surface)]/90"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </section>

          <footer className="flex flex-col gap-3 border-t border-slate-700/40 py-6 text-sm text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>MMMO</p>
            <p>PORTFOLIO</p>
          </footer>
        </div>
      </div>

      {activeCertificate ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm"
          onClick={() => setActiveCertificate(null)}
          role="presentation"
        >
          <div
            className="relative w-full max-w-5xl overflow-hidden rounded-[1.5rem] border border-slate-700/50 bg-slate-900 shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate preview"
          >
            <button
              type="button"
              onClick={() => setActiveCertificate(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-slate-600/70 bg-slate-950/80 px-3 py-1 text-sm text-white transition-colors hover:border-cyan-400/60 hover:text-cyan-200"
            >
              Close
            </button>
            <Image
              src={
                activeCertificate === "linuxfoundation"
                  ? linuxFoundationCertificatePhoto
                  : activeCertificate === "umich"
                  ? umichCertificatePhoto
                  : activeCertificate === "sequence"
                    ? sequenceModelsCertificatePhoto
                    : activeCertificate === "googleFoundations"
                    ? googleFoundationsCertificatePhoto
                    : activeCertificate === "googleAskQuestions"
                    ? googleAskQuestionsCertificatePhoto
                  : activeCertificate === "deeplearning"
                    ? deeplearningCertificatePhoto
                    : ibmCertificatePhoto
              }
              alt={
                activeCertificate === "linuxfoundation"
                  ? "Introduction to Linux certificate enlarged preview"
                  : activeCertificate === "umich"
                  ? "Python for Everybody Specialization certificate enlarged preview"
                  : activeCertificate === "sequence"
                    ? "Sequence Models certificate enlarged preview"
                    : activeCertificate === "googleFoundations"
                    ? "Foundations: Data, Data, Everywhere certificate enlarged preview"
                    : activeCertificate === "googleAskQuestions"
                    ? "Ask Questions to Make Data-Driven Decisions certificate enlarged preview"
                  : activeCertificate === "deeplearning"
                    ? "Neural Networks and Deep Learning certificate enlarged preview"
                  : "Databases and SQL for Data Science with Python certificate enlarged preview"
              }
              className="h-auto w-full max-h-[85vh] object-contain"
              priority
            />
          </div>
        </div>
      ) : null}
    </main>
  );
}


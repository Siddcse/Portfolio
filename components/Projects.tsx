"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { MouseEvent, useState } from "react";

const projects = [
  {
    name: "ShopFlow",
    type: "E-commerce",
    description:
      "A polished commerce platform with product discovery, secure checkout, and merchant-friendly content workflows.",
    tags: ["Next.js", "Stripe", "Prisma"],
    live: "https://shopflow.dev",
    github: "https://github.com/siddharth-chaurasiya/shopflow",
  },
  {
    name: "ChatAI",
    type: "Real-time AI chat",
    description: "Streaming AI conversations with responsive history, message states, and a tidy developer UX.",
    tags: ["React", "OpenAI API"],
    live: "https://chatai.dev",
    github: "https://github.com/siddharth-chaurasiya/chatai",
  },
  {
    name: "Finance Tracker",
    type: "Dashboard",
    description: "A clean analytics dashboard for budgets, spending patterns, and financial goals.",
    tags: ["React", "Chart.js"],
    live: "https://finance-tracker.dev",
    github: "https://github.com/siddharth-chaurasiya/finance-tracker",
  },
  {
    name: "Task Manager",
    type: "Mobile app",
    description: "Cross-platform tasks with Firebase sync, reminders, and lightweight collaboration.",
    tags: ["React Native", "Firebase"],
    live: "https://task-manager.dev",
    github: "https://github.com/siddharth-chaurasiya/task-manager",
  },
];

function ProjectCard({ project, index }: { project: (typeof projects)[number]; index: number }) {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (event: MouseEvent<HTMLElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 10;
    const rotateX = ((0.5 - y / rect.height) * 10);
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 38 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.55, delay: index * 0.1, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => setTransform("rotateX(0deg) rotateY(0deg)")}
      style={{ transform }}
      className="group relative flex min-h-[21rem] overflow-hidden rounded-[2rem] border border-brand/10 bg-white p-7 shadow-[0_22px_70px_rgba(48,5,26,0.07)] transition duration-300 hover:-translate-y-1 hover:scale-[1.01] dark:border-white/15 dark:bg-white/[0.1] dark:shadow-black/20"
    >
      <div className="pointer-events-none absolute inset-0 rounded-[2rem] opacity-0 transition duration-300 group-hover:opacity-100">
        <div className="absolute inset-x-[-60%] top-0 h-px bg-gradient-to-r from-transparent via-brand/40 to-transparent" />
        <div className="absolute -inset-px rounded-[2rem] bg-[linear-gradient(120deg,transparent,rgba(48,5,26,0.12),transparent)] opacity-70" />
      </div>

      <div className="relative z-10 flex h-full flex-col">
        <p className="mb-4 text-sm font-semibold text-brand dark:text-blush">{project.type}</p>
        <h3 className="font-heading text-3xl font-bold tracking-normal text-ink dark:text-white">{project.name}</h3>
        <p className="mt-4 text-sm leading-7 text-muted dark:text-white/78">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-brand/5 px-3 py-1.5 text-xs font-semibold text-brand dark:bg-blush/15 dark:text-blush">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-3 pt-8">
          <a
            href={project.live}
            className="inline-flex items-center gap-2 rounded-full bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:shadow-lg hover:shadow-brand/20"
          >
            <ExternalLink size={16} />
            Live
          </a>
          <a
            href={project.github}
            className="inline-flex items-center gap-2 rounded-full border border-brand/10 px-4 py-2 text-sm font-semibold text-brand transition hover:bg-brand/5 dark:border-white/15 dark:text-white dark:hover:bg-white/10"
          >
            <Github size={16} />
            GitHub
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55 }}
          className="mb-12 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand dark:text-blush">Projects</p>
          <h2 className="font-heading text-balance text-4xl font-bold tracking-normal text-ink dark:text-white sm:text-5xl">
            Selected builds with product polish and technical depth.
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4" style={{ perspective: "1200px" }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

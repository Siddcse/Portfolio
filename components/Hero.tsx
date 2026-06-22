"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Rocket } from "lucide-react";
import { useEffect, useState } from "react";

const roles = ["Open Source Contributor", "Software Engineer", "Data Scientist"];
const heading = "Hi, I'm Siddharth";
const tech = ["React", "Next.js", "Node.js", "TypeScript", "PostgreSQL", "AWS"];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [visibleChars, setVisibleChars] = useState(0);
  const currentRole = roles[roleIndex];

  useEffect(() => {
    let pauseTimeout: ReturnType<typeof setTimeout> | null = null;
    let typing: ReturnType<typeof setInterval> | null = null;

    typing = setInterval(() => {
      setVisibleChars((count) => {
        if (count >= currentRole.length) {
          if (typing) clearInterval(typing);
          pauseTimeout = setTimeout(() => {
            setVisibleChars(0);
            setRoleIndex((index) => (index + 1) % roles.length);
          }, 1200);
          return count;
        }
        return count + 1;
      });
    }, 70);

    return () => {
      if (typing) clearInterval(typing);
      if (pauseTimeout !== null) clearTimeout(pauseTimeout);
    };
  }, [currentRole]);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-4 pb-20 pt-32 sm:px-6 lg:px-8"
    >
      <motion.div
        aria-hidden="true"
        animate={{
          scale: [1, 1.12, 0.98, 1],
          borderRadius: ["42% 58% 58% 42%", "58% 42% 48% 52%", "46% 54% 42% 58%", "42% 58% 58% 42%"],
          rotate: [0, 8, -6, 0],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 bg-[radial-gradient(circle_at_30%_30%,rgba(236,72,153,0.22),rgba(48,5,26,0.15)_45%,rgba(124,58,237,0.12)_70%,transparent_78%)] blur-2xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-5 inline-flex items-center gap-2 rounded-full border border-brand/10 bg-white/70 px-4 py-2 text-sm font-medium text-brand shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white"
        >
          <Rocket size={16} />
          Building fast, beautiful web & mobile apps.
        </motion.p>

        <motion.h1
          aria-label={`${heading} waving hand`}
          className="font-heading mx-auto max-w-5xl text-balance text-5xl font-bold leading-[1.02] tracking-normal text-ink dark:text-white sm:text-7xl lg:text-8xl"
        >
          {heading.split("").map((character, index) => (
            <motion.span
              key={`${character}-${index}`}
              initial={{ opacity: 0, y: 34, rotateX: -55 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 18,
                delay: 0.04 * index,
              }}
              className="inline-block"
            >
              {character === " " ? "\u00A0" : character}
            </motion.span>
          ))}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1 }}
          className="mx-auto mt-7 min-h-10 max-w-3xl text-xl text-muted dark:text-white/78 sm:text-2xl"
        >
          <span className="font-medium text-brand dark:text-blush">{currentRole.slice(0, visibleChars)}</span>
          <span className="ml-1 inline-block h-6 w-px animate-pulse bg-brand align-middle dark:bg-blush" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.15 }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#projects"
            className="inline-flex w-full items-center justify-center rounded-full bg-brand px-7 py-3.5 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition hover:-translate-y-1 hover:shadow-brand/35 sm:w-auto"
          >
            View Projects
          </a>
          <a
            href="/Siddharth_Chaurasiya_CV.pdf"
            download
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-brand/15 bg-white px-7 py-3.5 text-sm font-semibold text-brand shadow-sm transition hover:-translate-y-1 hover:border-brand/30 hover:shadow-lg hover:shadow-brand/10 dark:border-white/15 dark:bg-white/10 dark:text-white sm:w-auto"
          >
            <Download size={18} />
            Download CV
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 1.25 }}
          className="mx-auto mt-9 flex max-w-3xl flex-wrap justify-center gap-3"
        >
          {tech.map((item) => (
            <span
              key={item}
              className="rounded-full border border-brand/10 bg-white/80 px-4 py-2 text-sm font-medium text-ink/70 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white/72"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.7, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-7 left-1/2 z-10 flex h-11 w-11 -translate-x-1/2 items-center justify-center rounded-full border border-brand/10 bg-white/80 text-brand shadow-lg shadow-brand/10 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-white"
      >
        <ArrowDown size={20} />
      </motion.a>
    </section>
  );
}

"use client";

import { motion, useInView } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 15, suffix: "+", label: "Projects" },
  { value: 3, suffix: "+", label: "Years Exp" },
  { value: 10, suffix: "k+", label: "Users Served" },
];

function CountUp({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let frame = 0;
    const totalFrames = 54;
    const timer = window.setInterval(() => {
      frame += 1;
      const progress = 1 - Math.pow(1 - frame / totalFrames, 3);
      setCount(Math.round(value * progress));
      if (frame >= totalFrames) window.clearInterval(timer);
    }, 22);

    return () => window.clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[0.85fr_1.15fr]">
        <motion.div
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center lg:items-start"
        >
          <div className="relative">
            <div className="absolute -inset-3 rounded-full bg-gradient-to-br from-brand via-blush to-lavender opacity-75 blur-sm" />
            <div className="relative h-56 w-56 overflow-hidden rounded-full border-[10px] border-white bg-white shadow-2xl shadow-brand/20 dark:border-[#2a101d] sm:h-72 sm:w-72">
              <Image
                src="/siddharth-avatar.jpeg"
                alt="Siddharth Chaurasiya"
                fill
                sizes="(min-width: 640px) 18rem, 14rem"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="mt-8 flex gap-3">
            {[
              { href: "mailto:siddharth.chaurasiya@example.com", icon: Mail, label: "Email" },
              { href: "https://www.linkedin.com/in/siddharth-chaurasiya-9b502b378/", icon: Linkedin, label: "LinkedIn" },
              { href: "https://github.com/Siddcse", icon: Github, label: "GitHub" },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-sm transition hover:-translate-y-1 hover:border-brand/20 hover:shadow-lg hover:shadow-brand/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
              >
                <Icon size={19} />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand dark:text-blush">About</p>
          <h2 className="font-heading text-balance text-4xl font-bold tracking-normal text-ink dark:text-white sm:text-5xl">
            I turn product ideas into polished, scalable experiences.
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted dark:text-white/78">
            Siddharth Chaurasiya is a full stack developer focused on building fast, accessible,
            and beautiful digital products. He works across React, Next.js, Node.js, TypeScript,
            PostgreSQL, Docker, AWS, and Firebase to ship reliable web and mobile apps with a
            clean user experience.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-3xl border border-brand/10 bg-white p-6 shadow-[0_20px_60px_rgba(48,5,26,0.06)] dark:border-white/15 dark:bg-white/[0.1]"
              >
                <div className="font-heading text-4xl font-bold text-brand dark:text-blush">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </div>
                <p className="mt-2 text-sm font-medium text-muted dark:text-white/72">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

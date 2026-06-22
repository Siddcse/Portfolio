"use client";

import { motion } from "framer-motion";
import { ArrowUp, Github, Heart, Linkedin, Mail } from "lucide-react";



const socialLinks = [
  { href: "mailto:siddharth.chaurasiya@example.com",          icon: Mail,     label: "Email" },
  { href: "https://www.linkedin.com/in/siddharth-chaurasiya-9b502b378/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://github.com/Siddcse",                        icon: Github,   label: "GitHub" },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-brand/10 bg-white px-4 pb-8 pt-14 dark:border-white/10 dark:bg-[#12060d] sm:px-6 lg:px-8">
      {/* Ambient glows */}
      <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-brand/5 blur-3xl dark:bg-blush/10" />
      <div className="pointer-events-none absolute -right-20 -top-10 h-56 w-56 rounded-full bg-lavender/5 blur-3xl dark:bg-lavender/10" />

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto max-w-6xl"
      >
        {/* ── Main row ── */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">

          {/* Brand + tagline + socials */}
          <motion.div variants={item} className="max-w-xs shrink-0">
            <p className="text-sm leading-7 text-muted dark:text-white/55">
              Building fast, beautiful web &amp; mobile apps with product polish
              and technical depth.
            </p>
            <div className="mt-5 flex gap-2.5">
              {socialLinks.map(({ href, icon: Icon, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("mailto") ? undefined : "_blank"}
                  rel={href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-brand/10 bg-white text-brand shadow-sm transition hover:-translate-y-0.5 hover:border-brand/25 hover:shadow-md hover:shadow-brand/10 dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </motion.div>


          {/* CTA card */}
          <motion.div
            variants={item}
            className="rounded-2xl border border-brand/10 bg-gradient-to-br from-brand/5 via-white to-lavender/5 p-6 shadow-[0_16px_48px_rgba(48,5,26,0.06)] dark:border-white/10 dark:from-white/[0.06] dark:via-transparent dark:to-lavender/10 lg:max-w-[17rem]"
          >
            <span className="inline-block rounded-full bg-brand/8 px-3 py-1 text-xs font-semibold text-brand dark:bg-blush/15 dark:text-blush">
              Open to Work
            </span>
            <h3 className="font-heading mt-3 text-lg font-bold leading-snug text-ink dark:text-white">
              Have a project in mind?
            </h3>
            <p className="mt-1.5 text-sm leading-6 text-muted dark:text-white/55">
              Let&apos;s collaborate and build something great.
            </p>
            <a
              href="#contact"
              className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-brand/20 transition hover:-translate-y-0.5 hover:shadow-brand/35"
            >
              Get in touch
            </a>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-gradient-to-r from-transparent via-brand/12 to-transparent dark:via-white/10" />

        {/* Bottom bar */}
        <motion.div
          variants={item}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <p className="flex items-center gap-1.5 text-xs text-muted dark:text-white/45">
            © {new Date().getFullYear()} Siddharth Chaurasiya · Made with
            <Heart size={12} className="fill-blush text-blush" />
            in Next.js
          </p>

          <a
            href="#home"
            aria-label="Back to top"
            className="group flex items-center gap-1.5 rounded-full border border-brand/10 bg-white px-3.5 py-1.5 text-xs font-semibold text-brand shadow-sm transition hover:-translate-y-0.5 hover:border-brand/20 hover:shadow-md dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            <ArrowUp size={13} className="transition group-hover:-translate-y-0.5" />
            Back to top
          </a>
        </motion.div>
      </motion.div>
    </footer>
  );
}

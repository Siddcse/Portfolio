"use client";

import { motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const shouldUseDark = savedTheme ? savedTheme === "dark" : prefersDark;
    document.documentElement.classList.toggle("dark", shouldUseDark);
    setIsDark(shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextTheme = !isDark;
    document.documentElement.classList.toggle("dark", nextTheme);
    window.localStorage.setItem("theme", nextTheme ? "dark" : "light");
    setIsDark(nextTheme);
  };

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-50 px-4 py-4"
    >
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-300 sm:px-6 ${
          isScrolled
            ? "border-brand/10 bg-white/78 shadow-[0_18px_60px_rgba(48,5,26,0.08)] backdrop-blur-xl dark:border-white/10 dark:bg-[#1e0a15]/78 dark:shadow-black/20"
            : "border-transparent bg-white/40 dark:bg-[#1e0a15]/35"
        }`}
      >
        <a
          href="#home"
          aria-label="Siddharth Chaurasiya home"
          className="font-heading flex h-11 w-11 items-center justify-center rounded-full bg-brand text-base font-bold text-white shadow-lg shadow-brand/20"
        >
          SC
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition hover:text-brand dark:text-white/70 dark:hover:text-white"
            >
              {link.label}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="hidden items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:-translate-y-0.5 hover:shadow-brand/30 md:inline-flex"
        >
          {isDark ? <Sun size={16} /> : <Moon size={16} />}
          {isDark ? "Light Mode" : "Dark Mode"}
        </button>

        <button
          type="button"
          aria-label="Toggle navigation menu"
          onClick={() => setIsOpen((value) => !value)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-brand/10 text-brand dark:border-white/15 dark:text-white md:hidden"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isOpen ? (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-3 max-w-6xl rounded-3xl border border-brand/10 bg-white/92 p-4 shadow-2xl shadow-brand/10 backdrop-blur-xl dark:border-white/10 dark:bg-[#1e0a15]/92 md:hidden"
        >
          <div className="grid gap-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-ink/75 hover:bg-brand/5 hover:text-brand dark:text-white/75 dark:hover:bg-white/10 dark:hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                toggleTheme();
                setIsOpen(false);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-2xl bg-brand px-4 py-3 text-center text-sm font-semibold text-white"
            >
              {isDark ? <Sun size={16} /> : <Moon size={16} />}
              {isDark ? "Light Mode" : "Dark Mode"}
            </button>
          </div>
        </motion.div>
      ) : null}
    </motion.header>
  );
}

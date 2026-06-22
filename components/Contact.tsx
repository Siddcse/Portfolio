"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Loader2, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";

const contactLinks = [
  { href: "mailto:siddharth.chaurasiya@example.com", label: "siddharth.chaurasiya@example.com", icon: Mail },
  { href: "https://www.linkedin.com/in/siddharth-chaurasiya-9b502b378/", label: "LinkedIn", icon: Linkedin },
  { href: "https://github.com/Siddcse", label: "GitHub", icon: Github },
];

function Field({
  id,
  label,
  type = "text",
  textarea = false,
}: {
  id: string;
  label: string;
  type?: string;
  textarea?: boolean;
}) {
  const className =
    "w-full rounded-2xl border border-brand/10 bg-white px-4 py-4 text-base text-ink outline-none transition placeholder:text-muted/60 focus:border-brand focus:shadow-[0_0_0_4px_rgba(48,5,26,0.09)] dark:border-white/15 dark:bg-white/[0.1] dark:text-white dark:placeholder:text-white/40 dark:focus:border-blush/60";

  return (
    <div className="relative">
      {textarea ? (
        <textarea id={id} name={id} required rows={5} placeholder={label} autoComplete="off" className={`${className} resize-none`} />
      ) : (
        <input id={id} name={id} required type={type} placeholder={label} autoComplete="off" className={className} />
      )}
    </div>
  );
}

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name:    formData.get("name"),
          email:   formData.get("email"),
          message: formData.get("message"),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      form.reset();
      setStatus("success");
      window.setTimeout(() => setStatus("idle"), 3000);
    } catch {
      setStatus("error");
      window.setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section id="contact" className="px-4 py-24 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 38 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto grid max-w-6xl gap-10 rounded-[2rem] border border-brand/10 bg-white p-6 shadow-[0_22px_80px_rgba(48,5,26,0.07)] dark:border-white/15 dark:bg-white/[0.1] dark:shadow-black/20 sm:p-8 lg:grid-cols-[0.8fr_1.2fr] lg:p-10"
      >
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand dark:text-blush">Contact</p>
          <h2 className="font-heading text-balance text-4xl font-bold tracking-normal text-ink dark:text-white sm:text-5xl">
            Have an idea worth building?
          </h2>
          <p className="mt-5 max-w-md leading-7 text-muted dark:text-white/78">
            Send a message and Siddharth will get back to you about product builds, full stack
            development, and frontend polish.
          </p>

          <div className="mt-9 grid gap-3">
            {contactLinks.map(({ href, label, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="inline-flex items-center gap-3 rounded-2xl border border-brand/10 bg-brand/5 px-4 py-3 text-sm font-semibold text-brand transition hover:-translate-y-0.5 hover:bg-brand/10 dark:border-white/15 dark:bg-white/10 dark:text-white dark:hover:bg-white/15"
              >
                <Icon size={18} />
                {label}
              </a>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit} className="grid gap-4">
          <Field id="name" label="Name" />
          <Field id="email" label="Email" type="email" />
          <Field id="message" label="Message" textarea />
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-brand px-7 py-4 text-sm font-semibold text-white shadow-xl shadow-brand/20 transition hover:-translate-y-1 hover:shadow-brand/35 disabled:cursor-not-allowed disabled:opacity-75"
          >
            {status === "loading" ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            {status === "loading" ? "Sending..." : "Send Message"}
          </button>
          {status === "success" ? (
            <p className="rounded-2xl bg-brand/5 px-4 py-3 text-sm font-semibold text-brand dark:bg-blush/15 dark:text-blush">
              ✅ Message bhej diya! Siddharth jald reply karega.
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-600 dark:bg-red-900/20 dark:text-red-400">
              ❌ Kuch galat ho gaya. Dobara try karo.
            </p>
          ) : null}
        </form>
      </motion.div>
    </section>
  );
}

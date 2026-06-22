"use client";

import {
  Braces,
  Cloud,
  Code2,
  Database,
  Figma,
  Flame,
  GitBranch,
  Hexagon,
  Layers,
  Server,
  ShipWheel,
  Workflow,
  type LucideIcon,
} from "lucide-react";

const frontend = [
  { name: "React", icon: Braces },
  { name: "Next.js", icon: Layers },
  { name: "TypeScript", icon: Code2 },
  { name: "Tailwind", icon: Workflow },
  { name: "Figma", icon: Figma },
  { name: "Git", icon: GitBranch },
];

const backend = [
  { name: "Node.js", icon: Hexagon },
  { name: "Express", icon: Server },
  { name: "PostgreSQL", icon: Database },
  { name: "MongoDB", icon: Database },
  { name: "Docker", icon: ShipWheel },
  { name: "AWS", icon: Cloud },
  { name: "Firebase", icon: Flame },
];

function SkillPill({ name, icon: Icon }: { name: string; icon: LucideIcon }) {
  return (
    <span className="mx-2 inline-flex items-center gap-2 rounded-full border border-brand/10 bg-white px-5 py-3 text-sm font-semibold text-ink shadow-sm transition hover:scale-105 hover:border-brand/20 hover:text-brand hover:shadow-lg hover:shadow-brand/10 dark:border-white/15 dark:bg-white/[0.1] dark:text-white dark:hover:border-blush/40 dark:hover:text-blush">
      <Icon size={18} className="text-brand dark:text-blush" />
      {name}
    </span>
  );
}

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: typeof frontend;
  reverse?: boolean;
}) {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div className="marquee-group overflow-hidden py-3">
      <div className={`flex w-max ${reverse ? "marquee-track-reverse" : "marquee-track"}`}>
        {repeated.map((item, index) => (
          <SkillPill key={`${item.name}-${index}`} name={item.name} icon={item.icon} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="overflow-hidden px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl text-center">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-brand dark:text-blush">Skills</p>
        <h2 className="font-heading mx-auto max-w-3xl text-balance text-4xl font-bold tracking-normal text-ink dark:text-white sm:text-5xl">
          Tools I use to shape ideas into dependable software.
        </h2>
      </div>

      <div className="relative mx-auto mt-12 max-w-6xl">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 bg-gradient-to-r from-white to-transparent dark:from-[#12060d]" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 bg-gradient-to-l from-white to-transparent dark:from-[#12060d]" />
        <MarqueeRow items={frontend} />
        <MarqueeRow items={backend} reverse />
      </div>
    </section>
  );
}

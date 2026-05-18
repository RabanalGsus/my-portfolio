"use client";

import { useState } from "react";
import Section from "@/components/Section";
import Tag from "@/components/Tag";

type ProjectLink = {
  label: string;
  href: string;
};

export default function ProjectCard({
  title,
  description,
  tech,
  year,
  problem,
  approach,
  outcome,
  links,
}: {
  title: string;
  description: string;
  tech: string[];
  year?: string;
  problem?: string;
  approach?: string;
  outcome?: string;
  links?: ProjectLink[];
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <article className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/80 p-6 shadow-sm transition hover:border-[rgb(var(--accent))]">
      <button
        type="button"
        onClick={() => setIsOpen((value) => !value)}
        className="w-full cursor-pointer text-left"
        aria-expanded={isOpen}
      >
        <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
          <h3 className="min-w-0 text-base font-semibold leading-snug text-[rgb(var(--text))]">
            {title}
          </h3>

          <div className="flex shrink-0 items-center gap-3 sm:justify-end sm:pt-0.5">
            {year ? (
              <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-2.5 py-1 text-xs font-medium text-[rgb(var(--muted))]">
                {year}
              </span>
            ) : null}

            <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 text-xs font-medium text-[rgb(var(--muted))]">
              {isOpen ? "−" : "+"}
            </span>
          </div>
        </div>

        <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--muted))]">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.slice(0, 6).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </div>
      </button>

      {isOpen ? (
        <div className="mt-6 border-t border-[rgb(var(--border))] pt-6">
          {problem ? (
            <Section title="Problem">
              <p className="text-[rgb(var(--muted))]">{problem}</p>
            </Section>
          ) : null}

          {approach ? (
            <Section title="Approach">
              <p className="text-[rgb(var(--muted))]">{approach}</p>
            </Section>
          ) : null}

          {outcome ? (
            <Section title="Outcome">
              <p className="text-[rgb(var(--muted))]">{outcome}</p>
            </Section>
          ) : null}

          {links?.length ? (
            <div className="mt-6 flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-3 py-1 text-sm font-medium text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent))]"
                >
                  {link.label}
                  <span className="ml-1 text-[rgb(var(--muted))]">↗</span>
                </a>
              ))}
            </div>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import type { Project } from "@/data/projects";

export default function ProjectBrowser({ projects }: { projects: Project[] }) {
  const searchParams = useSearchParams();
  const [activeCategory, setActiveCategory] = useState("All");
  const [openProject, setOpenProject] = useState<string | null>(null);

  useEffect(() => {
    const categoryFromUrl = searchParams.get("category");

    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const categories = useMemo(() => {
    const unique = new Set<string>();

    projects.forEach((project) => {
      project.categories.forEach((category) => unique.add(category));
    });

    return ["All", ...Array.from(unique).sort()];
  }, [projects]);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return projects;

    return projects.filter((project) =>
      project.categories.includes(activeCategory)
    );
  }, [projects, activeCategory]);

  function handleCategoryClick(category: string) {
    setActiveCategory(category);
    setOpenProject(null);
  }

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {categories.map((category) => {
          const isActive = category === activeCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryClick(category)}
              className={`rounded-full border px-3 py-1 text-sm shadow-sm transition hover:-translate-y-0.5 ${
                isActive
                  ? "border-[rgb(var(--accent))] bg-[rgb(var(--accent))]/15 text-[rgb(var(--text))]"
                  : "border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 text-[rgb(var(--muted))] hover:border-[rgb(var(--accent))] hover:text-[rgb(var(--text))]"
              }`}
            >
              {category}
            </button>
          );
        })}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 p-6 text-[rgb(var(--muted))]">
          No projects found for this category.
        </div>
      ) : (
        <div className="space-y-5">
          {filteredProjects.map((project) => {
            const isOpen = openProject === project.title;

            return (
              <article
                key={project.title}
                className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/80 p-6 shadow-sm transition hover:border-[rgb(var(--accent))]"
              >
                <button
                  type="button"
                  onClick={() => setOpenProject(isOpen ? null : project.title)}
                  className="w-full cursor-pointer text-left"
                >
                  <div className="grid gap-3 sm:grid-cols-[1fr_auto] sm:items-start">
                    <h2 className="min-w-0 text-lg font-semibold leading-snug text-[rgb(var(--text))]">
                      {project.title}
                    </h2>

                    <div className="flex shrink-0 items-center gap-3 sm:justify-end sm:pt-0.5">
                      {project.year ? (
                        <span className="rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 px-2.5 py-1 text-xs font-medium text-[rgb(var(--muted))]">
                          {project.year}
                        </span>
                      ) : null}

                      <span className="flex h-6 w-6 items-center justify-center rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--bg))]/50 text-xs font-medium text-[rgb(var(--muted))]">
                        {isOpen ? "−" : "+"}
                      </span>
                    </div>
                  </div>

                  <p className="mt-2 text-sm leading-relaxed text-[rgb(var(--muted))]">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 6).map((tech) => (
                      <Tag key={tech}>{tech}</Tag>
                    ))}
                  </div>
                </button>

                {isOpen ? (
                  <div className="mt-6 border-t border-[rgb(var(--border))] pt-6">
                    <Section title="Problem">
                      <p className="text-[rgb(var(--muted))]">
                        {project.problem}
                      </p>
                    </Section>

                    <Section title="Approach">
                      <p className="text-[rgb(var(--muted))]">
                        {project.approach}
                      </p>
                    </Section>

                    <Section title="Outcome">
                      <p className="text-[rgb(var(--muted))]">
                        {project.outcome}
                      </p>
                    </Section>

                    {project.links?.length ? (
                      <div className="mt-6 flex flex-wrap gap-3">
                        {project.links.map((link) => (
                          <a
                            key={link.href}
                            href={link.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex rounded-full border border-[rgb(var(--border))] bg-[rgb(var(--panel))]/70 px-3 py-1 text-sm text-[rgb(var(--text))] shadow-sm transition hover:-translate-y-0.5 hover:border-[rgb(var(--accent))]"
                          >
                            {link.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                ) : null}
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
}
import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";
import Container from "@/components/Container";

export default function ProjectsPage() {
  return (
    <main>
      <Container>
        <header>
          <h1 className="text-3xl font-bold tracking-tight text-[rgb(var(--text))]">
            Projects
          </h1>
          <p className="mt-3 text-[rgb(var(--muted))]">
            A selection of research-oriented and applied work.
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--panel))] p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold text-[rgb(var(--text))]">
                  {p.title}
                </h2>
                {p.year ? (
                  <div className="text-sm text-[rgb(var(--muted))]">{p.year}</div>
                ) : null}
              </div>

              <p className="mt-2 text-[rgb(var(--muted))]">{p.description}</p>

              <Section title="Problem">
                <p className="text-[rgb(var(--muted))]">{p.problem}</p>
              </Section>

              <Section title="Approach">
                <p className="text-[rgb(var(--muted))]">{p.approach}</p>
              </Section>

              <Section title="Methods">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Section>

              <Section title="Outcome">
                <p className="text-[rgb(var(--muted))]">{p.outcome}</p>
              </Section>

              {p.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {p.links.map((l) => (
                    <a
                      key={l.href}
                      href={l.href}
                      className="underline decoration-[rgb(var(--accent))] underline-offset-4 text-[rgb(var(--text))] hover:text-[rgb(var(--accent))] transition-colors"
                    >
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </Container>
    </main>
  );
}

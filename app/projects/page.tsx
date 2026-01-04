import Section from "@/components/Section";
import Tag from "@/components/Tag";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 py-14">
        <header>
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <p className="mt-3 text-zinc-400">
            A selection of research-oriented and applied work.
          </p>
        </header>

        <div className="mt-10 space-y-8">
          {projects.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-zinc-800 bg-zinc-900/20 p-6"
            >
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h2 className="text-lg font-semibold">{p.title}</h2>
                {p.year ? <div className="text-sm text-zinc-500">{p.year}</div> : null}
              </div>

              <p className="mt-2 text-zinc-400">{p.description}</p>

              <Section title="Problem">
                <p className="text-zinc-400">{p.problem}</p>
              </Section>

              <Section title="Approach">
                <p className="text-zinc-400">{p.approach}</p>
              </Section>

              <Section title="Tech">
                <div className="flex flex-wrap gap-2">
                  {p.tech.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Section>

              <Section title="Outcome">
                <p className="text-zinc-400">{p.outcome}</p>
              </Section>

              {p.links?.length ? (
                <div className="mt-6 flex flex-wrap gap-4 text-sm">
                  {p.links.map((l) => (
                    <a key={l.href} className="underline text-zinc-200" href={l.href}>
                      {l.label}
                    </a>
                  ))}
                </div>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}

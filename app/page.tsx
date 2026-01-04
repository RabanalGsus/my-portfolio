import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <main>
      <div className="mx-auto max-w-3xl px-6 py-14">
        <header>
          <h1 className="text-4xl font-bold tracking-tight">Jesús Rabanal</h1>
          <p className="mt-3 text-zinc-400">
            NLP · Linguistics &amp; Technology · Developer
          </p>

          <p className="mt-6 text-zinc-300 leading-relaxed">
            I work at the intersection of linguistics, natural language
            processing, and software development. My interests include neural
            language models, compositional generalization, and practical ML
            systems for language data.
          </p>

          <div className="mt-6 flex flex-wrap gap-3 text-sm">
            <a className="underline text-zinc-200" href="https://github.com/YOUR_USERNAME">
              GitHub
            </a>
            <a className="underline text-zinc-200" href="https://www.linkedin.com/in/YOUR_PROFILE/">
              LinkedIn
            </a>
            <a className="underline text-zinc-200" href="mailto:you@example.com">
              Email
            </a>
            <a className="underline text-zinc-200" href="/cv.pdf">
              CV (PDF)
            </a>
          </div>
        </header>

        <Section title="Currently">
          <ul className="list-disc pl-5 space-y-2 text-zinc-400">
            <li>MSc-level coursework in NLP, linear algebra, and probability</li>
            <li>
              Research-oriented projects involving Transformers and sequence
              learning
            </li>
            <li>
              Building and evaluating language models for low-resource and
              structured tasks
            </li>
          </ul>
        </Section>

        <Section title="Selected work">
          <div className="grid gap-4">
            {featured.map((p) => (
              <ProjectCard
                key={p.title}
                title={p.title}
                description={p.description}
                tech={p.tech}
                href={p.links?.find((l) => l.label === "GitHub")?.href}
              />
            ))}
          </div>

          <div className="mt-5 text-sm">
            <a className="underline text-zinc-200" href="/projects">
              View all projects →
            </a>
          </div>
        </Section>

        <footer className="mt-14 text-sm text-zinc-500">
          © {new Date().getFullYear()} Jesús Rabanal
        </footer>
      </div>
    </main>
  );
}
